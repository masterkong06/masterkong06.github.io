//Ask for player names and take the first letter and store it in variable

let playerOneInitial = '';
let playerTwoInitial = '';
let playerOneColor = '';
let playerTwoColor = '';




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

const getPlayerColor = () =>{
    while (playerOneColor == ''){
        alert(`Player One: Do you want to be red or blue?`);
        playerOneColor = prompt(`Type "Red" or "Blue" to choose your color`);
    } if(playerOneColor == ''){
        playerOneColor = prompt(`Type "Red" or "Blue" to choose your color`);
    } else if(playerOneColor == 'Red'){
        playerTwoColor = 'Blue';
    } else {
        playerTwoColor = 'Red';
    }
};


$(() => {
    getPlayerInitials();
    console.log(playerOneInitial);
    getPlayerColor();
    console.log(playerOneColor);
    console.log(playerTwoColor);

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