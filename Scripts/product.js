let cont = document.getElementById('container');
let searchInp = document.getElementById('search');
let filter = document.getElementById('filter');
let sort = document.getElementById('sort');
let bag = document.querySelector('.fa-bag-shopping');
let cartData = document.getElementById('cartdata');
let logoIcon = document.querySelector('.logo');
let storeData = JSON.parse(localStorage.getItem('key')) || [];

cartData.textContent = storeData.length;

logoIcon.addEventListener('click', () => {
    window.location.href = 'index.html';
})

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
        let addProduct = document.createElement('span');
        addProduct.style.marginLeft = '8px';
        addProduct.style.fontSize = '14px'
        addProduct.style.color = '#28d107';
        addProduct.style.fontWeight = 'bold';

        let filter = storeData.filter(ele => ele.title == el.title);
        btn.textContent = filter.length ? "Go to Bag" : "Add to Bag";

        if(storeData.length){
            cartData.style.display = 'grid';
        }

        card.append(avatar, title, price, btn, addProduct);
        cont.append(card);

        btn.addEventListener('click', () => {
            if (btn.textContent == 'Add to Bag') {
                storeData.push({ ...el, quantity: 1 });
                cartData.textContent = storeData.length;
                localStorage.setItem('key', JSON.stringify(storeData));
                btn.textContent = 'Go to Bag';
                if(storeData.length){
                    cartData.style.display = 'grid';
                }
                addProduct.style.display = 'inline';
                addProduct.textContent = 'Product added to bag✅';

                setTimeout(() => {
                    addProduct.style.display = 'none';
                }, 4000)
            }
            else{
                window.location.href = './cart.html';
            }
        })

    })
}

// Go to cart

bag.addEventListener('click', () => {
    window.location.href = 'cart.html';
})

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


