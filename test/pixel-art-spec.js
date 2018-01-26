browser.waitForAngularEnabled(false);

describe('Jordan Stubblefield\'s pixel art maker', function() {
  it('should create a grid based on user input', function() {
    browser.get('http://localhost:1337');

    element(by.id('input_height')).clear();
    element(by.id('input_width')).clear();
    element(by.id('input_height')).sendKeys('10');
    element(by.id('input_width')).sendKeys('10');
    element(by.id('sizePicker')).submit();

    var table = element(by.tagName('table'));
    var rows = element.all(by.tagName('tr'));
    var cells = element.all(by.tagName('tr td'));

    expect(rows.count()).toEqual(10);
    expect(cells.count()).toEqual(100);
  });
});