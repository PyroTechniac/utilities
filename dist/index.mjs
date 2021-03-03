// TypeScript port of Serenity's standard framework buckets.
// Licensed to the Serenity Contributors under one or more agreements.
// The Serenity Contributors licenses this file to you under the ISC license.
// https://github.com/serenity-rs/serenity/blob/current/src/framework/standard/structures/buckets.rs
/**
 * The Bucket that handles ratelimits.
 */
class Bucket {
    constructor() {
        /**
         * The amount of milliseconds entries last.
         */
        Object.defineProperty(this, "delay", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /**
         * The bucket limits. If set to null, the requests will be limited to one
         * request per {@link delay} milliseconds.
         */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: { timespan: 0, maximum: 1 }
        });
        /**
         * The bucket entries for the instance.
         */
        Object.defineProperty(this, "entries", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map()
        });
    }
    /**
     * Sets the delay for the bucket.
     * @param delay The delay to be set.
     */
    setDelay(delay) {
        this.delay = delay;
        return this;
    }
    /**
     * Sets the limit for the bucket.
     * @param limit The limit to be set.
     */
    setLimit(limit) {
        this.limit = limit;
        return this;
    }
    /**
     * Retrieves the amount of time needed for the bucket to unlock.
     * @param id The ID of the entry to check.
     * @returns Always a positive number, 0 if there is no delay.
     */
    take(id) {
        const now = Date.now();
        const entry = this.getEntry(id);
        // If there is a limit:
        if (this.limit.maximum > 1) {
            // Then check whether tickets reach said limit:
            if (entry.tickets + 1 > this.limit.maximum) {
                // If the entry is new, setTime is initialized as 0, but also,
                // if the duration yields a negative number (expired limit),
                // then it must fall-back to setting tickets as 0, setTime as
                // now, and fall-back to the delay checking.
                if (entry.setTime !== 0) {
                    const duration = entry.setTime + this.limit.timespan - now;
                    if (duration > 0)
                        return duration;
                }
                entry.tickets = 0;
            }
            entry.setTime = now;
        }
        // If the entry is new, lastTime is initialized as 0, but also, if the
        // duration yields a negative number (expired delay), then it must
        // fall-back into increasing tickets by one and lastTime as now.
        if (this.delay !== 0 && entry.lastTime !== 0) {
            const duration = entry.lastTime + this.delay - now;
            if (duration > 0)
                return duration;
        }
        ++entry.tickets;
        entry.lastTime = now;
        // The entry wasn't either limited nor has an applicable delay, return 0.
        return 0;
    }
    getEntry(id) {
        const entry = this.entries.get(id);
        if (entry)
            return entry;
        const data = { lastTime: 0, setTime: 0, tickets: 0 };
        this.entries.set(id, data);
        return data;
    }
}

export { Bucket };
//# sourceMappingURL=index.mjs.map
