import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _create_class from "@swc/helpers/src/_create_class.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
var Base = function() {
    "use strict";
    function Base() {
        _class_call_check(this, Base);
    }
    return _create_class(Base, [
        {
            key: "x",
            get: function() {
                return 2;
            },
            set: function(value) {
                console.log("x was set to ".concat(value));
            }
        }
    ]), Base;
}(), Derived = function(Base) {
    "use strict";
    _inherits(Derived, Base);
    var _super = _create_super(Derived);
    function Derived() {
        var _this;
        return _class_call_check(this, Derived), _this = _super.apply(this, arguments), _this.x = 1, _this;
    }
    return Derived;
}(Base), obj = new Derived();
console.log(obj.x);
