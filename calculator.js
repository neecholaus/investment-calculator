
let args = process.argv;

// Years for monthly investment
let years = args[2] ? args[2] : 10; 

// How much to invest monthly
let monthlyInvestment = args[3] ? parseInt(args[3]) : 100;

// Yearly return on investment (ROI)
let roi = args[4] ? parseFloat(args[4]) : 10;

// First deposit
let startingInvestment = args[5] ? parseInt(args[5]) : 0;

let holdings = startingInvestment

// Each year
for(let i = 0; i < years; i++) {
	// Each month
	for(let j = 0; j < 12; j++) {
		holdings += monthlyInvestment
	}
	holdings += (holdings * (roi / 100))
}

console.log(`Investing for ${years} years.`);
console.log(`Investing $${monthlyInvestment} per month.`);
console.log(`Anticipated ROI: ${roi}%`);
console.log(`Starting investment: $${startingInvestment}`);
console.log(holdings);
