// @module: esnext, es2015, commonjs, amd, system, umd
// @filename: 0.ts
// @declaration: true
export const a = 1;
export const b = 2;
// @filename: 1.ts
import * as _ns from './0';
export { _ns as ns };
ns.a;
ns.b;
// @filename: 2.ts
import * as foo from './1';
foo.ns.a;
foo.ns.b;
