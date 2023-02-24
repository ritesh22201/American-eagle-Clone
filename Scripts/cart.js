function openNav() {
  document.getElementById("mySidenav").style.width = "350px";

}


function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



let LSdata = JSON.parse(localStorage.getItem("key")) || []
let totalCart = document.getElementById("total-items")
console.log(LSdata)



// fetch(`https://63f5e61459c944921f68bb09.mockapi.io/products`)
//   .then(res => res.json())
//   .then((data) => {
//     fetchedData = data
//     append(data)
//     console.log(data)
//   })

//   console.log(fetchedData)



var main = document.getElementById('append')
 document.querySelector("#total-items").innerText = LSdata.length;
appendata(LSdata);
function appendata(data) {

  let total = document.getElementById("amount")
  let total2 = document.getElementById("amount2")
  main.innerHTML = ""

  data.forEach((ele) => {

    let imgbox = document.createElement("div")
    imgbox.setAttribute("class", "imgbox")

    let img = document.createElement("img")
    img.src = ele.avatar

    imgbox.append(img)

    let main222 = document.createElement("div")
    main222.setAttribute("class", "main222")

    let card = document.createElement("div")



    let title = document.createElement("h3")
    title.innerText = `${ele.title}`

    let cateogry = document.createElement("p")
    cateogry.innerText = `Category : ${ele.category}`

    let price = document.createElement("h3")
    price.innerText = `Price : ${ele.price}`

    let desc = document.createElement("p")
    desc.textContent = `Description  : ${ele.description}`

    hr = document.createElement("hr")

    // .buttons
    let quantity = document.createElement("span");
    quantity.textContent = `Qty : ${ele.quantity}`;




    let Increment = document.createElement("button");
    Increment.setAttribute("class", "inc")

    let decrement = document.createElement("button");
    let remove = document.createElement("button");

    remove.innerText = "Remove";
    Increment.innerText = "+";
    decrement.textContent = "-";

    remove.addEventListener("click", () => {
      LSdata = LSdata.filter((elem) => {
        return elem.id !== ele.id
      })
      localStorage.setItem("key", JSON.stringify(LSdata))
      appendata(LSdata);
    });
    Increment.addEventListener("click", () => {
      ele = ele.quantity++;
      localStorage.setItem("key", JSON.stringify(LSdata));
      appendata(LSdata);

    });
    decrement.addEventListener("click", () => {
      if (ele.quantity > 1) {
        ele = ele.quantity--;
        localStorage.setItem("key", JSON.stringify(LSdata));
        appendata(LSdata);
      }

    });



    card.append(title, cateogry, price, desc, quantity, Increment, decrement, remove)
    main222.append(imgbox, card)
    main.append(main222, hr)
    document.querySelector("#total-items").innerText = LSdata.length;

  });

  let sum = 0;
  for (let i = 0; i < LSdata.length; i++) {
    sum += LSdata[i].price * LSdata[i].quantity
  }
  total.textContent = sum
  total2.innerText = sum

  let couponbtn = document.getElementById("coupon-btn")

  couponbtn.addEventListener("click",()=>{
    let couponinput = document.getElementById("coupon-input")
  
    if(couponinput.value =="MASAI30"){
      let x = sum * 0.7 ;
      total2.innerText = x
    }
  
  })

}








// ******************* search bar

let search = document.getElementById("search-bar");
search.addEventListener("input", (e) => {
  e.preventDefault();
  const value = e.target.value;

  let newArr = LSdata.filter(element => {

    return element.title.toLowerCase().includes(value) || element.category.toLowerCase().includes(value);

  })
  
  appendata(newArr)
})