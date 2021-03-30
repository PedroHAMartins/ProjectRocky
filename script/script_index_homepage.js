window.onload = function addToCart(){}

function addToCart(id){
    if(document.getElementById(id).getAttribute("src") == "images/male_shirt1_info.png"){
        document.getElementById("value").value = parseInt(document.getElementById("value").value) + 30;
        document.getElementById("items").value = parseInt(document.getElementById("items").value) + 1;
        localStorage.setItem("cart_value", document.getElementById("value").value);
        var total_value = localStorage.getItem("cart_value");
        localStorage.setItem("items_count", document.getElementById("items").value);
        var total_items = localStorage.getItem("items_count")
    }
    if(document.getElementById(id).getAttribute("src") == "images/male_shirt2_info.png"){
        document.getElementById("value").value = parseInt(document.getElementById("value").value) + 30;
        document.getElementById("items").value = parseInt(document.getElementById("items").value) + 1;
        localStorage.setItem("cart_value", document.getElementById("value").value);
        var total_value = localStorage.getItem("cart_value");
        localStorage.setItem("items_count", document.getElementById("items").value);
        var total_items = localStorage.getItem("items_count")
    }
    if(document.getElementById(id).getAttribute("src") == "images/male_shirt3_info.png"){
        document.getElementById("value").value = parseInt(document.getElementById("value").value) + 30;
        document.getElementById("items").value = parseInt(document.getElementById("items").value) + 1;
        localStorage.setItem("cart_value", document.getElementById("value").value);
        var total_value = localStorage.getItem("cart_value");
        localStorage.setItem("items_count", document.getElementById("items").value);
        var total_items = localStorage.getItem("items_count")
    }
    if(document.getElementById(id).getAttribute("src") == "images/female_shirt1_info.png"){
        document.getElementById("value").value = parseInt(document.getElementById("value").value) + 30;
        document.getElementById("items").value = parseInt(document.getElementById("items").value) + 1;
        localStorage.setItem("cart_value", document.getElementById("value").value);
        var total_value = localStorage.getItem("cart_value");
        localStorage.setItem("items_count", document.getElementById("items").value);
        var total_items = localStorage.getItem("items_count")
    }
    if(document.getElementById(id).getAttribute("src") == "images/female_shirt2_info.png"){
        document.getElementById("value").value = parseInt(document.getElementById("value").value) + 30;
        document.getElementById("items").value = parseInt(document.getElementById("items").value) + 1;
        localStorage.setItem("cart_value", document.getElementById("value").value);
        var total_value = localStorage.getItem("cart_value");
        localStorage.setItem("items_count", document.getElementById("items").value);
        var total_items = localStorage.getItem("items_count")
    }
    if(document.getElementById(id).getAttribute("src") == "images/female_shirt3_info.png"){
        document.getElementById("value").value = parseInt(document.getElementById("value").value) + 30;
        document.getElementById("items").value = parseInt(document.getElementById("items").value) + 1;
        localStorage.setItem("cart_value", document.getElementById("value").value);
        var total_value = localStorage.getItem("cart_value");
        localStorage.setItem("items_count", document.getElementById("items").value);
        var total_items = localStorage.getItem("items_count")
    }
    if(document.getElementById(id).getAttribute("src") == "images/anilha1_info.png"){
        document.getElementById("value").value = parseInt(document.getElementById("value").value) + 20;
        document.getElementById("items").value = parseInt(document.getElementById("items").value) + 1;
        localStorage.setItem("cart_value", document.getElementById("value").value);
        var total_value = localStorage.getItem("cart_value");
        localStorage.setItem("items_count", document.getElementById("items").value);
        var total_items = localStorage.getItem("items_count")
    }
    if(document.getElementById(id).getAttribute("src") == "images/esteira1_info.png"){
        document.getElementById("value").value = parseInt(document.getElementById("value").value) + 750;
        document.getElementById("items").value = parseInt(document.getElementById("items").value) + 1;
        localStorage.setItem("cart_value", document.getElementById("value").value);
        var total_value = localStorage.getItem("cart_value");
        localStorage.setItem("items_count", document.getElementById("items").value);
        var total_items = localStorage.getItem("items_count")
    }
    if(document.getElementById(id).getAttribute("src") == "images/sapatilha1_info.png"){
        document.getElementById("value").value = parseInt(document.getElementById("value").value) + 250;
        document.getElementById("items").value = parseInt(document.getElementById("items").value) + 1;
        localStorage.setItem("cart_value", document.getElementById("value").value);
        var total_value = localStorage.getItem("cart_value");
        localStorage.setItem("items_count", document.getElementById("items").value);
        var total_items = localStorage.getItem("items_count")
    }
    if(document.getElementById(id).getAttribute("src") == "images/bermuda_inf1_info.png"){
        document.getElementById("value").value = parseInt(document.getElementById("value").value) + 250;
        document.getElementById("items").value = parseInt(document.getElementById("items").value) + 1;
        localStorage.setItem("cart_value", document.getElementById("value").value);
        var total_value = localStorage.getItem("cart_value");
        localStorage.setItem("items_count", document.getElementById("items").value);
        var total_items = localStorage.getItem("items_count")
    }
    if(document.getElementById(id).getAttribute("src") == "images/chuteira_inf1_info.png"){
        document.getElementById("value").value = parseInt(document.getElementById("value").value) + 150;
        document.getElementById("items").value = parseInt(document.getElementById("items").value) + 1;
        localStorage.setItem("cart_value", document.getElementById("value").value);
        var total_value = localStorage.getItem("cart_value");
        localStorage.setItem("items_count", document.getElementById("items").value);
        var total_items = localStorage.getItem("items_count")
    }
    if(document.getElementById(id).getAttribute("src") == "images/bola_basquete1_info.png"){
        document.getElementById("value").value = parseInt(document.getElementById("value").value) + 90;
        document.getElementById("items").value = parseInt(document.getElementById("items").value) + 1;
        localStorage.setItem("cart_value", document.getElementById("value").value);
        var total_value = localStorage.getItem("cart_value");
        localStorage.setItem("items_count", document.getElementById("items").value);
        var total_items = localStorage.getItem("items_count")
    }
    console.log(total_items);
    console.log(total_value);
}


