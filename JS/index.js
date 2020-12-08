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




console.log('All topping types');

var second = arr[0].topping.length;
for(let i = 0 ; i < second ; i++){
  var secondTree = arr[0].topping[i].type;
  console.log('type:'+secondTree);
}


var batter_len = arr[0].batters.batter.length;
console.log('All batter types');
for(let j = 0 ; j < batter_len ; j++){
var secondTree = arr[0].batters.batter[j].type;
  console.log('type:'+secondTree);
}


let sum = 0;
arr.forEach(function(value){
   sum = sum + value.ppu;
});
console.log('the Ppu sum = '+sum);


let num = 0 ;
arr.forEach(function(value){
  num = num + 1 ;

});
console.log('Ppu average: ' + sum/num);

console.log('List of all mentioned IDs ');
arr.forEach(function(value){

 console.log('id :'+value.id);
});
for(let i = 0 ; i < second ; i++){
  var secondTree = arr[0].topping[i].id;
  console.log('id :'+secondTree);
}
for(let j = 0 ; j < batter_len ; j++){
var secondTree = arr[0].batters.batter[j].id;
  console.log('id :'+secondTree);
}
