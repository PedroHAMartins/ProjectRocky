window.onload = function addToCart(){}



function addToCart(id){
    var getId = document.getElementById(id).getAttribute("id");
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
        if(savedFemaleS1 == null ){
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
        if(savedFemaleS2 == null ){
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
        if(savedFemaleS3 == null ){
            localStorage.setItem("stored_females3", 1);
        }
        else{
            localStorage.setItem("stored_females3", (parseInt(savedFemaleS3) + 1));
        }
        
    }
    if(getId == "top1"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedTop1 = localStorage.getItem("stored_top1");
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
        if(savedTop1 == null ){
            localStorage.setItem("stored_top1", 1);
        }
        else{
            localStorage.setItem("stored_top1", (parseInt(savedTop1) + 1));
        }
        
    }
    if(getId == "top2"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedTop2 = localStorage.getItem("stored_top2");
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
        if(savedTop2 == null ){
            localStorage.setItem("stored_top2", 1);
        }
        else{
            localStorage.setItem("stored_top2", (parseInt(savedTop2) + 1));
        }
        
    }
    if( getId == "berm_fem1"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedFemaleB1 = localStorage.getItem("stored_femaleb1");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 25);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 25));
        }
        if(savedItems == null ){
            savedItems = 0;
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        if(savedFemaleB1 == null ){
            localStorage.setItem("stored_femaleb1", 1);
        }
        else{
            localStorage.setItem("stored_femaleb1", (parseInt(savedFemaleB1) + 1));
        }
        
    }
    if( getId == "berm_fem2"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedFemaleB2 = localStorage.getItem("stored_femaleb2");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 25);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 25));
        }
        if(savedItems == null ){
            savedItems = 0;
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        if(savedFemaleB2 == null ){
            localStorage.setItem("stored_femaleb2", 1);
        }
        else{
            localStorage.setItem("stored_femaleb2", (parseInt(savedFemaleB2) + 1));
        }
        
    }
    if( getId == "biquini1"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedBiquini1 = localStorage.getItem("stored_biquini1");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 40);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 40));
        }
        if(savedItems == null ){
            savedItems = 0;
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        if(savedBiquini1 == null ){
            localStorage.setItem("stored_biquini1", 1);
        }
        else{
            localStorage.setItem("stored_biquini1", (parseInt(savedBiquini1) + 1));
        }
        
    }
    if( getId == "biquini2"){
        var savedCart = localStorage.getItem("cart_value");
        var savedItems = localStorage.getItem("items_count");
        var savedBiquini2 = localStorage.getItem("stored_biquini2");
        if(savedCart == null ){
            localStorage.setItem("cart_value", 40);
        }
        else{
            localStorage.setItem("cart_value", (parseInt(savedCart) + 40));
        }
        if(savedItems == null ){
            savedItems = 0;
            localStorage.setItem("items_count", 1);
        }
        else{
            localStorage.setItem("items_count", (parseInt(savedItems) + 1));
        }
        if(savedBiquini2 == null ){
            localStorage.setItem("stored_biquini2", 1);
        }
        else{
            localStorage.setItem("stored_biquini2", (parseInt(savedBiquini2) + 1));
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