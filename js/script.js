//1
arr = ['a', 'b', 'c', 'd'];
let cutObj1 = arr.slice(0, 2);
let cutObj2 = arr.slice(2, 4);
cutObj1.join('+');
cutObj2.join('+');
console.log(cutObj1.join('+') + ',' + cutObj2.join('+'));
//2
arr2 = [2, 5, 3, 9];
let result2 = arr2[0] * arr2[1] + arr2[2] * arr2[3];
console.log(result2);
//3
arr3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let result3 = arr3.find(function (elem) {
    return elem.find(function (num) {
        return num === 9;
    });
});
let numberValue = result3.find(function (elem1) {
    return elem1 === 9
})
console.log(numberValue);
//4
arr4 = {
    js: ['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'
};
// console.log(arr4.js[0]);
function jsFind() {
    for (let key in arr4) {
        if (key === 'js') {
            return arr4[key];
        }
    }
}
let result4 = jsFind();
console.log(result4.shift());
//5
function addX(){
arr5 = [];
let elem1 = 'x';
let elem2 = 'x';
 
for (let i = 0; i < 10; i++) {      
    arr5.push(elem1);
    elem1 += elem2;
    
    }
    return arr5;
    }
console.log(addX());
//6
function addNumber(n) {
    arr6 = [];
    for (let i = 1; i <= n; i++){
        let step = '';
        for (let j = 0; j < i; j++){
            step+=i
        }
        console.log(step)
        arr6.push(step);
       
    }
    return arr6;
}
console.log(addNumber(5));
//7.
function arrayFill(item, number) {
    arr7 = [];
    for (i = 0; i <= number; i++){
        
        arr7.push(item);
    }
    return arr7;
}
console.log(arrayFill('x', 5));
//8.

let arr8 = [2, 3, 2, 5, -2, -3];
function arrSum(params) {
    let result8 = 0;
    for (i = 0; i < params.length; i++) {
        result8 += params[i];
        if (result8 > 10) {
            return ++i;
        }  
    }
}
    let sumItems = arrSum(arr8);
    console.log(sumItems);
//9

 let arr9 = [22, 33, 44, 55, 66, 77];
    function reverse(num) {
        newArr = [];
        num.forEach(function (item){
        newArr.unshift(item)
    });
        return newArr;
    }
        console.log(reverse(arr9))
        

//10
arr10 = [[1, 2, 3], [4, 5], [6]];

let sum = 0;

function sum1(array) {

  array.forEach(function(value) {
    Array.isArray(value) ? sum1(value) : sum += value; 
  });

  return sum;
}

console.log(sum1(arr10));
//11
arr11 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sumNumber = 0;
function sum2(array) {

  array.forEach(function(value) {
    Array.isArray(value) ? sum2(value) : sumNumber += value; 
  });

  return sumNumber;
}

console.log(sum2(arr11));
