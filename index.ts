/* TypeScript => function, signature functions, function overloads */

// function fnName(arg1:arg-type, arg2:arg-type): return-data-type {
//   return x ** y;
// }

// Function Decloration
function pow(x: number, y: number): number {
  return x**y
}
// Arrow Function
const add = (x: number, y: number): number => x + y

// void functions - hech narsa qaytarmaydigan funksiyalar.
function log(x: number): void {
  console.log(x);
}

// never functions - hech qachon tugamaydiga (rekursev), yoki Error qaytaradigan funksiyalar
function someFunc(s: string): never {
  throw new Error(s)
}

// signature functions - biz shablon yaratamiz va keyinroq shunga moslab qiymat beramiz
let c: (x:number, y:string) => string;
c = function(a:number, b:string): string {
	return `${b}: ${a}`
}
console.log(c(2,"Javob"));

// overload functions - har-bir parametrga alohida type berish imkonini beradi
function overloadFunc(x:number, y:number): number;
function overloadFunc(x:number, y:string): string;
function overloadFunc(x:any, y:any): any {
  if (typeof x === 'number' && typeof y === 'number') {
    return x + y
  } else {
    return `${x} ${y}`
  }
}

console.log(overloadFunc(1,2));