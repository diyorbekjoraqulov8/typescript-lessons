/* TypeScript Data Types */

// let a = 12;
// Type of 'a' can only be a "number"
// a = "str"
// Type 'string' is not assignable to type 'number'
// Type of a can't be another Data Type

let a: number;
a = 12;

// let b = 'text' // type of be = auto 'string'
// b = true
// Type 'boolean' is not assignable to type 'string'
// b = 'text 2' // true
let b: string = 'text'

let c: boolean = true // true | false

// let d = null // type of d = auto 'any' because we didn't show type of d
let d: null = null
// let e = undefined // type of e = auto 'any' because we didn't show type of e
let e: undefined = undefined

// let f = {} // type of f = auto '{}'
// let f: object = {} // type of f = 'object'

// We need show object properties type
let f: { name: string, age: number } = { name: 'Diyorbek', age: 20 }
// type of f = { name: string, age: number }

f.name = 'Joraqulov' // name is changed

let g: any; // type of g can be all type in TS
g = 12
g = 'text'
g = false
g = { name: 'Diyorbek' }
g = function () {}
g = []
g = null
g = undefined

let h: number = 0o744
console.log(h);