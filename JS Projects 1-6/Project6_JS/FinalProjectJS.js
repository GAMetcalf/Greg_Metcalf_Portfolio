function GetGamePrices(gamesList)//Maybe G2G
{
  var gamePrices = [];

  for (let i = 0; i < gamesList.length; i++)
  {
    var gameCost = NumberValidation("Enter the cost for " + gamesList[i]);
    gamePrices.push(parseFloat(gameCost));
  }
  return gamePrices;
}

function TotalGameCost(prices)//Should be G2G
{
  var totalPrice = 0;

  for (let i = 0; i < prices.length; i++)
  {
    totalPrice += prices[i];
  }
  return totalPrice;
}

function AddingGames(game)//Should be G2G
{
  //Create a list and add the first game to it.
  var userGamesList = [game];
  var totalGames = userGamesList.length;

  //prompt and validate for yes or no
  var yesOrNo = prompt("Got it! " + game + " has been added.  Do you have any more games to add? (yes/no)");
  while (yesOrNo.toLowerCase() != "yes" && yesOrNo.toLowerCase() != "no")
  {
    yesOrNo = prompt("Please only enter 'yes' or 'no'.\nDo you have any more games to add?")
  }

  //Inform user of total games in list
  if (yesOrNo.toLowerCase() != "yes")
  {
    alert("You only have " + totalGames + " game in your collection.");
  }

  while (yesOrNo.toLowerCase() == "yes")
  {
    //Get next game and add it to the list
    var nextUserGame = InputValidation("Enter the name of the next game to add to the list:");
    userGamesList.push(nextUserGame);

    yesOrNo = InputValidation(nextUserGame + " has been added.  Do you have anymore games to add?")
  }

  return userGamesList;
}

function NumberValidation(message)//G2G
{
  var userNum = prompt(message);
  while (isNaN(userNum) || userNum <= 0)
  {
    userNum = prompt("Do not leave this space blank and only enter a positive value.\n" + message);
  }
  return userNum;
}

function InputValidation(message)//Should be G2G
{
  var userInput = prompt(message);
  while (userInput == "")
  {
    userInput = prompt("Do not leave this space blank.\n" + message)
  }
  return userInput;
}

//Welcome and prompt user for first game name
alert("Welcome and thank you for using Board Game Bonanza!\nThis program will help you create a list of all of the board games you own and determine the cost of everything.");
var userGame = InputValidation("Enter the name of your first board game:");

//Send for game to AddingGames function and store any additionally added games into totalUserGames
var userGamesList = AddingGames(userGame);

//Call function to gather prices for all the games and store in list
alert("Next, you will need to enter the price for each game.");
var gamePricesList = GetGamePrices(userGamesList);

//Send price list to TotalGameCost to get total cost of all games
var totalCost = TotalGameCost(gamePricesList);

//Display all games and prices
var totalCostString = "";
for (let i = 0; i < userGamesList.length; i++)
{
  totalCostString += "The cost of " + userGamesList[i] + " is $" + gamePricesList[i] + "\n";
}
alert(totalCostString + "\nGrand Total: $" + totalCost);
