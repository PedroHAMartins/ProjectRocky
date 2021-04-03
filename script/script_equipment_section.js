window.onload = function addToCart(){}



function addToCart(id){
    var getId = document.getElementById(id).getAttribute("id");
    if(getId == "esteira1"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedEsteira1 = localStorage.getItem("stored_esteira1")
        if(savedCart == null ){
            localStorage.setItem("cart_value", 750);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 750));
        }
        if(savedItems == null ){
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        if(savedEsteira1 == null){
            localStorage.setItem("stored_esteira1", 1);
        }
        else{
            localStorage.setItem("stored_esteira1", (parseInt(savedEsteira1) + 1));
        }
    }
    if( getId == "bicicleta1"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedBicicleta1 = localStorage.getItem("stored_bicicleta1");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 600);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 600));
        }
        if(savedItems == null ){
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        if(savedBicicleta1 == null){
            localStorage.setItem("stored_bicicleta1", 1);
        }
        else{
            localStorage.setItem("stored_bicicleta1", (parseInt(savedBicicleta1) + 1));
        }
        
    }
    if( getId == "supino1"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedSupino1 = localStorage.getItem("stored_supino1");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 400);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 400));
        }
        if(savedItems == null ){
            savedItems = 0;
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        if(savedSupino1 == null){
            localStorage.setItem("stored_supino1", 1);
        }
        else{
            localStorage.setItem("stored_supino1", (parseInt(savedSupino1) + 1));
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