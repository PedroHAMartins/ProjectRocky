window.onload = function addToCart(){}



function addToCart(id){
    var getId = document.getElementById(id).getAttribute("id");
    if(getId == "male_shirt1" || getId == "male_shirt2" || getId == "male_shirt3" ||
        getId == "female_shirt1" || getId == "female_shirt2" || getId =="female_shirt3"){
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
            localStorage.setItem("cart_value", (parseInt(savedCart) + 30));
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        
    }
    if( getId == "anilha1"){
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
            localStorage.setItem("cart_value", (parseInt(savedCart) + 20));
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        
    }
    if( getId == "esteira1"){
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
            localStorage.setItem("cart_value", (parseInt(savedCart) + 750));
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        
    }
    if( getId == "sapatilha1"){
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
            localStorage.setItem("cart_value", (parseInt(savedCart) + 250));
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        
    }
    if( getId == "bermuda_inf1"){
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
            localStorage.setItem("cart_value", (parseInt(savedCart) + 20));
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        
    }
    if( getId == "chuteira_inf1"){
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
            localStorage.setItem("cart_value", (parseInt(savedCart) + 150));
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        
    }
    if( getId == "bola_basquete1"){
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
}

function changeImage(id){
    if(document.getElementById(id).getAttribute("src") == "images/"+id+".png"){
        document.getElementById(id).setAttribute("src", "images/"+id+"_info.png");
    }
    else{
        document.getElementById(id).setAttribute("src", "images/"+id+".png");
    }
}

function changeImageLeave(id){
    if(document.getElementById(id).getAttribute("src") == "images/"+id+".png"){
        document.getElementById(id).setAttribute("src", "images/"+id+"_info.png");
    }
    else{
        document.getElementById(id).setAttribute("src", "images/"+id+".png");
    }
}