let cont = document.getElementById('container');
let searchInp = document.getElementById('search');
let filter = document.getElementById('filter');
let sort = document.getElementById('sort');
let storeData = JSON.parse(localStorage.getItem('key')) || [];

async function getdata() {
    let fetched_data = await fetch('https://63f5e61459c944921f68bb09.mockapi.io/products');
    let data = await fetched_data.json();
    displayData(data);
    searchItems(data);
    filterItems(data);
    sortItems(data);
}

getdata();

function displayData(data) {
    cont.innerHTML = null;
    data.forEach((el, i) => {
        let card = document.createElement('div');
        let btn = document.createElement('button');
        btn.textContent = 'Add to Bag';
        let avatar = document.createElement('img');
        avatar.setAttribute('src', el.avatar);
        let title = document.createElement('p');
        title.textContent = el.title;
        let price = document.createElement('p');
        price.textContent = `$ ${el.price}`;
        card.append(avatar, title, price, btn);
        cont.append(card);

        btn.addEventListener('click', () => {
            
        })
    })
}

function searchItems(data) {
    searchInp.addEventListener('input', (e) => {
        let input = e.target.value;
        let filtered = data.filter(el => el.title.toLowerCase().includes(input.toLowerCase()));
        displayData(filtered);
    })
}

function filterItems(data) {
    filter.addEventListener('change', (e) => {
        let val = e.target.value;
        if (val == '') {
            displayData(data);
        }
        else {
            let filtered = data.filter(el => el.category == val);
            displayData(filtered);
        }
    })
}

function sortItems(data) {
    sort.addEventListener('change', (e) => {
        let val = e.target.value;
        if (val == '') {
            displayData(data);
        }
        else if (val == 'title') {
            let sorted = data.sort((a, b) => {
                if (a.title < b.title) {
                    return -1;
                }
                else if (a.title > b.title) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            displayData(sorted);
        }
        else if (val == 'price') {
            let sorted = data.sort((a, b) => {
                if (a.price < b.price) {
                    return -1;
                }
                else if (a.price > b.price) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            displayData(sorted);
        }
    })
}


