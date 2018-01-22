$('#sizePicker').submit(function(e) {
  e.preventDefault();

  let rowCount = $('#input_height').val();
  let colCount = $('#input_width').val();
  let row = '<tr>' + '<td>'.repeat(colCount);
  let grid = row.repeat(rowCount);

  $('#pixel_canvas').html(grid);
});

let color = $('#colorPicker').val() || '#000';
$('#colorPicker').change(() = e => changeColor(e.target.value));

let erasing = false;

$('#pixel_canvas').on('mousedown', 'td',(() =  e => paintCanvas(e.target));
$('#pixel_canvas').on('mouseup', 'td', (() = e => $('td').off('mouseover'));// this cancels the brush when the user lets up on the mouse click

function paintCanvas(pixel) {
  $(pixel).css('background-color', erasing ? "" : color);
  $('td').mouseover((() = e => $(e.target).css('background-color', erasing ? "" : color)); // this enables drag-to-brush while the user is clicking down
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
