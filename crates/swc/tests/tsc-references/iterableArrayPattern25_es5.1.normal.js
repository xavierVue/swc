//@target: ES6
import _sliced_to_array from "@swc/helpers/src/_sliced_to_array.mjs";
function takeFirstTwoEntries() {
    for(var _len = arguments.length, _tmp = new Array(_len), _key = 0; _key < _len; _key++){
        _tmp[_key] = arguments[_key];
    }
    var __tmp = _sliced_to_array(_tmp, 2), ref = _sliced_to_array(__tmp[0], 2), k1 = ref[0], v1 = ref[1], ref1 = _sliced_to_array(__tmp[1], 2), k2 = ref1[0], v2 = ref1[1];
}
takeFirstTwoEntries(new Map([
    [
        "",
        0
    ],
    [
        "hello",
        1
    ]
]));
