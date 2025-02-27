// @target: esnext
// @noImplicitAny: true
// @noEmit: true
import _async_to_generator from "@swc/helpers/src/_async_to_generator.mjs";
function fn1() {
    return _fn1.apply(this, arguments);
}
function _fn1() {
    _fn1 = _async_to_generator(function*() {
        const obj1 = yield {
            key: "value"
        };
        const obj2 = yield new Promise((resolve)=>resolve({
                key: "value"
            }));
        return yield {
            key: "value"
        };
    });
    return _fn1.apply(this, arguments);
}
