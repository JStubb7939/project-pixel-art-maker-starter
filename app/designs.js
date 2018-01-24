let color = $('#colorPicker').val() || '#000';
let erasing = false;

$('#sizePicker').submit(function(e) { makeGrid(e) });
$('#colorPicker').change(function(e) {changeColor(e.target.value) });
$('#pixel_canvas').on('mousedown', 'td', function(e) {paintCanvas(e.target) });
$('body').on('mouseup', 'td', stopPainting());// this cancels the brush when the user lets up on the mouse click

function makeGrid(e) {
  e.preventDefault();
  let rowCount = $('#input_height').val();
  let colCount = $('#input_width').val();
  let row = '<tr>' + '<td>'.repeat(colCount);
  let grid = row.repeat(rowCount);
  
  $('#pixel_canvas').html(grid);
}

function paintCanvas(pixel) {
  colorPixel(pixel)
  $('td').mouseover(colorPixel(e.target)); // this enables drag-to-brush while the user is clicking down
}

function colorPixel(pixel) {
  $(pixel).css('background-color', erasing ? "" : color);
}

function stopPainting() {
  $('td').off('mouseover');
}

function changeColor(color) {
  color = color;
  if (erasing) toggleErase();
}

function toggleErase() {
  erasing = !erasing;
  $('#eraser').toggleClass('btn-secondary');
  $('#eraser').toggleClass('btn-warning');
}

function clearGrid() {
  $('td').css('background-color', "");
  if (erasing) toggleErase();
}
