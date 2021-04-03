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
    if(getId == "female_shirt1"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedFemaleS1 = localStorage.getItem("stored_females1");
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
        if(savedFemaleS1 == null){
            localStorage.setItem("stored_females1", 1);
        }
        else{
            localStorage.setItem("stored_females1", (parseInt(savedFemaleS1) + 1));
        }
        
    }
    if(getId == "female_shirt2"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedFemaleS2 = localStorage.getItem("stored_females2");
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
        if(savedFemaleS2 == null){
            localStorage.setItem("stored_females2", 1);
        }
        else{
            localStorage.setItem("stored_females2", (parseInt(savedFemaleS2) + 1));
        }
        
    }
    if(getId == "female_shirt3"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedFemaleS3 = localStorage.getItem("stored_females3");
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
        if(savedFemaleS3 == null){
            localStorage.setItem("stored_females3", 1);
        }
        else{
            localStorage.setItem("stored_females3", (parseInt(savedFemaleS3) + 1));
        }
        
    }
    if( getId == "anilha1"){
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
    if( getId == "esteira1"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedEsteira1 = localStorage.getItem("stored_esteira1");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 750);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 750));
        }
        if(savedItems == null ){
            savedItems = 0;
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
    if( getId == "sapatilha1"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedSapatilha1 = localStorage.getItem("stored_sapatilha1");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 250);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 250));
        }
        if(savedItems == null ){
            savedItems = 0;
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        if(savedSapatilha1 == null){
            localStorage.setItem("stored_sapatilha1", 1);
        }
        else{
            localStorage.setItem("stored_sapatilha1", (parseInt(savedSapatilha1) + 1));
        }
        
    }
    if( getId == "bermuda_inf1"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedBermInf1 = localStorage.getItem("stored_berminf1");
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
        if(savedBermInf1 == null){
            localStorage.setItem("stored_berminf1", 1);
        }
        else{
            localStorage.setItem("stored_berminf1", (parseInt(savedBermInf1) + 1));
        }
        
    }
    if( getId == "chuteira_inf1"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedChutInf1 = localStorage.getItem("stored_chutinf1");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 150);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 150));
        }
        if(savedItems == null ){
            savedItems = 0;
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        if(savedChutInf1 == null){
            localStorage.setItem("stored_chutinf1", 1);
        }
        else{
            localStorage.setItem("stored_chutinf1", (parseInt(savedChutInf1) + 1));
        }
        
    }
    if( getId == "bola_basquete1"){
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