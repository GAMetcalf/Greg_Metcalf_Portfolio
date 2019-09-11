alert("Thank you for choosing this calculator to help with budgeting needs.\n\nPlease enter the respective costs and quantities.");

//Gather all user data
var appleCost = NumberValidation("How much does it cost for an apple?");
var appleQuantity = NumberValidation("How many apples do you have?");
var steakCost = NumberValidation("How much does a steak cost?");
var steakQuantity = NumberValidation("How many steaks do you have?");
var iceCreamCost = NumberValidation("How much does an order of ice cream cost?");
var iceCreamQuantity = NumberValidation("How many orders of ice cream did you get?");
var salesTax = NumberValidation("What is the sales tax where you live?");

function TaxAndTotal()
{
  var applesBeforeTax = appleQuantity * appleCost;
  var steakBeforeTax = steakQuantity * steakCost;
  var iceCreamBeforeTax = iceCreamQuantity * iceCreamCost;

  var totalBeforeTax = applesBeforeTax + steakBeforeTax + iceCreamBeforeTax;
  var totalTax = (salesTax / 100) * totalBeforeTax;
  var grandTotal = (totalBeforeTax + totalTax).toFixed(2);

  alert("Total cost of apples before taxes: $" + applesBeforeTax +
        "\nTotal cost of steaks before taxes: $" + steakBeforeTax +
        "\nTotal cost of ice cream before taxes: $" + iceCreamBeforeTax +
        "\n\nOverall cost before taxes: $" + totalBeforeTax +
        "\nTotal taxes: $" + totalTax +
        "\n\nGrand Total: $" + grandTotal);
}

function NumberValidation(message)
{
  var userNum = prompt(message);
  while (isNaN(userNum) || userNum <= 0)
  {
    userNum = prompt("Do not leave this space blank and only enter a positive value.\n" + message);
  }
  return userNum;
}

TaxAndTotal();
