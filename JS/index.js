var arr = [
	{
		"id": "0001",
		"type": "donut",
		"name": "Cake",
		"ppu":0.78,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" },
						{ "id": "1003", "type": "Blueberry" },
						{ "id": "1004", "type": "Devil's Food" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0002",
		"type": "donut",
		"name": "Raised",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0003",
		"type": "donut",
		"name": "Old Fashioned",
		"ppu":0.26,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	}
]




console.log('All topping types:');

var arr_len = arr.length;

var toppingTypesList = [];
for(let i = 0 ; i < arr_len ; i++){
	var topping_length = arr[i].topping.length;
	for(let j = 0 ; j < topping_length ; j++){
		var toppingType = arr[i].topping[j].type;
		if (! toppingTypesList.includes(toppingType)){
			toppingTypesList.push(toppingType);
		    console.log('topping type:'+ toppingType);
		}
	}
}

var batterTypesList = [];
console.log("\n");
console.log('All batter types:');
for(let i = 0 ; i < arr_len ; i++){
	var batter_length = arr[i].batters.batter.length;
	for(let j = 0 ; j < batter_length ; j++){
		var batterType = arr[i].batters.batter[j].type;
		if (! batterTypesList.includes(batterType)){
			batterTypesList.push(batterType);
		    console.log('Batter type:'+ batterType);
		}
	}
}

let sum = 0;
arr.forEach(function(value){
   sum = sum + value.ppu;
});
console.log("\n");
console.log('the Ppu sum = '+sum);


let num = 0 ;
arr.forEach(function(value){
  num = num + 1 ;

});
console.log("\n");
console.log('Ppu average: ' + sum/num);

console.log("\n");
console.log('List of all mentioned IDs ');


var second = arr[0].topping.length;
arr.forEach(function(value){

 console.log('id :'+value.id);
});


var batter_len = arr[0].batters.batter.length;
for(let j = 0 ; j < batter_len ; j++){
var secondTree = arr[0].batters.batter[j].id;
  console.log('id :'+secondTree);
}
for(let i = 0 ; i < second ; i++){
  var secondTree = arr[0].topping[i].id;
  console.log('id :'+secondTree);
}
