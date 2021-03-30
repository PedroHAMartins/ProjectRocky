function updateCart(){
    var updated_value = localStorage.getItem("cart_value");
    var updated_items = localStorage.getItem("items_count");
    document.getElementById("shop_cart_value").innerHTML = updated_value;
    document.getElementById("shop_cart_products").innerHTML = updated_items;
}