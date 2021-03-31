window.onload = function addToCart(){}



function addToCart(id){
    var getId = document.getElementById(id).getAttribute("id");
    if(getId == "female_shirt1" || getId == "female_shirt2" || getId == "female_shirt3" ||
        getId == "top1" || getId == "top2"){
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
    if( getId == "berm_fem1" || getId == "berm_fem2"){
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
            localStorage.setItem("cart_value", (parseInt(savedCart) + 25));
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        
    }
    if( getId == "biquini1" || getId == "biquini2"){
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
            localStorage.setItem("cart_value", (parseInt(savedCart) + 40));
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