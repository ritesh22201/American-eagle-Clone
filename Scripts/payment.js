let LSdata = JSON.parse(localStorage.getItem("key")) || [];

let main = document.getElementById("displayBagitems");

let totalItems = LSdata.length;
let itemsInCart = document.getElementById("totalItems");
itemsInCart.innerHTML = totalItems + " " + "items";

let redeembtnParentDiv = document.getElementById("redeembtnParent");
let redeemButton = document.getElementById("redeemBtn");
let gitCradDiv = document.getElementById("gitCardNumber");

let promoVtnDiv = document.getElementById("promoVtnDiv");
let promoBtn = document.getElementById("promoBtn");
let promoInputDiv = document.getElementById("offerInpDiv");

let addressCheckbox = document.getElementById("sameAddress");
let sameAddressDiv = document.getElementById("newAdderess");

let totalPrice = document.getElementById("total");
let merchandise = document.getElementById("merchandise");

redeemButton.addEventListener("click", () => {
  gitCradDiv.classList.remove("displaynone");
  redeembtnParentDiv.classList.add("displaynone");
});

promoBtn.addEventListener("click", () => {
  promoVtnDiv.classList.add("displaynone");
  promoInputDiv.classList.remove("displaynone");
});

addressCheckbox.addEventListener("change", () => {
  if (addressCheckbox.checked) {
    sameAddressDiv.classList.add("displaynone");
  } else {
    sameAddressDiv.classList.remove("displaynone");
  }
});
//console.log(LSdata)
let itemsCount = LSdata.length;

let cardData = LSdata.map((item) => {
  return {
    id: item.id,
    image: item.avatar,
    title: item.title,
    description: item.description,
    price: item.price,
    quantity: item.quantity,
  };
});
renderCard(cardData);

let sum = 0;
for (let i = 0; i < LSdata.length; i++) {
  sum += LSdata[i].price * LSdata[i].quantity;
}
//console.log(sum);
merchandise.textContent = sum.toFixed(2);
merchandise.textContent = sum.toFixed(2);
sum = sum + 5;
total.textContent = sum.toFixed(2);
total.innerText = sum.toFixed(2);
function renderCard(cardData) {
  let cardList = `   
    ${cardData
      .map((item) =>
        getcard(item.id, item.image, item.title, item.price, item.quantity)
      )
      .join("")}
    `;

  main.innerHTML = cardList;
  let getRemovebtn = document.querySelectorAll(".remove");
  getRemovebtn.forEach((el) => {
    
    el.addEventListener("click",getId)
  });
}


function getId(e){
    
    let mainId= e.target.dataset.id
   
    cardData.map((item,index)=>{
        if(item.id==mainId){
            
            deletefn(item,index)
            
        }
    })

}
function deletefn(item,index){
    debugger
    
    LSdata.splice(index,1)
    localStorage.setItem("key",JSON.stringify(LSdata))
    window.location.reload()
     
}

function getcard(id, image, title, price, quantity) {
  let card = `    
    
    <div id="bagItemsParent"class="itemdisplay">
        <div class="">
            <a href="">
                <img src="${image}" alt=""
                    class="wid100">
            </a>

        </div>
        <div >
            <h3>${title}</h3>
            <h3 class="colorRed">$${price}</h3>
            <p>Quantity:${quantity}</p>
        </div>
    </div>

    <div class="">
        <span><a href="./cart.html" class="anchortextEdit">Edit</a></span>
        <button data-id=${id} class="mrft20 bordernone remove">Remove</button>
    </div>
    `;

  return card;
}
// Arriving Date
const d = new Date();
let day = d.getDate();
let month = d.getMonth();
let startDateDisplay = document.getElementById("startDate");

let now = new Date().toLocaleDateString("en-us", {
  weekday: "long",
  month: "long",
  day: "numeric",
});
startDateDisplay.innerText = now;

let toDate = document.getElementById("toDate");
var someDate = new Date();
someDate.setDate(someDate.getDate() + 15);
toDate.innerText = someDate.toLocaleDateString("en-us", {
  weekday: "long",
  month: "long",
  day: "numeric",
});

let twoDaystartDate = document.getElementById("twoDaystartDate");
twoDaystartDate.innerText = now;

let twoDaytoDate = document.getElementById("twoDaytoDate");
var twoDaysomeDate = new Date();
twoDaysomeDate.setDate(twoDaysomeDate.getDate() + 2);
twoDaytoDate.innerText = twoDaysomeDate.toLocaleDateString("en-us", {
  weekday: "long",
  month: "long",
  day: "numeric",
});

let overNightDisplay = document.getElementById("overNight");
var overnightDay = new Date();
overnightDay.setDate(overnightDay.getDate() + 1);
overNightDisplay.innerText = overnightDay.toLocaleDateString("en-us", {
  weekday: "long",
  month: "long",
  day: "numeric",
});

// place order btn click
let placeOrder = document.getElementById("placeOrder");

let firtNameinp = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let streetAddress = document.getElementById("address");
let city = document.getElementById("City");
let State = document.getElementById("state");
let zipCode = document.getElementById("PostalCode");
let cardNumber = document.getElementById("cardNumber");
let expiryDate = document.getElementById("expiryDate");
let cvv = document.getElementById("cvv");
let phoneNumber = document.getElementById("phoneNumber");
let successHeader = document.getElementById("succesHeader");
let navHeader = document.getElementById("navHeader");


placeOrder.addEventListener("click", () => {
  if (firtNameinp.value == "") {
    alert("Please enter FirstName");
    successHeader.classList.add("displaynone");
    navHeader.classList.remove("displaynone");
  } else if (lastName.value == "") {
    alert("Please enter Last Name");
    navHeader.classList.remove("displaynone");
    successHeader.classList.add("displaynone");
  } else if (streetAddress.value == "") {
    alert("Please Enter Address");
    successHeader.classList.add("displaynone");
    navHeader.classList.remove("displaynone");
  } else if (city.value == "") {
    alert("Please Enter city");
    successHeader.classList.add("displaynone");
    navHeader.classList.remove("displaynone");
  } else if (State.value == "Select state") {
    alert("Please select state");
    successHeader.classList.add("displaynone");
    navHeader.classList.remove("displaynone");
  } else if (cardNumber.value == "") {
    alert("Please enter Card Number");
    successHeader.classList.add("displaynone");
    navHeader.classList.remove("displaynone");
  } else if (expiryDate.value == "") {
    alert("Please Enter Expiry Date");
    successHeader.classList.add("displaynone");
    navHeader.classList.remove("displaynone");
  } else if (cvv.value == "") {
    alert("Please enter CVV");
    successHeader.classList.add("displaynone");
    navHeader.classList.remove("displaynone");
  } else if (phoneNumber.value == "") {
    alert("Please Enter Phone Number");
    successHeader.classList.add("displaynone");
    navHeader.classList.remove("displaynone");
  } else {
    successHeader.classList.remove("displaynone");
    navHeader.classList.add("displaynone");
    window.scrollTo(0, 0);
  }
  
});
