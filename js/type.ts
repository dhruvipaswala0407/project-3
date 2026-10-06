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
const arrayNumber:number[] = [10, 20, 30, 40, 50];
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
const maxAndMin: number[] = [45, 12, 89, 3, 67, 23, 99, 1];

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


// 5.Write a JavaScript program for remove negative values using the filter array function
// numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];
const numbers: number[] = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];
document.getElementById("originalOutput5")!.innerHTML = numbers.join(", ");
const positiveNumbers: number[] = numbers.filter(x => x >= 0);
document.getElementById("filteredOutput")!.innerHTML = positiveNumbers.join(", ");
// 6. Write a JavaScript program using array map() method and return the square of array element.
//  arr = [2, 5, 6, 3, 8, 9];
const arr: number[] = [2, 5, 6, 3, 8, 9];
const squared: number[] = arr.map(x => x * x);
document.getElementById("output")!.innerHTML = squared.join(", ");
document.getElementById("arr")!.innerHTML = arr.join(", ");

// 7.Write a JavaScript program for sort array in ascending descending.
// numbers = [23,20,17, 12,5, 0, 1, 5, 12, 19, 20];
const normalElement: number[] = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];
const ascending: number[] = [...normalElement].sort((a, b) => a - b);
const descending: number[] = [...normalElement].sort((a, b) => b - a);
document.getElementById("output7")!.innerHTML = normalElement.join(", ");
document.getElementById("ascendingOutput")!.innerHTML = ascending.join(", ");
document.getElementById("descendingOutput")!.innerHTML = descending.join(", ");
// 8. Write a JavaScript program which filters out any string which is less than 8 characters. 
// words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
const words: string[] = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
const filteredWords: string[] = words.filter(word => word.length >= 8);
document.getElementById("filterOutput")!.innerHTML = filteredWords.join(", ");
document.getElementById("output8")!.innerHTML = words.join(", ");
//9. write a JavaScript program to  to print expected output for following string.
// x = "airplane";    output:- r
// x = "oxoxoxox";   output:- "oXoXoXoX"
// x = "A New Java Book";   
//  output:-  "a new java book" , "A NEW JAVA BOOK"
const x1: string = "airplane";
const out1: string = x1[2];

const x2: string = "oxoxoxox";
const out2: string = x2.split('x').join('X');

const x3: string = "A New Java Book";
const out3Lower: string = x3.toLowerCase();
const out3Upper: string = x3.toUpperCase();
document.getElementById("origner1")!.innerHTML = x1;
document.getElementById("origner2")!.innerHTML = x2;
document.getElementById("origner3")!.innerHTML = x3;
document.getElementById("outputAns1")!.innerHTML = out1;
document.getElementById("outputAns2")!.innerHTML = out2;
document.getElementById("outputAns3")!.innerHTML = `${out3Lower}, ${out3Upper}`;
// 10. write a JavaScript program for array reverse.
const revArray : string[] = ["Alice", "Bob", "Charlie","Alpha", "Beta", "Gamma"];
const revOutput : string =[...revArray].reverse();
document.getElementById("array")!.innerHTML = revArray.join(", ");
document.getElementById("revoutput")!.innerHTML = revOutput.join(", ");
//11. write a JavaScript program for check value is found or not?
const items: string[] = ["apple", "banana", "cherry", "date"];
const searchItem: string = "cherry";
const isFound: boolean = items.includes(searchItem);
document.getElementById("arrayOutput")!.innerHTML = items.join(", ");
document.getElementById("searchOutput")!.innerHTML = searchItem;
document.getElementById("resultOutput")!.innerHTML = isFound ? "Found" : "Not Found";
