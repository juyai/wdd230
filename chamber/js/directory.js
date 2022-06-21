const gridView = document.querySelector('#gridView');
const listView = document.querySelector('#listView');
const display = document.querySelector('article');
const URL = 'https://juyai.github.io/wdd230/chamber/data/data.json';

gridView.addEventListener('click', () => {
    display.classList.add('grid');
    display.classList.remove('list');
})

listView.addEventListener('click', showList);

function showList() {
    display.classList.add('list');
    display.classList.remove('grid');
}

async function getBusiness() {
    let response = await fetch(URL);
    if (response.ok) {
        let data = await response.json();
        //console.log(data);
        buildBusiness(data);     
    } else {
        throw Error(response.statusText);
    }
}

function buildBusiness(data) {
    data.companies.forEach(company => {
        let container = document.createElement('section');
        let companyLogo = document.createElement('img');
        let companyName = document.createElement('h2');
        let companyAddress = document.createElement('p');
        let companyPhone = document.createElement('a');
        let space = document.createElement('br');
        let companyUrl = document.createElement('a');
        let companyML = document.createElement('p');

        companyName.textContent = `${company.name}`;
        companyLogo.setAttribute('src', company.image);
        companyLogo.setAttribute('alt', company.name);
        companyLogo.setAttribute('loading', 'lazy');
        companyAddress.textContent = `${company.address}`;
        companyAddress.classList.add('address');
        companyPhone.setAttribute('href', `tel:${company.phone}`);
        companyPhone.classList.add('c-phone');
        companyPhone.innerHTML = company.phone;
        companyUrl.setAttribute('href', company.url);
        companyUrl.setAttribute('target', '_blank');
        companyUrl.innerHTML = company.alturl;
        companyUrl.classList.add('c-url');
        companyML.textContent = `${company.membershiplevel}`;
        companyML.classList.add('c-ml');

        container.append(companyLogo);
        container.append(companyName);
        container.appendChild(companyAddress);
        container.append(companyPhone);
        container.append(space);
        container.append(companyUrl);
        container.appendChild(companyML);

        display.append(container);
    });
}
                                                                                                                                                                                                    
getBusiness();