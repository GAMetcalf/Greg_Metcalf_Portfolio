function TotalListValue(priceList)
{
  var totalPrice = 0;
  for (let i = 0; i < priceList.length; i++)
  {
    totalPrice += priceList[i];
  }
  return totalPrice;
}

alert("Hello!  The objective of this program is to ad up the total cost of all the items on the list.");
var priceList = [1.25, 2.56, 5.67, 4, 8.25, 2.99, 9.99];

var totalValue = TotalListValue(priceList);

alert("Sum of list prices: $" + totalValue);
alert("Now two items will be removed from the list, one added, and the updated total will be displayed.")

priceList.splice(2, 1);
priceList.pop();
priceList.push(6.78);

totalValue = TotalListValue(priceList);
alert("Updated total: $" + totalValue.toFixed(2));
