import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
var A = function() {
    "use strict";
    _class_call_check(this, A);
};
import * as types from "./b";
import types from "./c";
new types.A(), new types.B();
export { A, types as default };
