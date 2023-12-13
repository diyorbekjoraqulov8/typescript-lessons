/* TypeScript'da tiplarni o'zgartirish va birlashtirish */
// unknown type, union types, literal types, type aliases, required and optional properties, operator in

let a: any = 10
let b: number = a // Bu usul tavsiya qilinmaydi

let c: unknown = 20.9745
let d: number = <number>c
let f: number = c as number // Bu usul Type'ni o'zgartirishning xavfsiz usuli

// let d: number = (<number> c).toString()
// let f: number = (c as number).toFixed(2)

// union types - bitta variablega bir qancha Type berish
let h: number | string | boolean = 10;
h = 'one'
h = true

// literal types - variable'ga berish mumkin bo'lgan bir qancha qiymat'ni ko'rsatish

let s: "sm" | "md" | "lg"
s = "sm"
s = "lg"
s = "md"

// Type aliases - bir TYPE'ga bir qancha Type va qiymatlarni birlashtirish

type Sizes = "SM" | "MD" | "LG" | boolean

let s2: Sizes = "SM"
s2 = "LG"
s2 = "MD"

let s3: Sizes = false;
s3 = "SM"

type OBJ1 = { name: string } | { age: number } // properties are optional

let obj1: OBJ1 = { name: "Hello" }
obj1 = { age: 20 }
obj1 = { name: "Hello1", age: 20 }

type OBJ2 = { name: string } & { age: number } // both property are required

let obj2: OBJ2 = { name: "Azizbek", age: 13 }
// let obj2: OBJ2 = { name: "Azizbek" }
// let obj2: OBJ2 = { age: 13 }

type OBJ3 = { name: string; age?: number }; // name is required and age is optional

let obj3: OBJ3 = { name: "Diyorbek" }
obj3 = { name: "Diyorbek", age: 20 }
// obj3 = { age: 20 }

if ("age" in obj3) {
  console.log("mavjud");
} else {
  console.log("mavjud emas");
}