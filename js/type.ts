// 1 Write a simple JavaScript program to print expected Output using following array.
const myColor: string[] = ["Red", "Green", "White", "Black"];
const container = document.getElementById("result-container");
// 1. Default join with commas: Red,Green,White,Black
const res1 = myColor.join(",");
// 2. Join with plus signs: Red+Green+White+Black
const res2 = myColor.join("+");
// 3. First three elements: Red,Green,White
const res3 = myColor.slice(0, 3).join(",");
// 4. First element only: Red
const res4 = myColor[0];
// 5. Middle elements: Green,White
const res5 = myColor.slice(1, 3).join(",");
// 6. Add 'orange' and join: Red,Green,White,Black,orange
const res6 = [myColor, "orange"].join(",");
container.innerHTML = `
    <p>${res1}</p>
    <p>${res2}</p>
    <p>${res3}</p>
    <p>${res4}</p>
    <p>${res5}</p>
    <p>${res6}</p>`;





// 2.Write a JavaScript program to get sum of all array element using for loop and foreach loop.
const arrayNumber = [10, 20, 30, 40, 50];
const result = document.getElementById("result");
// 1. Using a standard 'for' loop
let sumFor = 0;
for (let i = 0; i < arrayNumber.length; i++) {
    sumFor += arrayNumber[i];
}
result.innerHTML = `Sum using for loop:${sumFor}`;
// 2. Using the 'forEach' loop
let result2 = document.getElementById("result-foreach");
let sumForEach = 0;
arrayNumber.forEach(function (number) {
    sumForEach += number;
});
result2.innerHTML = `Sum using forEach loop: ${sumForEach}`;





// 3.Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic)
const maxAndMin: number = document.getElementById("q3").innerHTML = [45, 12, 89, 3, 67, 23, 99, 1];

// 2. Function with logic to find max and min
function findMinAndMax(arr) {
    if (arr.length === 0) return { max: null, min: null };
    let maxVal = arr[0];
    let minVal = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
        if (arr[i] < minVal) {
            minVal = arr[i];
        }
    }
    return { max: maxVal, min: minVal };
}

// 3. Fixed variable name from 'numbers' to 'maxAndMin'
const results = findMinAndMax(maxAndMin);

// 4. Fixed variable name here as well
document.getElementById("arrayOutput").textContent = maxAndMin.join(", ");
document.getElementById("maxOutput").textContent = results.max;
document.getElementById("minOutput").textContent = results.min;



// 4.Write a JavaScript program for convert all array element in ASCII value.
// 1. The given array of characters or strings
const elements: string[] = document.getElementById("q4").innerHTML = ['A', 'b', 'C', 'd', '1'];
// 2. Function to convert array elements to ASCII values
function convertToASCII( elements) {
    return  elements.map(item => {
        return item.toString().charCodeAt(0);
    });
}
// 3. Call the function
const asciiResults = convertToASCII(elements);
// 4. Print/Display the results inside the HTML elements
document.getElementById("originalOutput").textContent = elements.join(", ");
document.getElementById("asciiOutput").textContent = asciiResults.join(", ");