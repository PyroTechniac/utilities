'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const { getPromiseDetails, getProxyDetails } = typeof process === 'undefined'
    ? {
        getPromiseDetails: () => undefined,
        getProxyDetails: () => undefined
    }
    : // @ts-ignore process.binding exists
        process.binding('util');
/**
 * The class for deep checking Types
 */
class Type {
    /**
     * @param value The value to generate a deep Type of
     * @param parent The parent value used in recursion
     */
    constructor(value, parent = null) {
        /**
         * The value to generate a deep Type of
         */
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * The shallow type of this
         */
        Object.defineProperty(this, "is", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * The parent of this Type
         */
        Object.defineProperty(this, "parent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * The child keys of this Type
         */
        Object.defineProperty(this, "childKeys", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map()
        });
        /**
         * The child values of this Type
         */
        Object.defineProperty(this, "childValues", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map()
        });
        this.value = value;
        this.is = Type.resolve(value);
        this.parent = parent;
    }
    /**
     * The type string for the children of this Type
     */
    get childTypes() {
        if (!this.childValues.size)
            return '';
        return `<${(this.childKeys.size ? `${Type.list(this.childKeys)}, ` : '') + Type.list(this.childValues)}>`;
    }
    /**
     * The full type string generated.
     */
    toString() {
        this.check();
        return `${this.is}${this.childTypes}`;
    }
    /**
     * Walks the linked list backwards, for checking circulars.
     */
    *parents() {
        // eslint-disable-next-line @typescript-eslint/no-this-alias, no-cond-assign, consistent-this
        let current = this;
        // eslint-disable-next-line no-cond-assign
        while ((current = current.parent))
            yield current;
    }
    /**
     * Checks if the value of this Type is a circular reference to any parent.
     */
    isCircular() {
        for (const parent of this.parents())
            if (parent.value === this.value)
                return true;
        return false;
    }
    /**
     * The subtype to create based on this.value's sub value.
     * @param value The sub value
     */
    addValue(value) {
        const child = new Type(value, this);
        this.childValues.set(child.is, child);
    }
    /**
     * The subtype to create based on this.value's entries.
     * @param entry The entry
     */
    addEntry([key, value]) {
        const child = new Type(key, this);
        this.childKeys.set(child.is, child);
        this.addValue(value);
    }
    /**
     * Get the deep type name that defines the input.
     */
    check() {
        if (Object.isFrozen(this))
            return;
        const promise = getPromiseDetails(this.value);
        const proxy = getProxyDetails(this.value);
        if (typeof this.value === 'object' && this.isCircular()) {
            this.is = `[Circular:${this.is}]`;
        }
        else if (promise && promise[0]) {
            this.addValue(promise[1]);
        }
        else if (proxy && proxy[0]) {
            this.is = 'Proxy';
            this.addValue(proxy[0]);
        }
        else if (this.value instanceof Map) {
            for (const entry of this.value)
                this.addEntry(entry);
        }
        else if (Array.isArray(this.value) || this.value instanceof Set) {
            for (const value of this.value)
                this.addValue(value);
        }
        else if (this.is === 'Object') {
            this.is = 'Record';
            for (const entry of Object.entries(this.value))
                this.addEntry(entry);
        }
        Object.freeze(this);
    }
    /**
     * Resolves the type name that defines the input.
     * @param value The value to get the type name of
     */
    static resolve(value) {
        const type = typeof value;
        switch (type) {
            case 'object':
                return value === null ? 'null' : value.constructor && value.constructor.name;
            case 'function':
                return `${value.constructor.name}(${value.length}-arity)`;
            case 'undefined':
                return 'void';
            default:
                return type;
        }
    }
    /**
     * Joins the list of child types.
     * @param values The values to list
     */
    static list(values) {
        return [...values.values()].sort().join(' | ');
    }
}

exports.Type = Type;
//# sourceMappingURL=index.js.map
