function openNav() {
    document.getElementById("mySidenav").style.width = "350px";

  }

  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
// applyCoupon()
// function applyCoupon(){

// let coupon = document.getElementById("coupon").value


// let button = document.getElementById("coupon-btn")
// let itemPrice = 100;
// button.addEventListener("click",()=>{
  
//   let couponCode = coupon;
//   if(couponCode ==="MASAI30"){
//     itemPrice = itemPrice * 0.7;
//   }
//   alert(`Final Price : ${itemPrice}`)

// })

// }
function applyCoupon() {
  let couponInput = document.getElementById("coupon");
  let couponCode = couponInput.value;
  
  if (!couponCode) {
    alert("Please enter a coupon code.");
    return;
  }
  
  let button = document.getElementById("coupon-btn");
  let itemPrice = 100;
  
  button.addEventListener("click", () => {
    if (couponCode === "MASAI30") {
      itemPrice = itemPrice * 0.7;
      alert(`Final Price: ${itemPrice}`);
    } else {
      alert("Invalid coupon code.");
    }
  });
}
applyCoupon()

// document.addEventListener("DOMContentLoaded", applyCoupon);


// let itemPrice = 100;


// let couponCode = prompt("Enter coupon code:");


// if (couponCode === "masai30") {
  
//   itemPrice = itemPrice * 0.7; // 30% discount
// }


// alert(`Final price: $${itemPrice}`);

