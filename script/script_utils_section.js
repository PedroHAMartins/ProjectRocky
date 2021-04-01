window.onload = function addToCart(){}



function addToCart(id){
    var getId = document.getElementById(id).getAttribute("id");
    if(getId == "anilha1"){
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
    if( getId == "anilha2"){
        var savedCart = localStorage.getItem("cart_value")
        var savedItems = localStorage.getItem("items_count");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 45);
        }
        if(savedItems == null ){
            savedItems = 0;
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 45));
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        
    }
    if( getId == "anilha3"){
        var savedCart = localStorage.getItem("cart_value")
        var savedItems = localStorage.getItem("items_count");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 10);
        }
        if(savedItems == null ){
            savedItems = 0;
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 10));
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        
    }
    if( getId == "colchonete1"){
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
    if( getId == "dumbells1"){
        var savedCart = localStorage.getItem("cart_value")
        var savedItems = localStorage.getItem("items_count");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 350);
        }
        if(savedItems == null ){
            savedItems = 0;
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 350));
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        
    }
    if( getId == "elastico1"){
        var savedCart = localStorage.getItem("cart_value")
        var savedItems = localStorage.getItem("items_count");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 10);
        }
        if(savedItems == null ){
            savedItems = 0;
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 10));
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