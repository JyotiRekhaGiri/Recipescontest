

  // Your JSON data
  const recipes = [
    [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
]

  ];

// Function to create a recipe card
function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img class="card-img-top" style="border-radius:1rem 1rem 1rem 1rem;" src="${recipe.imageSrc}" alt="${recipe.name}">
        <div class="card-body">
            <div class="left-details">
                <div class="recipe-type">${recipe.type}</div>
                <div class="recipe-name" style="font-weight:400;">${recipe.name}</div>
                <div class="recipe-time">${recipe.time}</div>
            </div>
            <div class="right-details">
                <div class="recipe-rating">Rating: ${recipe.rating}</div>
                <div class="like-button" onclick="toggleLike(${recipes[0].indexOf(recipe)})">
                    ${recipe.isLiked ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>'}
                </div>
            </div>
        </div>
    `;
    return card;
  }
  
  // Function to display recipe cards
  function displayRecipeCards(data) {
    const container = document.getElementById('recipe-container');
  
    // Clear previous content
    container.innerHTML = '';
  
    // Check if the data is an array and has at least one item
    if (Array.isArray(data) && data.length > 0) {
      // Iterate over each recipe in the data
      data.forEach(recipe => {
        const card = createRecipeCard(recipe);
        container.appendChild(card);
      });
    } else {
      console.error('Invalid JSON structure. Unable to display recipe cards.');
    }
  }
  
  // Function to toggle the like status of a recipe
  function toggleLike(index) {
    recipes[0][index].isLiked = !recipes[0][index].isLiked;
    displayRecipeCards(recipes[0]);
  }
  
  // Call the function to display recipe cards
  displayRecipeCards(recipes[0]);