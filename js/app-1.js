


$(() => {

// const $canvas = $('#game_canvas'); //select the div with id = "game_canvas"
// const $context = $canvas.getContext('2d');

const $canvas = document.getElementById('game_canvas');
const $context = $canvas.getContext('2d');


// top line
$context.beginPath();
$context.strokeStyle = 'black';
$context.moveTo(50,50);
$context.lineTo(100, 50);
$context.stroke();

// upper left corner circle
$context.beginPath();
$context.arc(50,50,3,0,360,false);
$context.strokeStyle = 'black';
$context.fillStyle = 'black';
$context.stroke();
$context.fill();


// right line
$context.beginPath();
$context.strokeStyle = 'black';
$context.moveTo(100,50);
$context.lineTo(100, 100);
$context.stroke();

// upper right corner circle
$context.beginPath();
$context.arc(100,50,3,0,360,false);
$context.strokeStyle = 'black';
$context.fillStyle = 'black';
$context.stroke();
$context.fill();


// bottom line
$context.beginPath();
$context.strokeStyle = 'black';
$context.moveTo(100,100);
$context.lineTo(50, 100);
$context.stroke();

// bottom right corner circle
$context.beginPath();
$context.arc(100,100,3,0,360,false);
$context.strokeStyle = 'black';
$context.fillStyle = 'black';
$context.stroke();
$context.fill();

// left line
$context.beginPath();
$context.strokeStyle = 'black';
$context.moveTo(50,100);
$context.lineTo(50, 50);
$context.stroke();

// upper right corner circle
$context.beginPath();
$context.arc(50,100,3,0,360,false);
$context.strokeStyle = 'black';
$context.fillStyle = 'black';
$context.stroke();
$context.fill();

// EventListeners





});