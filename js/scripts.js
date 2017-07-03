//gallons to liters
//cup to gallons
//teaspoons to tablespoons

var convertToLitersFromGallons = function(gallons){
  return gallons * 3.78541;
};

var gallons = parseInt(prompt("Number of gallons?"));

alert(convertToLitersFromGallons(gallons) + " Liters");


var convertToGallonsFromCups = function(cups){
  return cups * 0.264172;
};

var cups = parseInt(prompt("Number of cups?"));

alert(convertToGallonsFromCups(cups) + " Gallons");

var convertToTablespoons = function(teaspoons){
  return teaspoons * .3;
};

var teaspoons = parseInt(prompt("Number of teaspoons"));

alert(convertToTablespoons(teaspoons) + " tablespoons");
