import { MidtermPage } from './app.po';

describe('midterm App', function() {
  let page: MidtermPage;

  beforeEach(() => {
    page = new MidtermPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
