const cards = document.querySelector('article');
const URL = 'https://juyai.github.io/wdd230/temple-inn-and-suites/data/temples.json';

getTemples();

async function getTemples() {
    let response = await fetch(URL);
    if (response.ok) {
        let dataTemples = await response.json();
        displayTemples(dataTemples);     
    } else {
        throw Error(response.statusText);
    }
}

function displayTemples(dataTemples) {
    dataTemples.temples.forEach(temple => {
        let card = document.createElement('section');
        let templeName = document.createElement('h2');
        let templePic = document.createElement('img');
        let templeAddress = document.createElement('p');
        let templePhone = document.createElement('a');

        let servicesContainer = document.createElement('div');
        let servicesbtn = document.createElement('button');
        let serviceslabel = document.createElement('h3');
        let templeServices = document.createElement('ul');

        let closuresContainer = document.createElement('div');
        let closureslabel = document.createElement('h3');
        let closuresbtn = document.createElement('button');
        let templeClosures = document.createElement('ul');

        let milestonesContainer = document.createElement('div');
        let milestoneslabel = document.createElement('h3');
        let milestonesbtn = document.createElement('button');
        let templeMilestones = document.createElement('ul');

        let discoverbtn = document.createElement('a');
        //let likebtn = document.createElement('button');

        templeName.textContent = `${temple.name}`;

        templePic.setAttribute('src', temple.image);
        templePic.setAttribute('alt', temple.name);
        templePic.setAttribute('loading', 'lazy');

        templeAddress.textContent = `${temple.address}`;
        templePhone.setAttribute('href', `tel:${temple.phone}`);
        templePhone.innerHTML = temple.phone;

        serviceslabel.textContent = 'Services';
        servicesbtn.innerHTML = `<span>+</span><span>-</span>`;
        templeServices.innerHTML = temple.services.map(i => `<li>${i}</li>`).join('');
        function ddServices() {
            servicesbtn.classList.toggle('servicesdd');
            templeServices.classList.toggle('seeServices');
        }
        const m = servicesbtn;
        m.onclick = ddServices;
        
        closureslabel.textContent = 'Closures';
        closuresbtn.innerHTML = `<span>+</span><span>-</span>`;
        templeClosures.innerHTML = temple.closures.map(i => `<li>${i}</li>`).join('');
        function ddClosures() {
            closuresbtn.classList.toggle('closuresdd');
            templeClosures.classList.toggle('seeClosures');
        }
        const s = closuresbtn;
        s.onclick = ddClosures;

        milestoneslabel.textContent = 'Milestones';
        milestonesbtn.innerHTML = `<span>+</span><span>-</span>`;
        templeMilestones.innerHTML = temple.milestones.map(i => `<li>${i}</li>`).join('');
        function ddMilestones() {
            milestonesbtn.classList.toggle('milestonesdd');
            templeMilestones.classList.toggle('seeMilestones');
        }
        const t = milestonesbtn;
        t.onclick = ddMilestones;

        discoverbtn.setAttribute('href', temple.url);
        discoverbtn.innerHTML = 'DISCOVER MORE';
        
        cards.appendChild(card);
        card.append(templeName);
        card.append(templePic);
        card.appendChild(templeAddress);
        card.appendChild(templePhone);

        card.appendChild(servicesContainer);
        servicesContainer.append(serviceslabel);
        servicesContainer.append(servicesbtn);
        servicesContainer.append(templeServices);

        card.appendChild(closuresContainer);
        closuresContainer.append(closureslabel);
        closuresContainer.append(closuresbtn);
        closuresContainer.append(templeClosures);
        
        card.appendChild(milestonesContainer);
        milestonesContainer.append(milestoneslabel);
        milestonesContainer.append(milestonesbtn);
        milestonesContainer.append(templeMilestones);

        card.append(discoverbtn);
        
        const likebtn = document.createElement('button');
        const liked = '❤️';
        const unlike = '🤍';
        likebtn.innerHTML = unlike;
        likebtn.id = temple.name;
        const id = likebtn.id;
        if(localStorage.getItem(id, liked)) {
            likebtn.innerHTML = liked;
        }else{
            likebtn.innerHTML = unlike;
        }

        function megusta(){
            likebtn.classList.toggle('liked');
            localStorage.setItem(id, 'liked');
            if (likebtn.classList.contains('liked')){
                likebtn.innerHTML = liked;
                localStorage.setItem(id, 'liked');
            }else{
                likebtn.innerHTML = unlike;
                localStorage.removeItem(id);
            }
        }

        const f = likebtn;
        f.onclick = megusta;

        card.append(likebtn);   
    });
}

                                                                                                                                                                                                    
