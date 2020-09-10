async function findDrinkByName(event) {
    event.preventDefault();

    const drinkName = document.getElementById('drinkName').value;
    const drinkNameDiv = document.getElementById('drinkNameDiv');
    const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkName;


    fetch(apiUrl).then(function (response) {
        drinkNameDiv.innerHTML = "";

        if (response.ok) {
            // send the parsed JSON data
            response.json().then(function (data) {

                for (let i = 0; i < data.drinks.length; i++) {
                    console.log(data.drinks[i].strDrink);

                    const drinkTitle = document.createElement("p");
                    drinkTitle.textContent = data.drinks[i].strDrink;
                    drinkNameDiv.appendChild(drinkTitle);
                }

                console.log("========================")
            });
        } else {
            alert("Error: " + response.statusText);
        };
    }); 
};

async function findDrinkByIngr(event) {
    event.preventDefault();

    const drinkIngr = document.getElementById('drinkIngr').value;
    const drinkIngrDiv = document.getElementById('drinkIngrDiv');
    const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkIngr;


    fetch(apiUrl).then(function (response) {
        drinkIngrDiv.innerHTML = "";

        if (response.ok) {
            // send the parsed JSON data
            response.json().then(function (data) {

                for (let i = 0; i < data.drinks.length; i++) {
                    console.log(data.drinks[i].strDrink);

                    const drinkTitle = document.createElement("p");
                    drinkTitle.textContent = data.drinks[i].strDrink;
                    drinkIngrDiv.appendChild(drinkTitle);
                }

                console.log("========================")
            });
        } else {
            alert("Error: " + response.statusText);
        };
    }); 
};

document.querySelector('#drinkNameSubmit').addEventListener('click', findDrinkByName);
document.querySelector('#drinkIngrSubmit').addEventListener('click', findDrinkByIngr);