// @target: ES6
// @filename: class.ts
var X;
(function(X) {
    let Y;
    (function(Y) {
        class Point {
            constructor(x, y){
                this.x = x;
                this.y = y;
            }
        }
        Y.Point = Point;
    })(Y = X.Y || (X.Y = {}));
})(X || (X = {}));
(function(X) {
    let Y;
    (function(Y) {
        let Point;
        (function(Point1) {
            var Origin = Point1.Origin = new Point(0, 0);
        })(Point = Y.Point || (Y.Point = {}));
    })(Y = X.Y || (X.Y = {}));
})(X || (X = {}));
// @filename: test.ts
//var cl: { x: number; y: number; }
var cl = new X.Y.Point(1, 1);
var cl = X.Y.Point.Origin; // error not expected here same as bug 83996 ?
// @filename: simple.ts
class A {
}
(function(A1) {
    var Instance = A1.Instance = new A();
})(A || (A = {}));
// ensure merging works as expected
var a = A.Instance;
var a = new A();
var a;
