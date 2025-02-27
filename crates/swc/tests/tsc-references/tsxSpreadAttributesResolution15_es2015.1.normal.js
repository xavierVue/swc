// @filename: file.tsx
// @jsx: preserve
// @noLib: true
// @skipLibCheck: true
// @libFiles: react.d.ts,lib.d.ts
import _extends from "@swc/helpers/src/_extends.mjs";
const React = require('react');
export default function Component(props) {
    return /*#__PURE__*/ React.createElement(AnotherComponent, _extends({}, props, {
        property2: true,
        AnotherProperty1: "hi"
    }));
};
function AnotherComponent({ property1  }) {
    return /*#__PURE__*/ React.createElement("span", null, property1);
}
