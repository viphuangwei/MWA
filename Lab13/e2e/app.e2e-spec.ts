import { Lab13Page } from './app.po';

describe('lab13 App', function() {
  let page: Lab13Page;

  beforeEach(() => {
    page = new Lab13Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
