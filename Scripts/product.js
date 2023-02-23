let cont = document.getElementById('container');

async function getdata(){
    let fetched_data = await fetch('https://63f5e61459c944921f68bb09.mockapi.io/products');
    let data = await fetched_data.json();
    displayData(data);
}

getdata();

function displayData(data){
    cont.innerHTML = null;
    data.forEach(el => {
        let card = document.createElement('div');
        let btn = document.createElement('button');
        btn.textContent = 'Add to Bag';
        let image = document.createElement('img');
        image.setAttribute('src', el.avatar);
        let title = document.createElement('p');
        title.textContent = el.title;
        let price = document.createElement('p');
        price.textContent = `$ ${el.price}`;
        card.append(image, title, price, btn);
        cont.append(card);
    })
}