import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import foo from "./b";
var Foo = function() {
    "use strict";
    _class_call_check(this, Foo);
};
foo();
import Foo from "./a";
export default function foo() {
    new Foo();
};
import("./a");
export { Foo as default };
