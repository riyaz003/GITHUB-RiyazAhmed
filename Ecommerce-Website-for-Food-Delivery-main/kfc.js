let productsel=document.querySelector(".row");
let cartitemsel=document.querySelector(".modal-body");
let subtotalel=document.querySelector(".subtotal");
let itemsincartel=document.querySelector(".btn-light span");

const products1 = [
    {
        tag: 1,
        name: 'Chicken Bucket - Medium',
        desc: '10 pieces of crispy fried chicken',
        price: 299.99,
        stock: 15,
        qty: 0
    },
    {
        tag: 2,
        name: 'Zinger Burger',
        desc: 'Spicy fried chicken fillet, lettuce, and mayo in a soft bun',
        price: 149.99,
        stock: 20,
        qty: 0
    },
    {
        tag: 3,
        name: 'Popcorn Chicken',
        desc: 'Bite-sized crispy chicken popcorn',
        price: 99.99,
        stock: 25,
        qty: 0
    },
    {
        tag: 4,
        name: 'Large Fries',
        desc: 'Crispy golden French fries',
        price: 79.99,
        stock: 30,
        qty: 0
    },
    {
        tag: 5,
        name: 'Double Down Burger',
        desc: 'Two fried chicken fillets with cheese and special sauce',
        price: 249.99,
        stock: 10,
        qty: 0
    }
];


function displayproducts1() {
    products1.forEach((product) => {
        productsel.innerHTML += `
        <div class="card card-sm shadow">
        <img src="images/kfc/kfc_${product.tag}.png" class="card-img-top" alt="${product.name}">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5><br>
          <p class="card-text text-muted">${product.desc}</p>
         
          <h5 class="text-primary d-inline">₹ ${product.price} </h5>
          <button type="button" class="btn btn-danger float-end" onclick="addtocart(${product.tag})">+ <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </svg></button>
         </div>
        </div>
        </div></div>
        `;
    });
}


displayproducts1();
let cart=JSON.parse(localStorage.getItem("CART")) || [];
updatecart();
function addtocart(tag)
{
    // check if product already exist
    if(cart.some((item)=>item.tag===tag))
    {
        changeqty("plus",tag);
    }
    else
    {
        const item=products1.find((product)=>product.tag===tag);
    cart.push({
        ...item,
        qty:1
    });
    
    }
   updatecart(); 
}
function updatecart()
{
    rendercartitems();
    rendersubtotal();
    localStorage.setItem("CART",JSON.stringify(cart));
}
// Update the rendercartitems function to check for empty cart
function rendercartitems() {
    cartitemsel.innerHTML = "";

    // If the cart is empty, show the empty cart message
    if (cart.length === 0) {
        cartitemsel.innerHTML = `
            <div class="text-center text-danger">
                <p>Cart is empty! Please add items to your cart.</p>
            </div>
        `;
    } else {
        // If the cart is not empty, render the cart items
        cart.forEach((item) => {
            cartitemsel.innerHTML += `
                <table class="table">
                    <tbody>
                        <tr>
                            <td><img src="images/kfc/kfc_${item.tag}.png" height="50" width="50"></td>
                            <td><p style="font-size:13px;">${item.name}</p></td>
                            <td>${item.price}</td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16" onclick="changeqty('minus',${item.tag})">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                                </svg> 
                                ${item.qty} 
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16" onclick="changeqty('plus',${item.tag})">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                </svg>
                            </td>
                            <td><button class="btn btn-sm btn-primary" onclick="removeitem(${item.tag})">Remove</button></td>
                        </tr>
                    </tbody>
                </table>
            `;
        });
    }
}

// Update the updatecart function to disable the Order button if the cart is empty
function updatecart() {
    rendercartitems();
    rendersubtotal();
    localStorage.setItem("CART", JSON.stringify(cart));

    // Get the "Order" button
    const orderButton = document.getElementById("order-button");
    
    // If the cart is empty, disable the Order button
    if (cart.length === 0) {
        orderButton.disabled = true;  // Disable the button
    } else {
        orderButton.disabled = false; // Enable the button
    }
}

function changeqty(action,tag)
{
    cart=cart.map((item)=>{
        let qty=item.qty;
        if(item.tag===tag)
        {
            if(action==="minus" && qty>1)
            {
                qty--;
            }
            else if(action==="plus" && qty<item.stock)
            {
                qty++;
            }
        }
        return {
            ...item,
            qty,
        };
    })
    updatecart();
}
function rendersubtotal()
{
    let totalprice=0,totalitems=0;
    cart.forEach((item)=>{
        totalprice+=item.price*item.qty;
        totalitems+=item.qty;
    });
    subtotalel.innerHTML=`Subtotal(${totalitems} items):₹${totalprice.toFixed(2)}`
    itemsincartel.innerHTML= totalitems;            
}
function removeitem(tag)
{
    cart=cart.filter((item)=>item.tag!==tag);
    updatecart();
}


