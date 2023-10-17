let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);
let newarr = removefirst2(arr);
console.log(newarr);

function removefirst2(arr) {
    [a, b, ...rest] = arr;
    return rest;
}