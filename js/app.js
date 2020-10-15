//Ask for player names and take the first letter and store it in variable

let playerOneInitial = '';
let playerTwoInitial = '';
let playerOneColor = '';
let playerTwoColor = '';
let turns = 0;

const getPlayerInitials = () => {
    // playerOneInitial = prompt(`Enter Player One Name`);
    while (playerOneInitial == '') {
        alert(`Please enter player one's name`);
        playerOneInitial = prompt(`Player One Name`);
    }
    if (playerOneInitial != '' && playerOneInitial.length > 1) {
        console.log(playerOneInitial.substring(0, 1));
        // console.log(playerOneInitial);
    }
    // playerTwoInitial = prompt(`Enter Player Two Name`);
    while (playerTwoInitial == '') {
        alert(`Please enter a player two's name`);
        playerTwoInitial = prompt(`Player Two Name`);
    }
    if (playerTwoInitial != '' && playerTwoInitial.length > 1) {
        console.log(playerTwoInitial.substring(0, 1));
        // console.log(playerTwoInitial);
    }
};

// Establish a player's color
const getPlayerColor = () => {
    while (playerOneColor == '') {
        alert(`Player One: Do you want to be red or blue?`);
        playerOneColor = prompt(`Type "Red" or "Blue" to choose your color`);
    }
    if (playerOneColor == '') {
        playerOneColor = prompt(`Type "Red" or "Blue" to choose your color`);
    } else if (playerOneColor == 'Red') {
        playerTwoColor = 'Blue';
    } else {
        playerTwoColor = 'Red';
    }
};

//function to determine whose turn it is
//how many possible turns are there given the number of squares drawn

const turnTracking = () => {

};



$(() => {
    // getPlayerInitials();
    // getPlayerColor();

    //Repurposed code from programatic DOM example

    //build a grid of four boxes
    // const buildGrid = () => {
    //     for (let i = 1; i <= 4; i++) {
    //         makeBox(i);

    //     }

    // };

    // //make a box function
    // const makeBox = (num) => {
    //     $box = $('<div>').addClass('box');
    //     $box.attr('id', num);
    //     $('.container').append($box);
    // };


    // buildGrid(); //call the code to build the grid

    //when you hover 

    // EventListeners


    //detects the mouse is near the edges of the boxes

    //top left box
    $('#box_tl').click(function (event) {

                if (event.offsetX < 5) {
                    $('#box_tl').css('border-left', `10px solid red`);
                    if ($(this).hasClass('container')) {
                        $(this).css('border', `0px solid white`);
                    }
                } else if (event.offsetX > ($('#box_tl').innerWidth() - 5)){
                    $('#box_tl').css('border-right', `10px solid red`);
                    $('#box_tr').css('border-left', `0px solid red`);
                } else if (event.offsetY < 5) {
                    $('#box_tl').css('border-top', `10px solid red`);
                } else if (event.offsetY > ($('#box_tl').innerHeight() - 5) || event.offsetY > ($('#box_tl').innerHeight() + 5)) {
                    $('#box_tl').css('border-bottom', `10px solid red`);
                    $('#box_bl').css('border-top', `0px solid red`);
                    $('#box_br').css('border-top', `0px solid red`);

                }
    });

    //top right box
    $('#box_tr').click(function (event) {

        if (event.offsetX < 5) { //if I click on the left side of #box_tr
            $('#box_tr').css('border-left', `10px solid red`);//set left border property
            $('#box_tl').css('border-right', `0px solid red`);// and right border property of #box_tl
            if ($(this).hasClass('container')) { 
                $(this).css('border', `0px solid white`); //set outer container border property to white
            }
        } else if (event.offsetX > ($('#box_tr').innerWidth() - 5)){
            $('#box_tr').css('border-right', `10px solid red`);
        } else if (event.offsetY < 5) {
            $('#box_tr').css('border-top', `10px solid red`);
        } else if (event.offsetY > ($('#box_tr').innerHeight() - 5) || event.offsetY > ($('#box_tr').innerHeight() + 15)) {
            $('#box_tr').css('border-bottom', `10px solid red`);
            $('#box_bl').css('border-top', `0px solid red`);
            $('#box_br').css('border-top', `0px solid red`);

        }
});    


//bottom right box
$('#box_br').click(function (event) {

    if (event.offsetX < 5) { //if I click on the left side of #box_br
        $('#box_br').css('border-left', `10px solid red`);//set left border property
        $('#box_bl').css('border-right', `0px solid red`);// and right border property of #box_bl
        if ($(this).hasClass('container')) { 
            $(this).css('border', `0px solid white`); //set outer container border property to white
        }
    } else if (event.offsetX > ($('#box_br').innerWidth() - 5)){
        $('#box_br').css('border-right', `10px solid red`);
    } else if (event.offsetY < 5) {
        $('#box_br').css('border-top', `5px solid red`);
        $('#box_tr').css('border-bottom', `5px solid red`);
    } else if (event.offsetY > ($('#box_br').innerHeight() - 5) || event.offsetY > ($('#box_br').innerHeight() + 15)) {
        $('#box_br').css('border-bottom', `10px solid red`);

    }
});  








    // $('#box_tr').click(function (event) {
        
    //     if (event.offsetX < 50) {
    //         $(this).css('border-right', `10px solid red`);
    //         if ($(this).hasClass('container')) {
    //             $(this).css('border', `0px solid white`);
    //         }
    //         console.log($(this));
    //     }

    // })

        
                
                // } else if (event.offsetY < 5) {
                //     $('#box_tr').css('border-top', `10px solid red`);
                //     if ($(this).hasClass('container')) {
                //         $(this).css('border', `0px solid white`);
                //     }
                // }  
                
                // if (event.offsetX > ($('#box_tl').innerwidth()-5) || event.offsetX < ($('#box_tl').innerwidth()+10 )){
                //     $('#box_tl').css('border-right', `10px solid red`);
                // }

        // if (event.offsetX > $(this).innerwidth()) {
        //     $(this).css('border-right', `10px solid red`);
        //     if ($(this).hasClass('container')) {
        //         $(this).css('border', `0px solid white`);
        //     }
        // } if (event.offsetY < 5){
        //     $(this).css('border-top', `10px solid red`);
        //     if ($(this).hasClass('container')) {
        //         $(this).css('border', `0px solid white`);
        //     }
            
        // }

       
    
    // another conditional to ignore the container 


    //if pla



});