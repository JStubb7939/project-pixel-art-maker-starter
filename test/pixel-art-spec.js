browser.waitForAngularEnabled(false);

describe('Jordan Stubblefield\'s pixel art maker', function() {
  let colorPicker = element(by.id('colorPicker'));
  let eraser = element(by.id('eraser'));
  let clearButton = element(by.id('clear'));
  let pixel = element(by.css('tr:first-child td:first-child'));

  beforeEach(() => {
    browser.get('http://localhost:1337');

    element(by.id('input_height')).clear();
    element(by.id('input_width')).clear();
    element(by.id('input_height')).sendKeys('10');
    element(by.id('input_width')).sendKeys('10');
    element(by.id('sizePicker')).submit();
  });

  it('should create a grid based on user input', function() {
    let table = element.all(by.tagName('table'));
    let rows = element.all(by.tagName('tr'));
    let cols = element.all(by.css('tr:first-child td'));
    let cells = element.all(by.tagName('td'));

    expect(table.count()).toEqual(1);
    expect(rows.count()).toEqual(10);
    expect(cols.count()).toEqual(10);
    expect(cells.count()).toEqual(100);
  });

  it('should color a pixel on click', function() {
    expect(colorPicker.getAttribute('value')).toEqual('#000000');
    expect(pixel.getCssValue('background-color')).toBe('rgba(0, 0, 0, 0)');
    pixel.click();
    expect(pixel.getCssValue('background-color')).toBe('rgba(0, 0, 0, 1)');
  });

  it('should toggle eraser button css class on click', function() {
    expect(eraser.getAttribute('class')).toEqual('btn btn-secondary');
    eraser.click();
    expect(eraser.getAttribute('class')).toEqual('btn btn-warning');
  });

  it('should erase pixel when clicked while eraser is toggled on', function() {
    pixel.click();
    eraser.click();
    pixel.click();
    expect(pixel.getCssValue('background-color')).toBe('rgba(0, 0, 0, 0)');
  });

  it('should clear all color on the canvas when the clear button is clicked', function() {
    pixel.click();
    clearButton.click();
    expect(pixel.getCssValue('background-color')).toBe('rgba(0, 0, 0, 0)');
  });
});