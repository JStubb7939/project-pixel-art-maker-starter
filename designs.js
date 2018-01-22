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
  $('td').mouseover(e => $(e.target).toggleClass('filled'));
});

$('#pixel_canvas').on('mouseup', 'td', e => $('td').off('mouseover'));
