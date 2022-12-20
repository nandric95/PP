/*1.	Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like! */
var favouriteCoffee = {
  name: "irisch",
  strength: "strong",
  flavour: "rum",
  milk: true,
  sugar: false,
};

console.log(favouriteCoffee);

/*2.	Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity. */

var favouriteMovie = {
  title: "Wolf from Wolf street",
  actors: ["Leonardo di Caprio", "Petar"],
  director: "Cuantine Tarantino",
  genre: "thriller",
  popularity: false,
};

console.log(favouriteMovie);

var project = {
  title: "Wolf from Wolf street",
  actors: ["Leonardo di Caprio", "Petar"],
  director: "Cuantine Tarantino",
  genre: "thriller",
  popularity: false,
};

/*3.	Write a function that creates an object that represents a project. Each project is described by: description,  programming language, git repository, boolean status that says if the project is in development or not. Add a method that prints out the project's repository,  a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not. */

function project(d, pl, gr, bs) {
  var project = {
    description: d,
    programmingLanguage: pl,
    gitRepository: gr,
    booleantatus: bs,
    printRepository: function () {
      console.log(project.gitRepository);
    },
    ProjectWrittenInJS: function () {
      if (project.programmingLanguage === "JS") return true;
      else return false;
    },
  };
  return project;
}
console.log(project("PP", "JS", "PP", true));

/*4.	Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
○	Add a method that prints out all the ingredients necessary for the meal preparation. 
○	Add a method that checks if a meal can be prepared in under 15 minutes. 
○	Add a method that changes the type of cuisine to the given value. 
○	Add a method that delete a given ingredient from the list of ingredients.  
 */

function createCulinaryRecipe(n, tc, c, li, pt, pi) {
  var recipe = {
    name: n,
    typeOfCuisine: tc,
    complexity: c,
    ingredients: li,
    time: pt,
    instruction: pi,
    printIngredients: function () {
      console.log(recipe.ingredients);
    },
    checkIfUnder15Min: function () {
      return recipe.time < 15;
    },
    changeCuisineType: function (newCuisineType) {
      recipe.typeOfCuisine = newCuisineType;
    },
    deleteGivenIngredient: function (ingredient) {
      var newString = [];
      for (var i = 0; i < recipe.ingredients.length; i++) {
        if (recipe.ingredients[i] !== ingredient)
          newString[newString.length] + recipe.ingredients[i];
      }
    },
  };
}
