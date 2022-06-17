// store the resource-URL of the JSON file into a const variable
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

//use fetch() method and feed it the required argument, the URL
fetch(requestURL)
    //use .then() method that returns a Promise--response--argument to an annymous function)
    .then(function(response) {
        return response.json(); //extract the JSON content from the noise of the full HTTP response
    })
    .then(function(jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        //store the results of the converted response into an array
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets);
    });

// build the HTML of the prophet card
function displayProphets(prophet) {
    // create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let birthDate = document.createElement('p');
    let birthPlace = document.createElement('p');

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;

    // Add birth date and birth place
    birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
    
    // Build the image attributes: src, alt, and loading attribute values
    portrait.setAttribute('src', prophet.imageurl);
    if(prophet.order == 1) {
        portrait.setAttribute('alt', `Portrait of ${prophet.name + prophet.lastname} - 1st Latter-day President`);
    } else if (prophet.order == 2) {
        portrait.setAttribute('alt', `Portrait of ${prophet.name + prophet.lastname} - 2nd Latter-day President`);
    } else if (prophet.order == 3) {
        portrait.setAttribute('alt', `Portrait of ${prophet.name + prophet.lastname} - 3rd Latter-day President`);
    }
    portrait.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the html elements
    card.appendChild(h2);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
    card.appendChild(portrait);
    
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
}


