$('#sizePicker').submit(function(e) {
  e.preventDefault();

  let rowCount = $('#input_height').val();
  let colCount = $('#input_width').val();
  let row = '<tr>' + '<td>'.repeat(colCount);
  let grid = row.repeat(rowCount);

  $('#pixel_canvas').html(grid);
});

$('#pixel_canvas').on('mousedown', 'td', e => {
  $(e.target).toggleClass('filled');
  $('td').mouseover(e => $(e.target).toggleClass('filled')); // this enables drag-to-brush while the user is clicking down
});

$('#pixel_canvas').on('mouseup', 'td', e => $('td').off('mouseover'));// this cancels the brush when the user lets up on the mouse click
