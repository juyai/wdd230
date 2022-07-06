const nameC1 = document.querySelector('#nameC1');
const nameC2 = document.querySelector('#nameC2');
const nameC3 = document.querySelector('#nameC3');

const logoC1 = document.querySelector('#logoC1');
const logoC2 = document.querySelector('#logoC2');
const logoC3 = document.querySelector('#logoC3');

const urlC1 = document.querySelector('#urlC1');
const urlC2 = document.querySelector('#urlC2');
const urlC3 = document.querySelector('#urlC3');

const phoneC1 = document.querySelector('#phoneC1');
const phoneC2 = document.querySelector('#phoneC2');
const phoneC3 = document.querySelector('#phoneC3');

const mC1 = document.querySelector('#mC1');
const mC2 = document.querySelector('#mC2');
const mC3 = document.querySelector('#mC3');

const jsonData = 'https://juyai.github.io/wdd230/chamber/data/data.json';

function silverGold(data) {
    let filteredData = data.companies.filter(company => company.membershiplevel == 'Silver Member' || company.membershiplevel == 'Gold Member').sort(function() {return Math.random() - 0.5});
    console.log(filteredData)

    let random1 = Math.floor((Math.random() * 6));
    
    let value1 = filteredData[random1]; 
    let value2;
    let value3;

    if (random1 == 0) {
        value2 = filteredData[random1 + 1];
        value3 = filteredData[random1 + 2]; 

    } else if (random1 == 1) {
        value3 = filteredData[random1 + 1];
        value2 = filteredData[random1 - 1]; 

    } else {
        value2 = filteredData[random1 - 1]; 
        value3 = filteredData[random1 - 2]; 
    }

    console.log(value1);
    console.log(value2);
    console.log(value3);

    nameC1.textContent = `${value1.name}`;
    nameC2.textContent = `${value2.name}`;
    nameC3.textContent = `${value3.name}`;

    logoC1.setAttribute('src', value1.image);
    logoC2.setAttribute('src', value2.image);
    logoC3.setAttribute('src', value3.image);
    
    logoC1.setAttribute('alt', value1.name);
    logoC2.setAttribute('alt', value2.name);
    logoC3.setAttribute('alt', value3.name);

    logoC1.setAttribute('loading', 'lazy');
    logoC2.setAttribute('loading', 'lazy');
    logoC3.setAttribute('loading', 'lazy');

    phoneC1.setAttribute('href', `tel:${value1.phone}`);
    phoneC2.setAttribute('href', `tel:${value2.phone}`);
    phoneC3.setAttribute('href', `tel:${value3.phone}`);

    phoneC1.innerHTML = value1.phone;
    phoneC2.innerHTML = value2.phone;
    phoneC3.innerHTML = value3.phone;

    urlC1.setAttribute('href', value1.url);
    urlC2.setAttribute('href', value2.url);
    urlC3.setAttribute('href', value3.url);

    urlC1.setAttribute('target', '_blank');
    urlC2.setAttribute('target', '_blank');
    urlC3.setAttribute('target', '_blank');

    urlC1.innerHTML = value1.alturl;
    urlC2.innerHTML = value2.alturl;
    urlC3.innerHTML = value3.alturl;

    mC1.textContent = `${value1.membershiplevel}`;
    mC2.textContent = `${value2.membershiplevel}`;
    mC3.textContent = `${value3.membershiplevel}`;

}

async function getCompanies() {
    try {
        const response = await fetch(jsonData);
        if (response.ok) {
            let data =  await response.json();
            //console.log(data);
            silverGold(data);

        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

getCompanies();
