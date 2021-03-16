"use strict";
var _start, _end;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stopwatch = void 0;
const tslib_1 = require("tslib");
const perf_hooks_1 = require("perf_hooks");
/**
 * Stopwatch class, uses native node to replicate/extend performance-now dependency.
 */
class Stopwatch {
    /**
     * Starts a new stopwatch
     */
    constructor(digits = 2) {
        /**
         * The number of digits to appear after the decimal point when returning the friendly duration.
         */
        Object.defineProperty(this, "digits", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * The start time of this stopwatch
         */
        // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
        _start.set(this, void 0);
        /**
         * The end time of this stopwatch
         */
        // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
        _end.set(this, void 0);
        this.digits = digits;
        tslib_1.__classPrivateFieldSet(this, _start, perf_hooks_1.performance.now());
        tslib_1.__classPrivateFieldSet(this, _end, null);
    }
    /**
     * The duration of this stopwatch since start or start to end if this stopwatch has stopped.
     */
    get duration() {
        return tslib_1.__classPrivateFieldGet(this, _end) ? tslib_1.__classPrivateFieldGet(this, _end) - tslib_1.__classPrivateFieldGet(this, _start) : perf_hooks_1.performance.now() - tslib_1.__classPrivateFieldGet(this, _start);
    }
    /**
     * If the stopwatch is running or not.
     */
    get running() {
        return Boolean(!tslib_1.__classPrivateFieldGet(this, _end));
    }
    /**
     * Restarts the stopwatch (Returns a running state)
     */
    restart() {
        tslib_1.__classPrivateFieldSet(this, _start, perf_hooks_1.performance.now());
        tslib_1.__classPrivateFieldSet(this, _end, null);
        return this;
    }
    /**
     * Resets the Stopwatch to 0 duration (Returns a stopped state)
     */
    reset() {
        tslib_1.__classPrivateFieldSet(this, _start, perf_hooks_1.performance.now());
        tslib_1.__classPrivateFieldSet(this, _end, tslib_1.__classPrivateFieldGet(this, _start));
        return this;
    }
    /**
     * Starts the Stopwatch
     */
    start() {
        if (!this.running) {
            tslib_1.__classPrivateFieldSet(this, _start, perf_hooks_1.performance.now() - this.duration);
            tslib_1.__classPrivateFieldSet(this, _end, null);
        }
        return this;
    }
    /**
     * Stops the Stopwatch, freezing the duration
     */
    stop() {
        if (this.running)
            tslib_1.__classPrivateFieldSet(this, _end, perf_hooks_1.performance.now());
        return this;
    }
    /**
     * Defines toString behavior
     */
    toString() {
        const time = this.duration;
        if (time >= 1000)
            return `${(time / 1000).toFixed(this.digits)}s`;
        if (time >= 1)
            return `${time.toFixed(this.digits)}ms`;
        return `${(time * 1000).toFixed(this.digits)}μs`;
    }
}
exports.Stopwatch = Stopwatch;
_start = new WeakMap(), _end = new WeakMap();
//# sourceMappingURL=index.js.map