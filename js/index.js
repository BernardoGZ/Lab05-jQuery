//Bernardo Garcia Zermeno
//A00570682
//Laboratory #6: Shopping list, practice of jQuery basic functions

//Declare variables for managing areas
var itemInput = $("#newText");
var lista = $(".Lista");

// When having dinamic elements use the "Event Delegation" concept
// Inside the .on method, add a second paramenter, this tells the handler to listen for the specified event, 
// and when it hears it, check to see if the triggering element for that event matches the second parameter.

// 'Add Item' btn functionality
$(".agregar").on("click", function(e){
    e.preventDefault();
    lista.append(`<div class="items"><li> </li></div>`);
    $(`.Lista li:last`).append(`<p> ${itemInput.val()} </p> <p><button class="check" > Check </button> <button class="delete">Delete</button></p>`);
    itemInput.val(null);
})

//'Check' btn functionality
lista.on("click",".check", function(e){
    
    e.preventDefault();
    $(this).parent().prev().toggleClass('crossed');
    
    // Es mejor hacer uso de $(this) el cual te regresará el elemento que fue invocado en el click y a partir de ese puedes navegar hacia arriba o hacia abajo para llegar a donde desees. 
    // https://api.jquery.com/category/traversing/tree-traversal/

})

//'Delete' btn functionality
lista.on("click",".delete", function(){
    $(this).parent().parent().remove();
})