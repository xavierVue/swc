// @module: commonjs
// @target: esnext
// @filename: 0.ts
import _async_to_generator from "@swc/helpers/src/_async_to_generator.mjs";
export class B {
    print() {
        return "I am B";
    }
}
function foo() {
    return _foo.apply(this, arguments);
}
function _foo() {
    _foo = // @filename: 2.ts
    _async_to_generator(function*() {
        class C extends (yield import("./0")).B {
        }
        var c = new C();
        c.print();
    });
    return _foo.apply(this, arguments);
}
foo();
