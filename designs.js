// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function(e) {
  e.preventDefault();

  let rowCount = $('#input_height').val();
  let colCount = $('#input_width').val();
  let row = '<tr>' + '<td>'.repeat(colCount);
  let grid = row.repeat(rowCount);

  $('#pixel_canvas').html(grid);
});

$('#pixel_canvas').on('click', 'td', e => $(e.target).toggleClass('filled'));
