(function() {
  const self = this;

    ////////////////////////////////////////////
  ///        Controller Variables          ///
////////////////////////////////////////////

  self.color = $('#colorPicker').val() || '#000';
  self.erasing = false;
  self.painting = false;
  self.makeGrid = makeGrid;
  self.changeColor = changeColor;
  self.togglePainting = togglePainting;
  self.toggleErase = toggleErase;
  self.clearGrid = clearGrid;

  ////////////////////////////////////////////
 ///        Event Listeners               ///
////////////////////////////////////////////

  $('#sizePicker').submit(e => { e.preventDefault(); self.makeGrid(); });
  $('#colorPicker').change(e => { self.changeColor(e.target.value) });
  $('#pixel_canvas').on('mousedown', 'td', e => { self.togglePainting(e.target) });
  $('#pixel_canvas').on('mouseup', 'td', e => { self.togglePainting() });
  $('#eraser').click(e => { self.toggleErase(); });
  $('#clear').click(e => { self.clearGrid(); });

    ////////////////////////////////////////////
  ///         Utility Functions            ///
////////////////////////////////////////////

  function makeGrid() {
    let rowCount = $('#input_height').val();
    let colCount = $('#input_width').val();
    let row = '<tr>' + '<td>'.repeat(colCount);
    let grid = row.repeat(rowCount);

    $('#pixel_canvas').html(grid);
  }

  function changeColor(newColor) {
    self.color = newColor;
    if (self.erasing) toggleErase();
  }

  function togglePainting(pixel) {
    if (!pixel) $('td').off('mouseover');
    else {
      $(pixel).css('background-color', self.erasing ? "" : self.color);
      $('td').mouseover(e => { $(e.target).css('background-color', self.erasing ? "" : self.color) });
    }
  }

  function toggleErase() {
    self.erasing = !self.erasing;
    $('#eraser').toggleClass('btn-secondary');
    $('#eraser').toggleClass('btn-warning');
  }

  function clearGrid() {
    $('td').css('background-color', "");
    if (erasing) toggleErase();
  }
})();