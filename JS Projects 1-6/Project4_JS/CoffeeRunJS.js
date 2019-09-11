alert("Thank you for using this program to track and organize drink orders");

//Initialize  and define array
var orderUp = ["Coffee", "Cappuccino", "Latte", "Cappuccino", "Latte", "Coffee", "Cappuccino", "Coffee", "Decaf", "Cappuccino", "Coffee", "Cappuccino", "Latte", "Decaf", "Decaf", "Cappuccino", "Cappuccino", "Coffee", "Decaf"];

//Initialize counters
var coffeeCount = 0;
var cappuccinoCount = 0;
var latteCount = 0;
var decafCount = 0;

//Add each instance of the specified strings
for (let i = 0; i < orderUp.length; i++)
{
  if (orderUp[i] == "Coffee")
  {
    coffeeCount++;
    continue;
  }
  else if (orderUp[i] == "Cappuccino")
  {
    cappuccinoCount++;
    continue;
  }
  else if (orderUp[i] == "Latte")
  {
    latteCount++
    continue;
  }
  else
  {
    decafCount++;
    continue;
  }
}

alert("Order:\n" + coffeeCount + " number of " + orderUp[0] +
      "\n" + cappuccinoCount + " number of " + orderUp[1] +
      "\n" + latteCount + " number of " + orderUp[2] +
      "\n" + decafCount + " number of " + orderUp[8]);
