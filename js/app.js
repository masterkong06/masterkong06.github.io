


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

// right line
$context.beginPath();
$context.strokeStyle = 'black';
$context.moveTo(100,50);
$context.lineTo(100, 100);
$context.stroke();

// bottom line
$context.beginPath();
$context.strokeStyle = 'black';
$context.moveTo(100,100);
$context.lineTo(50, 100);
$context.stroke();

// left line
$context.beginPath();
$context.strokeStyle = 'black';
$context.moveTo(50,100);
$context.lineTo(50, 50);
$context.stroke();

});