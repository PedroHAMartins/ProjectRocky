window.onload = function addToCart(){}



function addToCart(id){
    var getId = document.getElementById(id).getAttribute("id");
    if(getId == "bermuda_inf1" || getId =="bermuda_inf2"){
        var savedCart = localStorage.getItem("cart_value")
        var savedItems = localStorage.getItem("items_count");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 20);
        }
        if(savedItems == null ){
            savedItems = 0;
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 20));
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        
    }
    if( getId == "kid_shirt1" || getId == "kid_shirt2"){
        var savedCart = localStorage.getItem("cart_value")
        var savedItems = localStorage.getItem("items_count");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 25);
        }
        if(savedItems == null ){
            savedItems = 0;
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 25));
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        
    }
    if( getId == "chuteira_inf1"){
        var savedCart = localStorage.getItem("cart_value")
        var savedItems = localStorage.getItem("items_count");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 150);
        }
        if(savedItems == null ){
            savedItems = 0;
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 150));
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