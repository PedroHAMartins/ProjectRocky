window.onload = function addToCart(){}



function addToCart(id){
    var getId = document.getElementById(id).getAttribute("id");
    if(getId == "bola_basquete1" || getId == "bola_futebol1" || getId == "bola_volei1"){
        var savedCart = localStorage.getItem("cart_value")
        var savedItems = localStorage.getItem("items_count");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 0);
        }
        if(savedItems == null ){
            savedItems = 0;
            localStorage.setItem("items_count", 0);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 90));
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        
    }
    if( getId == "bola_tenis1"){
        var savedCart = localStorage.getItem("cart_value")
        var savedItems = localStorage.getItem("items_count");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 0);
        }
        if(savedItems == null ){
            savedItems = 0;
            localStorage.setItem("items_count", 0);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 10));
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        
    }
    if( getId == "bola_futebolamericano1"){
        var savedCart = localStorage.getItem("cart_value")
        var savedItems = localStorage.getItem("items_count");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 0);
        }
        if(savedItems == null ){
            savedItems = 0;
            localStorage.setItem("items_count", 0);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 110));
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
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