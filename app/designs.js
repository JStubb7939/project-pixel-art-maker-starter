(function() {
  const self = this;

    ////////////////////////////////////////////
  ///        Controller Variables          ///
////////////////////////////////////////////

  self.color = $('#colorPicker').val() || '#000';
  self.erasing = false;
  self.makeGrid = makeGrid;
  self.changeColor = changeColor;
  self.paintCanvas = paintCanvas;
  self.stopPainting = stopPainting;
  self.toggleErase = toggleErase;
  self.clearGrid = clearGrid;

  ////////////////////////////////////////////
 ///        Event Listeners               ///
////////////////////////////////////////////

  $('#sizePicker').submit(e => { e.preventDefault(); self.makeGrid(); });
  $('#colorPicker').change(e => { self.changeColor(e.target.value) });
  $('#pixel_canvas').on('mousedown', 'td', e => { self.paintCanvas(e.target) });
  $('#pixel_canvas').on('mouseup', 'td', e => { self.stopPainting() });
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

  function paintCanvas(pixel) {
    $(pixel).css('background-color', self.erasing ? "" : self.color);
    $('td').mouseover(e => { $(e.target).css('background-color', self.erasing ? "" : self.color) });
  }

  function stopPainting() {
    $('td').off('mouseover')
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