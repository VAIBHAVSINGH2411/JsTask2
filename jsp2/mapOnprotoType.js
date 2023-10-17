Array.prototype.myMap = function (p) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(p(this[i]));
    }
    return newArray;
};
let arr = [10, 20, 30, 40, 50];
console.log("old array ", arr);
newarr = arr.myMap(ele => ele * 2);
console.log("new Array", newarr)