window.onload = function addToCart(){}



function addToCart(id){
    var getId = document.getElementById(id).getAttribute("id");
    if(getId == "esteira1"){
        var savedCart = localStorage.getItem("cart_value")
        var savedItems = localStorage.getItem("items_count");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 750);
        }
        if(savedItems == null ){
            savedItems = 0;
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 750));
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        
    }
    if( getId == "bicicleta1"){
        var savedCart = localStorage.getItem("cart_value")
        var savedItems = localStorage.getItem("items_count");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 600);
        }
        if(savedItems == null ){
            savedItems = 0;
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 600));
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        
    }
    if( getId == "supino1"){
        var savedCart = localStorage.getItem("cart_value")
        var savedItems = localStorage.getItem("items_count");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 400);
        }
        if(savedItems == null ){
            savedItems = 0;
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 400));
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