/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

var _ended, _idle, _queue, _passed, _limit, _idleTimer, _push;
/**
 * An EventIterator, used for asynchronously iterating over received values.
 */
class EventIterator {
    /**
     * @param emitter The event emitter to listen to.
     * @param event The event we're listening for to receives values from.
     * @param limit The amount of values to receive before ending the iterator.
     * @param options Any extra options.
     */
    constructor(emitter, event, options = {}) {
        /**
         * The emitter to listen to.
         */
        Object.defineProperty(this, "emitter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * The event the event iterator is listening for to receive values from.
         */
        Object.defineProperty(this, "event", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * The filter used to filter out values.
         */
        Object.defineProperty(this, "filter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * Whether or not the EventIterator has ended.
         */
        _ended.set(this, false);
        /**
         * The amount of idle time in ms before moving on.
         */
        _idle.set(this, void 0);
        /**
         * The queue of received values.
         */
        _queue.set(this, []);
        /**
         * The amount of events that have passed the filter.
         */
        _passed.set(this, 0);
        /**
         * The limit before ending the EventIterator.
         */
        _limit.set(this, void 0);
        /**
         * The timer to track when this will idle out.
         */
        _idleTimer.set(this, null);
        /**
         * The push handler with context bound to the instance.
         */
        _push.set(this, void 0);
        this.emitter = emitter;
        this.event = event;
        __classPrivateFieldSet(this, _limit, options.limit ?? Infinity);
        __classPrivateFieldSet(this, _idle, options.idle);
        this.filter = options.filter ?? (() => true);
        // This timer is to idle out on lack of valid responses
        if (__classPrivateFieldGet(this, _idle))
            __classPrivateFieldSet(this, _idleTimer, setTimeout(this.end.bind(this), __classPrivateFieldGet(this, _idle)));
        // @ts-expect-error Silence weird compiler issue regarding `this.push`'s arguments not being `any`.
        __classPrivateFieldSet(this, _push, this.push.bind(this));
        const maxListeners = this.emitter.getMaxListeners();
        if (maxListeners !== 0)
            this.emitter.setMaxListeners(maxListeners + 1);
        // @ts-expect-error Silence weird compiler issue regarding `this.push`'s arguments not being `any`.
        this.emitter.on(this.event, __classPrivateFieldGet(this, _push));
    }
    /**
     * Whether or not the EventIterator has ended.
     */
    get ended() {
        return __classPrivateFieldGet(this, _ended);
    }
    /**
     * Ends the EventIterator.
     */
    end() {
        if (__classPrivateFieldGet(this, _ended))
            return;
        __classPrivateFieldSet(this, _ended, true);
        __classPrivateFieldSet(this, _queue, []);
        // @ts-expect-error Silence weird compiler issue regarding `this.push`'s arguments not being `any`.
        this.emitter.off(this.event, __classPrivateFieldGet(this, _push));
        const maxListeners = this.emitter.getMaxListeners();
        if (maxListeners !== 0)
            this.emitter.setMaxListeners(maxListeners - 1);
    }
    /**
     * The next value that's received from the EventEmitter.
     */
    async next() {
        // If there are elements in the queue, return an undone response:
        if (__classPrivateFieldGet(this, _queue).length) {
            const value = __classPrivateFieldGet(this, _queue).shift();
            if (!this.filter(value))
                return this.next();
            if (__classPrivateFieldSet(this, _passed, +__classPrivateFieldGet(this, _passed) + 1) >= __classPrivateFieldGet(this, _limit))
                this.end();
            if (__classPrivateFieldGet(this, _idleTimer))
                __classPrivateFieldGet(this, _idleTimer).refresh();
            return { done: false, value };
        }
        // If the iterator ended, clean-up timer and return a done response:
        if (__classPrivateFieldGet(this, _ended)) {
            if (__classPrivateFieldGet(this, _idleTimer))
                clearTimeout(__classPrivateFieldGet(this, _idleTimer));
            return { done: true, value: undefined };
        }
        // Listen for a new element from the emitter:
        return new Promise((resolve) => {
            let idleTimer = null;
            // If there is an idle time set, we will create a temporary timer,
            // which will cause the iterator to end if no new elements are received:
            if (__classPrivateFieldGet(this, _idle)) {
                idleTimer = setTimeout(() => {
                    this.end();
                    resolve(this.next());
                }, __classPrivateFieldGet(this, _idle));
            }
            // Once it has received at least one value, we will clear the timer (if defined),
            // and resolve with the new value:
            this.emitter.once(this.event, () => {
                if (idleTimer)
                    clearTimeout(idleTimer);
                resolve(this.next());
            });
        });
    }
    /**
     * Handles what happens when you break or return from a loop.
     */
    return() {
        this.end();
        return Promise.resolve({ done: true, value: undefined });
    }
    /**
     * Handles what happens when you encounter an error in a loop.
     */
    throw() {
        this.end();
        return Promise.resolve({ done: true, value: undefined });
    }
    /**
     * The symbol allowing EventIterators to be used in for-await-of loops.
     */
    [(_ended = new WeakMap(), _idle = new WeakMap(), _queue = new WeakMap(), _passed = new WeakMap(), _limit = new WeakMap(), _idleTimer = new WeakMap(), _push = new WeakMap(), Symbol.asyncIterator)]() {
        return this;
    }
    /**
     * Pushes a value into the queue.
     */
    push(...value) {
        __classPrivateFieldGet(this, _queue).push(value);
    }
}

export { EventIterator };
//# sourceMappingURL=index.mjs.map
