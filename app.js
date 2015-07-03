(function() {
	var app = angular.module('store', ['store-products']); 

	app.controller('StoreController', function(){
		this.products = gems;
	});

	

	var gems =[ 
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: 'truly beautiful and glorious gem . .',
			canPurchase: true,
			images:[
			{
				full: "gem1.jpg",
				thumb:"gem1.jpg"
			}
			],
			reviews:[
				{
					stars: 5,
					body: "I love this gem",
					author: "joe@joe.com"
				}
			],
		},
		{
			name:'Pentagonal Gem',
			price: 5,
			description: 'one of the most exquiste gems out there . .',
			canPurchase: true,
			images:[
			{
				full: "gem2.jpg",
				thumb:"gem2.jpg"
			}
			],
			
		},
		{
			name:'Special Shiny Gem',
			price: 25.95,
			description: 'this is a gem unlike any other. . .',
			canPurchase: true,
			images:[
			{
				full: "gem3.jpg",
				thumb:"gem3.jpg"
			},
			]
		},
		{
			name:'Sexy awesome Gem',
			price: 6.05,
			description: ' you will be turned on. . .',
			canPurchase: true,
			images:[
			{
				full: "gem4.jpg",
				thumb:"gem4.jpg"
			},
			]
		},
		{
			name:'beautiful gem gem Gem',
			price: 8,
			description: 'how beautiful a gem can be. . .',
			canPurchase: true,
			images:[
			{
				full: "gem5.jpg",
				thumb:"gem5.jpg"
			},
			]
		},
	]
}) ();