function changeImage1(id){
    if(document.getElementById(id).getAttribute("src") == "images/male_shirt1.png"){
        document.getElementById(id).setAttribute("src", "images/male_shirt1_info.png");
    }
    else{
        document.getElementById(id).setAttribute("src", "images/male_shirt1.png");
    }
}

function changeImageLeave1(id){
    if(document.getElementById(id).getAttribute("src") == "images/male_shirt1.png"){
        document.getElementById(id).setAttribute("src", "images/male_shirt1_info.png");
    }
    else{
        document.getElementById(id).setAttribute("src", "images/male_shirt1.png");
    }
}

function changeImage2(id){
    if(document.getElementById(id).getAttribute("src") == "images/female_shirt2.png"){
        document.getElementById(id).setAttribute("src", "images/female_shirt2_info.png");
    }
    else{
        document.getElementById(id).setAttribute("src", "images/female_shirt2.png");
    }
}

function changeImageLeave2(id){
    if(document.getElementById(id).getAttribute("src") == "images/female_shirt2.png"){
        document.getElementById(id).setAttribute("src", "images/female_shirt2_info.png");
    }
    else{
        document.getElementById(id).setAttribute("src", "images/female_shirt2.png");
    }
}

function changeImage3(id){
    if(document.getElementById(id).getAttribute("src") == "images/female_shirt1.png"){
        document.getElementById(id).setAttribute("src", "images/female_shirt1_info.png");
    }
    else{
        document.getElementById(id).setAttribute("src", "images/female_shirt1.png");
    }
}

function changeImageLeave3(id){
    if(document.getElementById(id).getAttribute("src") == "images/female_shirt1.png"){
        document.getElementById(id).setAttribute("src", "images/female_shirt1_info.png");
    }
    else{
        document.getElementById(id).setAttribute("src", "images/female_shirt1.png");
    }
}

function changeImage4(id){
    if(document.getElementById(id).getAttribute("src") == "images/male_shirt3.png"){
        document.getElementById(id).setAttribute("src", "images/male_shirt3_info.png");
    }
    else{
        document.getElementById(id).setAttribute("src", "images/male_shirt3.png");
    }
}

function changeImageLeave4(id){
    if(document.getElementById(id).getAttribute("src") == "images/male_shirt3.png"){
        document.getElementById(id).setAttribute("src", "images/male_shirt3_info.png");
    }
    else{
        document.getElementById(id).setAttribute("src", "images/male_shirt3.png");
    }
}

function changeImage5(id){
    if(document.getElementById(id).getAttribute("src") == "images/female_shirt3.png"){
        document.getElementById(id).setAttribute("src", "images/female_shirt3_info.png");
    }
    else{
        document.getElementById(id).setAttribute("src", "images/female_shirt3.png");
    }
}

