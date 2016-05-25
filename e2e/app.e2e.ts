import { Ng2cartPage } from './app.po';

describe('ng2cart App', function() {
  let page: Ng2cartPage;

  beforeEach(() => {
    page = new Ng2cartPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2cart works!');
  });
});
