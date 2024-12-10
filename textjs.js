// Data source (can be fetched dynamically from an API)
const data = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple", "Strawberry", "Blueberry",
    "Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple", "Strawberry", "Blueberry",
  "Watermelon", "Kiwi", "Cherry", "Peach", "Lychee", "Papaya", "Avocado", "Blackberry",
  "Raspberry", "Cantaloupe", "Fig", "Guava", "Honeydew", "Lime", "Mandarin", "Nectarine",
  "Passionfruit", "Persimmon", "Pomegranate", "Tangerine", "Coconut", "Apricot", "Date",
  "Plum", "Dragonfruit", "Starfruit", "Mulberry", "Jackfruit", "Gooseberry", "Cranberry",
  "Durian", "Elderberry", "Custard Apple", "Breadfruit", "Soursop", "Quince", "Boysenberry",
  "Jujube", "Tamarind", "Loganberry", "Salak", "Rambutan", "Ackee", "Acerola", "Bilberry",
  "Cucumber", "Tomato", "Zucchini", "Carrot", "Potato", "Onion", "Garlic", "Celery", 
  "Lettuce", "Spinach", "Kale", "Broccoli", "Cauliflower", "Pumpkin", "Squash", 
  "Radish", "Turnip", "Beetroot", "Cabbage", "Brussels Sprout", "Asparagus", "Artichoke",
  "Eggplant", "Bell Pepper", "Chili Pepper", "Sweet Potato", "Peas", "Corn", "Mushroom",
  "Avocado", "Okra", "Parsnip", "Leek", "Chard", "Watercress", "Endive", "Arugula", 
  "Fennel", "Dill", "Basil", "Mint", "Thyme", "Rosemary", "Cilantro", "Parsley", 
  "Oregano", "Chive", "Sage","this", "Tarragon", "Bay Leaf", "Clove", "Cinnamon", "Nutmeg", 
  "Ginger", "Turmeric","nandan", "Cardamom", "Peppermint", "Vanilla", "Saffron", "Anise", 
  "Cumin", "Coriander", "Fenugreek", "Mustard Seed", "Paprika", "Cayenne", "Sesame", 
  "Sunflower Seed", "Pumpkin Seed", "Chia Seed", "Flaxseed", "Poppy Seed", "Hemp Seed", 
  "Walnut", "Almond", "Cashew", "Pistachio", "Hazelnut", "Pecan", "Macadamia", "Brazil Nut",
  "Chestnut", "Coconut Meat", "Pine Nut", "Acorn", "Lotus Seed", "Ginkgo Nut", "Water Chestnut",
  "in","is", "on", "at", "by", "with", "about", "against", "between", "through", 
  "over", "under", "above", "below", "before", "after", "during", "within", 
  "without", "into", "onto", "from", "to", "towards", "upon", "across", 
  "behind", "near", "beside", "beneath", "among", "around", "inside", "outside",
  "run", "walk", "jump", "talk", "write", "read", "sing", "dance", "eat", 
  "drink", "sleep", "play", "sit", "stand", "think", "know", "understand", 
  "learn", "teach", "build", "create", "draw", "paint", "type", "watch", 
  "listen", "speak", "drive", "cook", "clean", "laugh", "cry", "help", "buy", 
  "sell", "open", "close", "begin", "end", "stop", "start", "follow", "lead",
  "quickly", "slowly", "happily", "sadly", "angrily", "silently", "loudly", 
  "easily", "hardly", "neatly", "messily", "brightly", "softly", "boldly", 
  "kindly", "rudely", "badly", "well", "closely", "far", "near", "always", 
  "never", "sometimes", "often", "rarely", "today", "yesterday", "tomorrow", 
  "early", "late", "soon", "now", "then", "here", "there", "everywhere",
  "and", "or", "but", "so", "because", "although", "while", "if", "unless", 
  "since", "after", "before", "when", "whenever", "until", "where", "wherever", 
  "whether", "however", "therefore", "though", "as", "though", "even though","hello","akshat","arush","soham24","yawaz azad sir","taqwuee sir"

];

// DOM Elements
const input = document.getElementById('autocomplete-input');
const suggestionsList = document.getElementById('suggestions-list');

// Event Listener
input.addEventListener('input', function () {
  const query = input.value.toLowerCase();
  if (query === "") {
    suggestionsList.style.display = "none";
    return;
  }
  
  // Filter data
  const suggestions = data.filter(item => item.toLowerCase().includes(query));

  // Populate suggestions
  populateSuggestions(suggestions);
});

// Populate Suggestions
function populateSuggestions(suggestions) {
  suggestionsList.innerHTML = ""; // Clear previous suggestions
  if (suggestions.length === 0) {
    suggestionsList.style.display = "none";
    return;
  }

  suggestions.forEach(suggestion => {
    const li = document.createElement('li');
    li.textContent = suggestion;

    // Add click listener to suggestions
    li.addEventListener('click', () => {
      input.value = suggestion;
      suggestionsList.style.display = "none";
    });

    suggestionsList.appendChild(li);
  });

  suggestionsList.style.display = "block";
}
