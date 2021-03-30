function updateCart(){
    var updated_value = localStorage.getItem("cart_value");
    var updated_items = localStorage.getItem("items_count");
    document.getElementById("shop_cart_value").innerHTML = updated_value;
    document.getElementById("shop_cart_products").innerHTML = updated_items;
}

function getStoredCart(){
    var storedCart = localStorage.getItem("cart_value");
    var storedItems = localStorage.getItem("items_count");
    document.getElementById("shop_cart_value").innerHTML = storedCart;
    document.getElementById("shop_cart_products").innerHTML = storedItems;
}

function clearCart(){
    localStorage.setItem("cart_value", parseInt(0));
    localStorage.setItem("items_count", parseInt(0));
    document.getElementById("shop_cart_value").innerHTML = "0";
    document.getElementById("shop_cart_products").innerHTML = "0";
}