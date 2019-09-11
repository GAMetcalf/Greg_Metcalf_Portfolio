// Declare arrays
var firstArray = [34, 20, 91, 49];
var secondArray = [42, 120.30, 210.20, 32.50];

// Find the sum of elements of an array of length 4
var firstArrayTotal = firstArray[0] + firstArray[1] + firstArray[2] + firstArray[3];
var secondArrayTotal = secondArray[0] + secondArray[1] + secondArray[2] + secondArray[3];

console.log("First Array Total: " + firstArrayTotal + "\nSecond Array Total: " + secondArrayTotal);

//Find the average of each array
var firstArrayAverage = firstArrayTotal / 4;
var secondArrayAverage = secondArrayTotal /4;

console.log("\nFirst Array Average: " + firstArrayAverage + "\nSecond Array Average: " + secondArrayAverage);

// Add both arrays together at each respective index
var totalValueOfArrays = [(firstArray[0] + secondArray[0]), (firstArray[1] + secondArray[1]), (firstArray[2] + secondArray[2]), (firstArray[3] + secondArray[3])];

console.log("\nFirst Index Total: " + totalValueOfArrays[0] +
            "\nSecond Index Total: " + totalValueOfArrays[1] +
            "\nThird Index Total: " + totalValueOfArrays[2] +
            "\nFourth Index Total: " + totalValueOfArrays[3]);

var mixedUpQuote = ["universe is winning.", "erse trying to produce bigger an", "between software engineers striving to build bigger ", "d better idiots. So far, the ", "Programming today is a race ", "and better idiot-proof programs, and the univ"];
var organizedQuote = mixedUpQuote[4] + mixedUpQuote[2] + mixedUpQuote[5] + mixedUpQuote[1] + mixedUpQuote[3] + mixedUpQuote[0];

console.log(organizedQuote);
