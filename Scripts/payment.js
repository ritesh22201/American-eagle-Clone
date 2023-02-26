let LSdata = JSON.parse(localStorage.getItem("key")) || []

let main=document.getElementById("displayBagitems")

let totalItems= LSdata.length
let itemsInCart= document.getElementById("totalItems")
itemsInCart.innerHTML=totalItems+" "+"items"

let redeembtnParentDiv= document.getElementById("redeembtnParent")
let redeemButton= document.getElementById("redeemBtn")
let gitCradDiv= document.getElementById("gitCardNumber")

let promoVtnDiv = document.getElementById("promoVtnDiv")
let promoBtn= document.getElementById("promoBtn")
let promoInputDiv= document.getElementById("offerInpDiv")

let addressCheckbox= document.getElementById("sameAddress")
let sameAddressDiv= document.getElementById("newAdderess")

redeemButton.addEventListener("click",()=>{
    gitCradDiv.classList.remove("displaynone");
    redeembtnParentDiv.classList.add("displaynone")

})

promoBtn.addEventListener("click",()=>{
    promoVtnDiv.classList.add("displaynone")
    promoInputDiv.classList.remove("displaynone")
})

addressCheckbox.addEventListener("change",()=>{
    if(addressCheckbox.checked){
        sameAddressDiv.classList.add("displaynone")
    }else{
        sameAddressDiv.classList.remove("displaynone")
    }
})
//console.log(LSdata)
let itemsCount=LSdata.length;

    let cardData = LSdata.map(item => {
        return {
            id:item.id,
        image:item.avatar,
        title: item.title,
        description: item.description ,
        price:item.price,
        quantity:item.quantity
        }
      })
renderCard(cardData)


function renderCard(cardData){
    let cardList=`   
    ${cardData.map(item=> getcard(item.id,item.image,item.title,item.price,item.quantity)).join("")}
    `
    
    main.innerHTML=cardList
    let getRemovebtn= document.querySelectorAll(".remove")
    getRemovebtn.forEach((item)=>{
        
        
        item.addEventListener("click",()=>{
            debugger
            let mainId= item.dataset.id
            cardData.map((items)=>{
                if(mainId==items.id){
                    console.log(mainId)
                }
            })
        })
    })
}



function getcard(id,image,title,price,quantity){
    let card=`    
    
    <div id="bagItemsParent"class="itemdisplay">
        <div class="">
            <a href="">
                <img src="${image}" alt=""
                    class="wid100">
            </a>

        </div>
        <div >
            <h3>${title}</h3>
            <h3>$${price}</h3>
            <p>Style:12134-33</p>
            <p>Color:Navy Blue</p>
            <p>Size:23</p>
            <p>Quantity:${quantity}</p>
        </div>
    </div>

    <div class="">
        <span><a href="./cart.html">Edit</a></span>
        <button data-id=${id} class="mrft20 bordernone remove">Remove</button>
    </div>
    `
    
    return card
}


