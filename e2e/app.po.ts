export class Ng2cartPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2cart-app h1')).getText();
  }
}
