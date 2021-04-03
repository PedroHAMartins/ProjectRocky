window.onload = function addToCart(){}



function addToCart(id){
    var getId = document.getElementById(id).getAttribute("id");
    if(getId == "male_shirt1"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedMaleS1 = localStorage.getItem("male_shirt1");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 30);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 30));
        }
        if(savedItems == null ){
            savedItems = 0;
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        if(savedMaleS1 == null){
            localStorage.setItem("male_shirt1", 1);
        }
        else{
            localStorage.setItem("male_shirt1", (parseInt(savedMaleS1) + 1));
        }
        
    }
    if(getId == "male_shirt2"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedMaleS2 = localStorage.getItem("stored_males2");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 30);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 30));
        }
        if(savedItems == null ){
            savedItems = 0;
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        if(savedMaleS2 == null){
            localStorage.setItem("stored_males2", 1);
        }
        else{
            localStorage.setItem("stored_males2", (parseInt(savedMaleS2) + 1));
        }
        
    }
    if(getId == "male_shirt3"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedMaleS3 = localStorage.getItem("stored_males3");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 30);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 30));
        }
        if(savedItems == null ){
            savedItems = 0;
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        if(savedMaleS3 == null){
            localStorage.setItem("stored_males3", 1);
        }
        else{
            localStorage.setItem("stored_males3", (parseInt(savedMaleS3) + 1));
        }
        
    }
    if( getId == "berm_masc1"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedMaleB1 = localStorage.getItem("stored_maleb1");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 25);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 25));
        }
        if(savedItems == null ){
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        if(savedMaleB1 == null){
            localStorage.setItem("stored_maleb1", 1);
        }
        else{
            localStorage.setItem("stored_maleb1", (parseInt(savedMaleB1) + 1));  
        }
        
    }
    if(getId == "berm_masc2"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedMaleB2 = localStorage.getItem("stored_maleb2");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 25);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 25));
        }
        if(savedItems == null ){
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        if(savedMaleB2 == null){
            localStorage.setItem("stored_maleb2", 1);
        }
        else{
            localStorage.setItem("stored_maleb2", (parseInt(savedMaleB2) + 1));  
        }
        
    }
    if( getId == "sunga1"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedSunga1 = localStorage.getItem("stored_sunga1");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 20);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 20));
        }
        if(savedItems == null ){
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        if(savedSunga1 == null){
            localStorage.setItem("stored_sunga1", 1);
        }
        else{
            localStorage.setItem("stored_sunga1", (parseInt(savedSunga1) + 1));  
        }
        
    }
    if(getId == "sunga2"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedSunga2 = localStorage.getItem("stored_sunga2");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 20);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 20));
        }
        if(savedItems == null ){
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        if(savedSunga2 == null){
            localStorage.setItem("stored_sunga2", 1);
        }
        else{
            localStorage.setItem("stored_sunga2", (parseInt(savedSunga2) + 1));  
        }
        
    }
    if(getId == "regata_masc1"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedRegataMasc1 = localStorage.getItem("stored_regatamasc1");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 30);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 30));
        }
        if(savedItems == null ){
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        if(savedRegataMasc1 == null){
            localStorage.setItem("stored_regatamasc1", 1);
        }
        else{
            localStorage.setItem("stored_regatamasc1", (parseInt(savedRegataMasc1) + 1));  
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