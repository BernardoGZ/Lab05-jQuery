//Bernardo Garcia Zermeno
//A00570682
//Laboratory #6: Shopping list, practice of jQuery basic functions

//Declare variables for managing areas
var itemInput = $("#newText");
var lista = $(".Lista");

// 'Add Item' btn functionality
$(".agregar").on("click", function(e){
    e.preventDefault();
    lista.append(`<div class="items"><li> </li></div>`);
    $(`.Lista li:last`).append(`<p> ${itemInput.val()} </p> <p><button class="check" > Check </button> <button class="delete">Delete</button></p>`);
    itemInput.val(null);
})

var textChecked = $(".check").parent().prev();

//'Check' btn functionality
// !!! Solo funciona con el item de prueba que tengo ya definido en el index.html !!!
$(".check").on("click", function(e){
    
    e.preventDefault();
    if(textChecked.hasClass("crossed")){
        textChecked.removeClass("crossed");
    }
    else{
        textChecked.addClass("crossed");
    }    
})

var textContainer = $(".delete").parents(".items");

//'Delete' btn functionality
// !!! Solo funciona con el item de prueba que tengo ya definido en el index.html !!!
$(".delete").on("click", function(){
    textContainer.remove();    
})

