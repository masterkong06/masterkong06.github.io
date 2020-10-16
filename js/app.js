//Ask for player names and take the first letter and store it in variable

let playerOneInitial = '';
let playerTwoInitial = '';
let playerColor = 'red';
// let playerTwoColor = 'blue';
let turns = 0;
let currentPlayer = 1;

const getPlayerOneInitials = () => {
    // playerOneInitial = prompt(`Enter Player One Name`);
    while (playerOneInitial == '') {
        alert(`Please enter player one's name`);
        playerOneInitial = prompt(`Player One Name`);
    }
    if (playerOneInitial != '' && playerOneInitial.length > 1) {
       let initial = playerOneInitial.substring(0, 1);
        // console.log(playerOneInitial);
        return initial;
    }
};

const getPlayerTwoInitials = () => {
    // playerTwoInitial = prompt(`Enter Player Two Name`);
    while (playerTwoInitial == '') {
        alert(`Please enter a player two's name`);
        playerTwoInitial = prompt(`Player Two Name`);
    }
    if (playerTwoInitial != '' && playerTwoInitial.length > 1) {
        let initial = playerTwoInitial.substring(0, 1);
        // console.log(playerTwoInitial);
        return initial;
    }
    
};

// Establish a player's color
// const getPlayerColor = () => {
//     if (playerOneColor == '' ) {
//         alert(`Player One: Do you want to be red or blue?`);
//         playerOneColor = prompt(`Type "Red" or "Blue" to choose your color`);
//         console.log(playerOneColor);
//     console.log(playerTwoColor);
//     }else if (playerOneColor == 'Red') {
//         playerTwoColor = 'Blue';
//         console.log(playerOneColor);
//     console.log(playerTwoColor);
//     } else if (playerOneColor == 'Blue') {
//         playerTwoColor = 'Red';
//         console.log(playerOneColor);
//     console.log(playerTwoColor);
//     } else {
//         while (playerOneColor != 'Blue' || playerOneColor != 'Red'){
//             alert(`Player One: Do you want to be red or blue?`);
//         playerOneColor = prompt(`Type "Red" or "Blue" to choose your color`);
//         console.log(playerOneColor);
//     console.log(playerTwoColor);
//         }
//         console.log(playerOneColor);
//     console.log(playerTwoColor);
//     }
    
//     //else if (playerOneColor != 'Blue' || playerOneColor != 'Red') {
//     //         playerOneColor = prompt(`Type "Red" or "Blue" to choose your color`);
//     //     }
    
//     // if (playerOneColor == '') {
//     //     playerOneColor = prompt(`Type "Red" or "Blue" to choose your color`);
//     // } else if (playerOneColor == 'Red') {
//     //     playerTwoColor = 'Blue';
//     // } else {
//     //     playerTwoColor = 'Red';
//     // }
//     console.log(playerOneColor);
//     console.log(playerTwoColor);
// };

//function to determine whose turn it is
//how many possible turns are there given the number of squares drawn

// const turnTracking = () => {
//     let turnNum = 12;
//     for (i = 1; i <= turnNum; i++) {
//         console.log(`Turns left ${i}`);
//     }

// };

// End of game occurs if turnTracking() returns 12 and no player has more than 3 boxes or turnTracking() returns 12 and either player has 3 or more boxes or turnTracking() returns less than 12 and either player has 3 or more boxes

const playerSwitch = () => {
    if (currentPlayer%2 === 0){
   currentPlayer++; 
        playerColor = 'red'; //player 1 css for lines
    } else {
        currentPlayer++;
        playerColor = 'blue'; //player 2 css for lines
    }
};

const playerWins = () => {

    // if child of this box_tl has 4 classes eq() has class set then win triggered. If true currentPlayer--;
};

// test if player won a box

