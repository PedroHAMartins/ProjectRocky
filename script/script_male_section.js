window.onload = function addToCart(){}



function addToCart(id){
    var getId = document.getElementById(id).getAttribute("id");
    if(getId == "male_shirt1" || getId == "male_shirt2" || getId == "male_shirt3" || getId == "regata_masc1"){
        var savedCart = localStorage.getItem("cart_value")
        var savedItems = localStorage.getItem("items_count");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 30);
        }
        if(savedItems == null ){
            savedItems = 0;
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 30));
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        
    }
    if( getId == "berm_masc1" || getId == "berm_masc2"){
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
    if( getId == "sunga1" || getId == "sunga2"){
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