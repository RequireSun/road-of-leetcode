继承 (ES5 & ES6)
===

在 es5 环境下最好的继承方法:

```javascript
function Base(a) {
    this.a = a;
}

Base.prototype.logA = function () {
    console.log(this.a);
};

function Extend(a, b) {
    Base.call(this, a);
    this.b = b;
}

// 生成原函数原型的实例, 并挂载链上
// 创建的这个对象只有 __proto__ 指向 Base
// 没有 Base 执行时往 this 上挂的那些属性
Extend.prototype = Object.create(Base.prototype);

Extend.prototype.logB = function () {
    console.log(this.b);
};

var instance1 = new Extend(1, 2);
var instance2 = new Extend(3, 4);
console.log(instance1);
instance1.logA();
instance1.logB();
console.log(instance2);
instance2.logA();
instance2.logB();
```
