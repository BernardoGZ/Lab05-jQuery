//Bernardo Garcia Zermeno
//A00570682
//Laboratory #6: Shopping list, practice of jQuery basic functions

//Declare variables for managing areas
var itemInput = $("#newText");
var lista = $(".Lista");

// 'Add Item' btn functionality
$(".agregar").on("click", function(e){
    e.preventDefault();
    lista.append(`<div><li class="items"> </li></div>`);
    $(`.Lista li:last`).append(`<p> ${itemInput.val()} </p> <p><button class="check" > Check </button> <button class="delete">Delete</button></p>`);
})

//'Check' btn functionality
$(".check").on("click", function(e){
   e.preventDefault();
    alert("good");
})

// //'Delete' btn functionality
// $(".agregar").on("click", function(){
//     alert("good");
// })

