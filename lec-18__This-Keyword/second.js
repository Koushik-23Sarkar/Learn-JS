var a;
console.log(a); //undefined
{
    //In this scope, "this" is empty
    a = this;
}
console.log(a); //{}

//__________________________________________________________________________________________________________________________________________________

var b;
{  // <----- 'this' points to the object;
    this.name="hello world"
    b = this;
    this.age=20;
}

console.log(b); //{ name: 'hello world', age: 20 }