function changeImageLeave5(id){
    if(document.getElementById(id).getAttribute("src") == "images/female_shirt3.png"){
        document.getElementById(id).setAttribute("src", "images/female_shirt3_info.png");
    }
    else{
        document.getElementById(id).setAttribute("src", "images/female_shirt3.png");
    }
}

function changeImage6(id){
    if(document.getElementById(id).getAttribute("src") == "images/male_shirt2.png"){
        document.getElementById(id).setAttribute("src", "images/male_shirt2_info.png");
    }
    else{
        document.getElementById(id).setAttribute("src", "images/male_shirt2.png");
    }
}

function changeImageLeave6(id){
    if(document.getElementById(id).getAttribute("src") == "images/male_shirt2.png"){
        document.getElementById(id).setAttribute("src", "images/male_shirt2_info.png");
    }
    else{
        document.getElementById(id).setAttribute("src", "images/male_shirt2.png");
    }
}

function changeImage7(id){
    if(document.getElementById(id).getAttribute("src") == "images/anilha1.png"){
        document.getElementById(id).setAttribute("src", "images/anilha1_info.png");
    }
    else{
        document.getElementById(id).setAttribute("src", "images/anilha1.png");
    }
}

function changeImageLeave7(id){
    if(document.getElementById(id).getAttribute("src") == "images/anilha1.png"){
        document.getElementById(id).setAttribute("src", "images/anilha1_info.png");
    }
    else{
        document.getElementById(id).setAttribute("src", "images/anilha1.png");
    }
}

function changeImage8(id){
    if(document.getElementById(id).getAttribute("src") == "images/esteira1.png"){
        document.getElementById(id).setAttribute("src", "images/esteira1_info.png");
    }
    else{
        document.getElementById(id).setAttribute("src", "images/esteira1.png");
    }
}

function changeImageLeave8(id){
    if(document.getElementById(id).getAttribute("src") == "images/esteira1.png"){
        document.getElementById(id).setAttribute("src", "images/esteira1_info.png");
    }
    else{
        document.getElementById(id).setAttribute("src", "images/esteira1.png");
    }
}

function changeImage9(id){
    if(document.getElementById(id).getAttribute("src") == "images/sapatilha1.png"){
        document.getElementById(id).setAttribute("src", "images/sapatilha1_info.png");
    }
    else{
        document.getElementById(id).setAttribute("src", "images/sapatilha1.png");
    }
}

function changeImageLeave9(id){
    if(document.getElementById(id).getAttribute("src") == "images/sapatilha1.png"){
        document.getElementById(id).setAttribute("src", "images/sapatilha1_info.png");
    }
    else{
        document.getElementById(id).setAttribute("src", "images/sapatilha1.png");
    }
}

function changeImage10(id){
    if(document.getElementById(id).getAttribute("src") == "images/bermuda_inf1.png"){
        document.getElementById(id).setAttribute("src", "images/bermuda_inf1_info.png");
    }
    else{
        document.getElementById(id).setAttribute("src", "images/bermuda_inf1.png");
    }
}

function changeImageLeave10(id){
    if(document.getElementById(id).getAttribute("src") == "images/bermuda_inf1.png"){
        document.getElementById(id).setAttribute("src", "images/bermuda_inf1_info.png");
    }
    else{
        document.getElementById(id).setAttribute("src", "images/bermuda_inf1.png");
    }
}

function changeImage11(id){
    if(document.getElementById(id).getAttribute("src") == "images/chuteira_inf1.png"){
        document.getElementById(id).setAttribute("src", "images/chuteira_inf1_info.png");
    }
    else{
        document.getElementById(id).setAttribute("src", "images/chuteira_inf1.png");
    }
}

function changeImageLeave11(id){
    if(document.getElementById(id).getAttribute("src") == "images/mchuteira_inf1.png"){
        document.getElementById(id).setAttribute("src", "images/chuteira_inf1_info.png");
    }
    else{
        document.getElementById(id).setAttribute("src", "images/chuteira_inf1.png");
    }
}

function changeImage12(id){
    if(document.getElementById(id).getAttribute("src") == "images/bola_basquete1.png"){
        document.getElementById(id).setAttribute("src", "images/bola_basquete1_info.png");
    }
    else{
        document.getElementById(id).setAttribute("src", "images/bola_basquete1.png");
    }
}

function changeImageLeave12(id){
    if(document.getElementById(id).getAttribute("src") == "images/bola_basquete1.png"){
        document.getElementById(id).setAttribute("src", "images/bola_basquete1_info.png");
    }
    else{
        document.getElementById(id).setAttribute("src", "images/bola_basquete1.png");
    }
}