const wonABox = () => {
    const boxClass = $('.box');
    boxClass.each(boxClass => {

        //player 1 wins a box
        if ($('#box_tl').hasClass('box l_border t_border r_border b_border') && currentPlayer%2 ===0){
            $('#box_tl').html(`<p>${playerOneInitial}</p>`);
        } else if($('#box_tr').hasClass('box l_border t_border r_border b_border') && currentPlayer%2 ===0){
            $('#box_tr').html(`<p>${playerOneInitial}</p>`);
        } else if($('#box_br').hasClass('box l_border t_border r_border b_border') && currentPlayer%2 ===0){
        $('#box_tr').html(`<p>${playerOneInitial}</p>`);
        }else if($('#box_bl').hasClass('box l_border t_border r_border b_border') && currentPlayer%2 ===0){
            $('#box_bl').html(`<p>${playerOneInitial}</p>`);
        currentPlayer--;
        }

        // player 2 wins a box
        else if ($('#box_tl').hasClass('box l_border t_border r_border b_border') && currentPlayer%2 !==0){
            $('#box_tl').html(`<p>${playerTwoInitial}</p>`);
        } else if($('#box_tr').hasClass('box l_border t_border r_border b_border') && currentPlayer%2 !==0){
            $('#box_tr').html(`<p>${playerTwoInitial}</p>`);
        } else if($('#box_br').hasClass('box l_border t_border r_border b_border') && currentPlayer%2 !==0){
        $('#box_tr').html(`<p>${playerTwoInitial}</p>`);
        }else if($('#box_bl').hasClass('box l_border t_border r_border b_border') && currentPlayer%2 !==0){
            $('#box_bl').html(`<p>${playerTwoInitial}</p>`);
        currentPlayer--;
        }

        // game is a tie
        // else if ($('#box_tl').hasClass('box l_border t_border r_border b_border')){
        //     $('#box_tl').html(`<p>${playerTwoInitial}</p>`);
        //     currentPlayer--;
        // } else if($('#box_tr').hasClass('box l_border t_border r_border b_border')){
        //     $('#box_tr').html(`<p>${playerTwoInitial}</p>`);
        //     currentPlayer --;
        // } else if($('#box_br').hasClass('box l_border t_border r_border b_border')){
        // $('#box_tr').html(`<p>${playerTwoInitial}</p>`);
        // currentPlayer--;
        // }else if($('#box_bl').hasClass('box l_border t_border r_border b_border')){
        //     $('#box_bl').html(`<p>${playerTwoInitial}</p>`);
        // currentPlayer--;
        // }


        
    });
    
   
};






