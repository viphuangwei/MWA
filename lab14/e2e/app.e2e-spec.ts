import { Lab12Page } from './app.po';

describe('lab12 App', function() {
  let page: Lab12Page;

  beforeEach(() => {
    page = new Lab12Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
