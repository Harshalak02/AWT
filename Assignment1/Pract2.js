let arr = [1, 2, 3, 4, 5];
console.log("Length of the array:", arr.length);
console.log("Element at index 0:", arr[0]);
console.log("Element at index 2:", arr[2]);

arr.push(6);
console.log("After push(6):", arr);

arr.pop();
console.log("After pop():", arr);

arr.shift();
console.log("After shift():", arr);

arr.unshift(10);
console.log("After unshift(10):", arr);

console.log("Array as a string:", arr.join(", "));

delete arr[1];
console.log("After delete:", arr);

let arr2 = [7, 8, 9];
let arr3 = arr.concat(arr2);
console.log("Concatenated array:", arr3);

let flatArray = [[1, 2], [3, 4], [5, 6]].flat();
console.log("Flattened array:", flatArray);

arr.splice(1, 2, 20, 30);
console.log("After splice:", arr);

let slicedArray = arr.slice(1, 4);
console.log("Sliced array:", slicedArray);

let person = {
    name: "Harshal",
    age: 20,
    gender: "Male",
};

function displayPersonDetails(personObj) {
    console.log("Name:", personObj.name);
    console.log("Age:", personObj.age);
    console.log("Gender:", personObj.gender);
}

displayPersonDetails(person);