$(() => {
    getPlayerOneInitials();
    getPlayerTwoInitials();


    $('h1').html(`Cornered: A Lines and Dots Game`);
    console.log(playerOneInitial,playerTwoInitial);
    // getPlayerColor();
    // turnTracking();
    // console.log(playerOneColor, playerTwoColor);

    

    // add elements to the DOM

    
    


    // EventListeners




    //detects the mouse is near the edges of the boxes

    //top left box
    $('#box_tl').click(function (event) {

        if (event.offsetX < 5) {
            $('#box_tl').css('border-left', `10px solid ${playerColor}`);
            $('#box_tl').addClass('l_border');
            playerSwitch();
            console.log(currentPlayer);
            console.log(playerColor);
            if ($(this).hasClass('container')) {
                $(this).css('border', `0px solid white`);
            }
        } else if (event.offsetX > ($('#box_tl').innerWidth() - 5)) {
            $('#box_tl').css('border-right', `10px solid ${playerColor}`);
            $('#box_tr').css('border-left', `0px solid ${playerColor}`);
            $('#box_tl').addClass('r_border');
            playerSwitch();
            console.log(currentPlayer);
            console.log(playerColor);
        } else if (event.offsetY < 5) {
            $('#box_tl').css('border-top', `10px solid ${playerColor}`);
            $('#box_tl').addClass('t_border');
            playerSwitch();
            console.log(currentPlayer);
            console.log(playerColor);
        } else if (event.offsetY > ($('#box_tl').innerHeight() - 5) || event.offsetY > ($('#box_tl').innerHeight() + 5)) {
            $('#box_tl').css('border-bottom', `5px solid ${playerColor}`);
            $('#box_bl').css('border-top', `5px solid ${playerColor}`);
            $('#box_tl').addClass('b_border');
            playerSwitch();
            console.log(currentPlayer);
            console.log(playerColor);

        }
        console.log($(this));
        wonABox();
        console.log(currentPlayer);
    });

    //top right box
    $('#box_tr').click(function (event) {

        if (event.offsetX < 5) { //if I click on the left side of #box_tr
            $('#box_tr').css('border-left', `10px solid ${playerColor}`); //set left border property
            $('#box_tl').css('border-right', `0px solid ${playerColor}`); // and right border property of #box_tl
            $('#box_tr').addClass('l_border');
            playerSwitch();
            console.log(currentPlayer);
            console.log(playerColor);
            if ($(this).hasClass('container')) {
                $(this).css('border', `0px solid white`); //set outer container border property to white
            }
        } else if (event.offsetX > ($('#box_tr').innerWidth() - 5)) {
            $('#box_tr').css('border-right', `10px solid ${playerColor}`);
            $('#box_tr').addClass('r_border');
            playerSwitch();
            console.log(currentPlayer);
            console.log(playerColor);
        } else if (event.offsetY < 5) {
            $('#box_tr').css('border-top', `10px solid ${playerColor}`);
            $('#box_tr').addClass('t_border');
            playerSwitch();
            console.log(currentPlayer);
            console.log(playerColor);
        } else if (event.offsetY > ($('#box_tr').innerHeight() - 5) || event.offsetY > ($('#box_tr').innerHeight() + 15)) {
            $('#box_tr').css('border-bottom', `5px solid ${playerColor}`);
            $('#box_br').css('border-top', `5px solid ${playerColor}`);
            $('#box_tr').addClass('b_border');
            playerSwitch();
            console.log(currentPlayer);
            console.log(playerColor);

        }
        console.log($(this));
        wonABox();
        console.log(currentPlayer);
    });


    //bottom right box
    $('#box_br').click(function (event) {

        if (event.offsetX < 5) { //if I click on the left side of #box_br
            $('#box_br').css('border-left', `10px solid ${playerColor}`); //set left border property
            $('#box_bl').css('border-right', `0px solid ${playerColor}`); // and right border property of #box_bl
            $('#box_br').addClass('l_border');
            playerSwitch();
            console.log(currentPlayer);
            console.log(playerColor);
            if ($(this).hasClass('container')) {
                $(this).css('border', `0px solid white`); //set outer container border property to white
            }
        } else if (event.offsetX > ($('#box_br').innerWidth() - 5)) {
            $('#box_br').css('border-right', `10px solid ${playerColor}`);
            $('#box_br').addClass('r_border');
            playerSwitch();
            console.log(currentPlayer);
            console.log(playerColor);
        } else if (event.offsetY < 5) {
            $('#box_br').css('border-top', `5px solid ${playerColor}`);
            $('#box_tr').css('border-bottom', `5px solid ${playerColor}`);
            $('#box_br').addClass('t_border');
            playerSwitch();
            console.log(currentPlayer);
            console.log(playerColor);
        } else if (event.offsetY > ($('#box_br').innerHeight() - 5) || event.offsetY > ($('#box_br').innerHeight() + 15)) {
            $('#box_br').css('border-bottom', `10px solid ${playerColor}`);
            $('#box_br').addClass('b_border');
            playerSwitch();
            console.log(currentPlayer);
            console.log(playerColor);

        }
        console.log($(this));
        wonABox();
        console.log(currentPlayer);
    });

    //bottom left box
    $('#box_bl').click(function (event) {

        if (event.offsetX < 5) { //if I click on the left side of #box_br
            $('#box_bl').css('border-left', `10px solid ${playerColor}`); //set left border property
            $('#box_bl').addClass('l_border');
            playerSwitch();
            console.log(currentPlayer);
            console.log(playerColor);
            if ($(this).hasClass('container')) {
                $(this).css('border', `0px solid white`); //set outer container border property to white
            }
        } else if (event.offsetX > ($('#box_bl').innerWidth() - 5)) {
            $('#box_bl').css('border-right', `10px solid ${playerColor}`);
            $('#box_br').css('border-left', `0px solid ${playerColor}`);
            $('#box_bl').addClass('r_border');
            playerSwitch();
            console.log(currentPlayer);
            console.log(playerColor);
        } else if (event.offsetY < 5) {
            $('#box_bl').css('border-top', `5px solid ${playerColor}`);
            $('#box_tl').css('border-bottom', `5px solid ${playerColor}`);
            $('#box_bl').addClass('t_border');
            playerSwitch();
            console.log(currentPlayer);
            console.log(playerColor);
        } else if (event.offsetY > ($('#box_bl').innerHeight() - 5) || event.offsetY > ($('#box_bl').innerHeight() + 15)) {
            $('#box_bl').css('border-bottom', `10px solid ${playerColor}`);
            $('#box_bl').addClass('b_border');
            playerSwitch();
            console.log(currentPlayer);
            console.log(playerColor);

        }
        console.log($(this));
        wonABox();
        console.log(currentPlayer);
    });


    //




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