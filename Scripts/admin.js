let sec1 = document.getElementById('section1');
let form = document.getElementById('login');
let h2 = document.getElementById('status');
let sec2 = document.getElementById('section2');
let form2 = document.getElementById('addProduct');
let productTable = document.getElementById('table');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let obj = {
        email: form.email.value,
        password: form.password.value
    }

    if (obj.email && obj.password) {
        if (obj.email == 'eve.holt@reqres.in' && obj.password == '12345') {
            let fetched = fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj)
            }
            );

            fetched.then(el => el.json())
                .then(data => {
                    if (data.token) {
                        h2.style.display = 'grid';
                        h2.textContent = 'Hey Admin, Welcome back!!';
                        sec1.style.display = 'none';
                        setTimeout(() =>{
                            h2.style.display = 'none';
                            sec2.style.display = 'block';
                        }, 3000);

                    }
                    else {
                        h2.style.display = 'grid';
                        h2.textContent = 'Some error occurred!!';
                    }
                });
        }
        else {
            alert('Wrong Credentials!!');
        }

    }
    else {
        alert('Please fill all the input fields!!');
    }
})

form2.addEventListener('submit', (e) => {
    e.preventDefault();

    let obj = {
        avatar : form2.image.value,
        title : form2.title.value,
        description : form2.desc.value,
        price : form2.price.value,
        category : form2.category.value
    }

    let fetched = fetch('https://63f5e61459c944921f68bb09.mockapi.io/products', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(obj)
    });

    fetched.then(res => res.json())
    .then(data => {
        h2.style.display = 'grid';
        sec2.style.display = 'none';
        h2.textContent = 'Product added to the database!!';
        setTimeout(() => {
            h2.style.display = 'none';
            window.location.href = 'product.html'
        }, 3000)
    })
})