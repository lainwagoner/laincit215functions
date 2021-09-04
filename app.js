const calcMpg = (mpgRate, numOfMiles, costGas)=>{

    let ele = document.createElement("div");
    let yrCost = (costGas * numOfMiles)/mpgRate;
    ele.innerHTML= "to drive a car with a MPG rating of " +mpgRate + " for " +numOfMiles + "miles at $" +costGas + "per gallon it would cost $" +yrCost;
    document.body.querySelector(".box").appendChild(ele);
}


let milesPerYr = Number(prompt("Number of miles per year:"));
let costGal = Number(prompt("Cost of gallon of gas in your area:"))

calcMpg(12, milesPerYr, costGal,".car1");
calcMpg(17, milesPerYr, costGal,".car2");
calcMpg(26, milesPerYr, costGal,".car3");
calcMpg(29, milesPerYr, costGal,".car4");


