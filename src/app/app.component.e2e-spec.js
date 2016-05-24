describe('App', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have the correct title', function () {
    expect(browser.getTitle()).toEqual("Angular 2 App | ng2-webpack");
  });

  it('should have <header>', function () {
    expect(element(by.css('my-app header')).isPresent()).toEqual(true);
  });

  it('should have <main>', function () {
    expect(element(by.css('my-app main')).isPresent()).toEqual(true);
  });

  it('should have a main title', function () {
    expect(element(by.css('main .title')).getText()).toEqual('Hello World');
  });

  it('should have <footer>', function () {
    expect(element(by.css('my-app footer')).getText()).toEqual("For a good starter pack, refer to: angular2-webpack");
  });

});