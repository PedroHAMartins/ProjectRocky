window.onload = function addToCart(){}



function addToCart(id){
    var getId = document.getElementById(id).getAttribute("id");
    if(getId == "anilha1"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedAnilha1 = localStorage.getItem("stored_anilha1");
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
        if(savedAnilha1 == null){
            localStorage.setItem("stored_anilha1", 1);
        }
        else{
            localStorage.setItem("stored_anilha1", (parseInt(savedAnilha1) + 1));
        }
        
    }
    if( getId == "anilha2"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedAnilha2 = localStorage.getItem("stored_anilha2");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 45);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 45));
        }
        if(savedItems == null ){
            savedItems = 0;
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        if(savedAnilha2 == null){
            localStorage.setItem("stored_anilha2", 1);
        }
        else{
            localStorage.setItem("stored_anilha2", (parseInt(savedAnilha2) + 1));
        }
        
    }
    if( getId == "anilha3"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedAnilha3 = localStorage.getItem("stored_anilha3");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 10);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 10));
        }
        if(savedItems == null ){
            savedItems = 0;
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        if(savedAnilha3 == null){
            localStorage.setItem("stored_anilha3", 1);
        }
        else{
            localStorage.setItem("stored_anilha3", (parseInt(savedAnilha3) + 1));
        }
        
    }
    if( getId == "colchonete1"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedColchonete1 = localStorage.getItem("stored_colchonete1");
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
        if(savedColchonete1 == null){
            localStorage.setItem("stored_colchonete1", 1);
        }
        else{
            localStorage.setItem("stored_colchonete1", (parseInt(savedColchonete1) + 1));
        }
        
    }
    if( getId == "dumbells1"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedDumbells1 = localStorage.getItem("stored_dumbells1");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 350);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 350));
        }
        if(savedItems == null ){
            savedItems = 0;
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        if(savedDumbells1 == null){
            localStorage.setItem("stored_dumbells1", 1);
        }
        else{
            localStorage.setItem("stored_dumbells1", (parseInt(savedDumbells1) + 1));
        }
        
    }
    if( getId == "elastico1"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedElastico1 = localStorage.getItem("stored_elastico1");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 10);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 10));
        }
        if(savedItems == null ){
            savedItems = 0;
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        if(savedElastico1 == null){
            localStorage.setItem("stored_elastico1", 1);
        }
        else{
            localStorage.setItem("stored_elastico1", (parseInt(savedElastico1) + 1));
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