function userMenu()
{
  alert("Thanks for choosing this program!  This program has tools for currency conversion,\nplanetery weight conversion, and a demonstration program that finds the difference between two arrays.\n");

var isRunning = true;
while (isRunning)
  {
    var userChoice = prompt("\n1. Currency Converter\n2. Planetary Weight Converter\n3. Array Subtraction\n\nEnter the number of the program you would like to use: ");

    switch(userChoice)
    {
      case "1":
      {
        CurrencyConverter();
        break;
      }
      case "2":
      {
        Astronomical();
        break;
      }
      case "3":
      {
        ArraySubtraction();
        break;
      }
    }
  }
}

function CurrencyConverter()
{
    var amountToBeConverted = prompt("Welcome to the currency converter!\nPlease enter the amount of Euros you wish to exchange: ");
    while (isNaN(amountToBeConverted) || amountToBeConverted <= 0)
    {
      amountToBeConverted = prompt("\nPlease do not leave this blank and only enter a positive amount: ");
    }

    alert("\nGot it!  The amount of " + amountToBeConverted + " Euros will now be converted to U.S. dollars.");
    var currentAmount = EuroToUSDConverter(amountToBeConverted);
    alert("\n" + amountToBeConverted + " Euros converted to USD is $" + currentAmount);
}

function EuroToUSDConverter(amountToBeConverted)
{

  var usDollar = amountToBeConverted * 1.16;
  usDollar.toFixed(2);
  return usDollar;
}

function Astronomical()
{
  // Declare array of different gravities and get user's weight
  var gravities = [.38, .91, 1.00, .38, 2.34, .93, .92, 1.12];
  alert("Hello!  This program will calculate and show how much you would weight on another planet.");
  var userWeight = prompt("Please enter your weight:");

  // Validate for positive number
  while (isNaN(userWeight) || userWeight <= 0)
  {
    userWeight = prompt("Please don't leave this space blank and enter a valid weight:");
  }

  // Initialize an array of planets to list to user
  var planetString;

  var planetList = ["1. Mercury", "2. Venus", "3. Earth", "4. Mars", "5. Jupiter", "6. Saturn", "7. Uranus", "8. Neptune"];
  for (let i = 0; i < planetList.length; i++)
  {
    planetString = planetList.join("\n");
  }
  var userChoice = prompt(planetString + "\nEnter the number of the planet to convert your weight to:");

  // Validate to ensure proper number choice, and reprompt if needed
  while (isNaN(userChoice) || (userChoice < 1 || userChoice > 8))
  {
    for (let i = 0; i < planetList.length; i++)
    {
      planetString = planetList.join("\n");
    }

    userChoice = prompt(planetString + "\nDo not leave this blank and make sure to only enter the number next to the desired planet:");
  }

  // Time to create the conversions
  var convertedWeight;
  function DisplayConvertedWeight()
  {
    convertedWeight = userWeight * gravities[userChoice - 1];
    alert("\nOn Earth you weight " + userWeight + ", but on " + planetList[userChoice - 1].slice(3) + " you would weigh " + convertedWeight + " lbs.");
  }

  //Call function to display converted Weight
  DisplayConvertedWeight();
}

function ArraySubtraction()
{
  //Initialize and define arrays
  var firstArray = [234, 654, 1, -234, 5049, 0, 8473];
  var secondArray = [233, 600, 900, -235, 5000, 1000, 473];
  var arrayDifference;

  // Create function to calculate difference of both arrays
  function CalculateDifference(firstArray, secondArray)
  {
    var differenceOfArrays = [];
    for (let i = 0; i < firstArray.length; i++)
    {
      differenceOfArrays[i] = firstArray[i] - secondArray[i];
    }

    return differenceOfArrays;
  }

  arrayDifference = CalculateDifference(firstArray, secondArray);
  var arrayString = "";

  for (let i = 0; i < arrayDifference.length; i++)
  {
    arrayString += firstArray[i] + ' - ' + secondArray[i] + ' = ' + arrayDifference[i] + '\n';
  }

  alert(arrayString);

}

// Call userMenu to run the program
userMenu();
