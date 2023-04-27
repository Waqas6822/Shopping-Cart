let openShopping=document.querySelector(".shopping");
let closeShopping=document.querySelector(".closeshopping");
let list=document.querySelector(".list");
let listCard=document.querySelector(".listcard");
let body=document.querySelector("body");
let total=document.querySelector(".total");
let quantity=document.querySelector(".quantity");


openShopping.addEventListener("click", ()=>{
    body.classList.add("active");
})
closeShopping.addEventListener("click" ,()=>{
    body.classList.remove("active")
})

let products=[
    {
        id: 1,
        name:'product name 1',
        Image:'1.jpg',
        price: 120

    },
    {
        id: 2,
        name:'product name 2',
        Image:'2.jpg',
        price: 120
    },
    {
        id: 3,
        name:'product name 3',
        Image:'3.jpg',
        price: 120
    },
    {
        id: 4,
        name:'product name 4',
        Image:'4.jpg',
        price: 120
    },
    {
        id: 5,
        name:'product name 5',
        Image:'5.jpg',
        price: 120
    },
    {
        id: 6,
        name:'product name 6',
        Image:'6.jpg',
        price: 120
    },
];
let listCards=[];
function initApp(){
    products.forEach((value,key)=>{
        let newDiv=document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML=`<img src='images/${value.Image}'/>
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addTocard(${key})">Add To Card</button>
        ` ;
        list.appendChild(newDiv);
    })
}

initApp();
function addTocard(key){
    if(listCards[key]==null){
        listCards[key]=products[key];
        listCards[key].quantity=1;
    }
    reloadcard();
}
function reloadcard(){
    listCard.innerHTML="";
    let count=0;
    let totalprice=0;
    listCards.forEach((value,key) =>{
        totalprice=totalprice+ value.price;
        count=count+ value.quantity;



        if(value != null){
            let newDiv=document.createElement("li");
              newDiv.innerHTML=`<img src='images/${value.Image}'/>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>${value.quantity}</div>
                <div>
                <button onclick="changeQuantity(${key},${value.quantity-1})">-</button>
                <div class="count">${value.quantity}</div>
                <button onclick="changeQuantity(${key},${value.quantity+1})">+</button>

                </div>
  ` ;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText=totalprice.toLocaleString();
    quantity.innerText=count;
}
function changeQuantity(key,quantity){
    if(quantity==0){
        delete listCards[key];
    }else{
        listCards[key].quantity=quantity;
        listCards[key].price=quantity*products[key].price;
    }
    reloadcard();
}














