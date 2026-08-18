let cart = JSON.parse(localStorage.getItem("cart")) || [];


function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart!");

    window.location.href = "cart.html";

}


/* Show Cart */

function displayCart() {

    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    if (!cartItems) {
        return;
    }

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = "<p>Your cart is empty.</p>";

        cartTotal.textContent = "0";

        return;
    }


    cart.forEach(function(item, index) {

        total += item.price;

        cartItems.innerHTML += `
        
            <div class="cart-item">

                <div>
                    <h3>${item.name}</h3>
                    <p>₹${item.price}</p>
                </div>

                <button onclick="removeFromCart(${index})">
                    Remove
                </button>

            </div>

        `;

    });


    cartTotal.textContent = total;

}


/* Remove item */

function removeFromCart(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}


/* Checkout */

function goToCheckout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }

    window.location.href = "checkout.html";

}


displayCart();
function placeOrder() {
    // Clear the cart
    localStorage.removeItem("cart");

    alert("Order placed successfully!");

    // Go back to menu
    window.location.href = "menu.html";
}