window.onload = function addToCart(){}



function addToCart(id){
    var getId = document.getElementById(id).getAttribute("id");
    if(getId == "bermuda_inf1"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedBermInf1 = localStorage.getItem("stored_berminf1");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 20);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 20));
        }
        if(savedItems == null ){
            savedItems = 0;
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        if(savedBermInf1 == null){
            localStorage.setItem("stored_berminf1", 1);
        }
        else{
            localStorage.setItem("stored_berminf1", (parseInt(savedBermInf1) + 1));
        }
        
    }
    if(getId == "bermuda_inf2"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedBermInf2 = localStorage.getItem("stored_berminf2");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 20);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 20));
        }
        if(savedItems == null ){
            savedItems = 0;
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        if(savedBermInf2 == null){
            localStorage.setItem("stored_berminf2", 1);
        }
        else{
            localStorage.setItem("stored_berminf2", (parseInt(savedBermInf2) + 1));
        }
    }
    if( getId == "kid_shirt1"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedKidS1 = localStorage.getItem("stored_kids1");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 25);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 25));
        }
        if(savedItems == null ){
            savedItems = 0;
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        if(savedKidS1 == null){
            localStorage.setItem("stored_kids1", 1);
        }
        else{
            localStorage.setItem("stored_kids1", (parseInt(savedKidS1) + 1));
        }
    }
    if( getId == "kid_shirt2"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedKidS2 = localStorage.getItem("stored_kids2");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 25);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 25));
        }
        if(savedItems == null ){
            savedItems = 0;
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        if(savedKidS1 == null){
            localStorage.setItem("stored_kids2", 1);
        }
        else{
            localStorage.setItem("stored_kids2", (parseInt(savedKidS2) + 1));
        }
    }
    if( getId == "chuteira_inf1"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedChutInf2 = localStorage.getItem("stored_chutinf2");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 150);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 150));
        }
        if(savedItems == null ){
            savedItems = 0;
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        if(savedChutInf2 == null){
            localStorage.setItem("stored_chutinf2", 1);
        }
        else{
            localStorage.setItem("stored_chutinf2", (parseInt(savedChutInf2) + 1));
        }
    }
}

function changeImage(id){
    if(document.getElementById(id).getAttribute("src") == "../images/"+id+".png"){
        document.getElementById(id).setAttribute("src", "../images/"+id+"_info.png");
    }
    else{
        document.getElementById(id).setAttribute("src", "../images/"+id+".png");
    }
}

function changeImageLeave(id){
    if(document.getElementById(id).getAttribute("src") == "../images/"+id+".png"){
        document.getElementById(id).setAttribute("src", "../images/"+id+"_info.png");
    }
    else{
        document.getElementById(id).setAttribute("src", "../images/"+id+".png");
    }
}