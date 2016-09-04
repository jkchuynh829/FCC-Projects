// var denoms = [
// 	{name: 'ONE HUNDRED', val: 100.00},
// 	{name: 'TWENTY', val: 20.00},
// 	{name: 'TEN', val: 10.00},
// 	{name: 'FIVE', val: 5.00},
// 	{name: 'ONE', val: 1.00},
// 	{name: 'QUARTER', val: 0.25},
// 	{name: 'DIME', val: 0.10},
// 	{name: 'NICKEL', val: 0.05},
// 	{name: 'PENNY', val: 0.01}
// ];

var denomVal = [
	['ONE HUNDRED', 100.00],
	['TWENTY', 20.00],
	['TEN', 10.00],
	['FIVE', 5.00],
	['ONE', 1.00],
	['QUARTER', .25],
	['DIME', 0.10],
	['NICKEL', 0.05],
	['PENNY', 0.01]
];

var results = [
	['ONE HUNDRED', 0.00],
	['TWENTY', 0.00],
	['TEN', 0.00],
	['FIVE', 0.00],
	['ONE', 0.00],
	['QUARTER', 0.00],
	['DIME', 0.00],
	['NICKEL', 0.00],
	['PENNY', 0.00]
];

function checkCashRegister(price, cash, cid) {
	var change = cash - price;

	var register = Math.round(cid.reduce(function(a,b) {
		return a + b[1];
	},0.0)*100)/100;

	if(change > register) {
		return 'Insufficient funds';
	}

	if (cash === price) {
		return 'Closed';
	}

	cid = cid.reverse();

	var result = [];
	var amt = 0;
	for(var i = 0;i<denomVal.length; i++) {
		while(change >= denomVal[i][1]) {
			result.push(denomVal[i]);
			change -= denomVal[i][1];
			register -= denomVal[i][1];
			results[i][1] += denomVal[i][1]; 
		}
	}
	return [...results.filter(function(val) {
		return val[1] > 0;
	})];
}

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])); 