window.onload = function addToCart(){}



function addToCart(id){
    var getId = document.getElementById(id).getAttribute("id");
    if(getId == "bola_basquete1"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedBallBasquete1 = localStorage.getItem("stored_ballbasquete1");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 90);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 90));
        }
        if(savedItems == null ){
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        if(savedBallBasquete1 == null){
            localStorage.setItem("stored_ballbasquete1", 1);
        }
        else{
            localStorage.setItem("stored_ballbasquete1", (parseInt(savedBallBasquete1) + 1));  
        }
        
    }
    if( getId == "bola_volei1"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedBallVolei1 = localStorage.getItem("stored_ballvolei1");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 90);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 90));
        }
        if(savedItems == null ){
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        if(savedBallVolei1 == null){
            localStorage.setItem("stored_ballvolei1", 1);
        }
        else{
            localStorage.setItem("stored_ballvolei1", (parseInt(savedBallVolei1) + 1));
        }
        
    }
    if( getId == "bola_tenis1"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedBallTenis1 = localStorage.getItem("stored_balltenis1");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 10);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 10));
        }
        if(savedItems == null ){
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        if(savedBallTenis1 == null){
            localStorage.setItem("stored_balltenis1", 1);
        }
        else{
            localStorage.setItem("stored_balltenis1", (parseInt(savedBallTenis1) + 1));
        }
        
    }
    if( getId == "bola_futebol1"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedBallFutebol1 = localStorage.getItem("stored_ballfutebol1");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 90);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 90));
        }
        if(savedItems == null ){
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        if(savedBallFutebol1 == null){
            localStorage.setItem("stored_ballfutebol1", 1);
        }
        else{
            localStorage.setItem("stored_ballfutebol1", (parseInt(savedBallFutebol1) + 1));
        }
        
    }
    if( getId == "bola_futebolamericano1"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedBallFutAm1 = localStorage.getItem("stored_ballfutam1");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 110);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 110));
        }
        if(savedItems == null ){
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        if(savedBallFutAm1 == null){
            localStorage.setItem("stored_ballfutam1", 1);
        }
        else{
            localStorage.setItem("stored_ballfutam1", (parseInt(savedBallFutAm1) + 1));
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