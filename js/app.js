//Ask for player names

let playerOne = '';
// console.log(playerOne);

let playerTwo = '';
// console.log(playerOne);

const getPlayerInitials = () => {
    playerOne = prompt(`Enter Player One Name`);
    while (playerOne == '') {
        alert(`Please enter a name`);
        playerOne = prompt(`Enter Player One Name`);
    }
    if (playerOne != '' && playerOne.length > 1) {
        console.log(playerOne.substring(0, 1));
        // console.log(playerOne);
    }
    playerTwo = prompt(`Enter Player Two Name`);
    while (playerTwo == '') {
        alert(`Please enter a name`);
        playerTwo = prompt(`Enter Player Two Name`);
    }
    if (playerTwo != '' && playerTwo.length > 1) {
        console.log(playerTwo.substring(0, 1));
        // console.log(playerTwo);
    }


};


$(() => {
    getPlayerInitials();

    //Repurposed code from programatic DOM example

    //build a grid of four boxes
    const buildGrid = () => {
        for (let i = 1; i <= 4; i++) {
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


    //detects the mouse is near the left of the box
    $('div').click(function (e) {
        if (e.offsetX < 5) {
            $(this).css('border-left', `5px solid red`);
        }
    });



});