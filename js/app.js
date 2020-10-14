


$(() => {

//Repurposed code from programatic DOM example

//build a grid of four boxes
const buildGrid = () =>{
    for (let i = 1; i <= 4; i++){
        makeBox(i);

    }

};

//make a box function
const makeBox = (num) => {
    $box = $('<div>').addClass('box');
    $box.attr('id', num);
    $('.container').append($box);
};


buildGrid(); //call the code to build the grid

//when you hover 

// EventListeners

$('div').click(function(e){
    if(  e.offsetX < 5){
         $(this).css('border-left', `5px solid red`);
     }
 });



});