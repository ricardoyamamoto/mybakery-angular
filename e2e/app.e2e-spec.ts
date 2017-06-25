import { MyBakeryPage } from './app.po';

describe('my-bakery App', () => {
  let page: MyBakeryPage;

  beforeEach(() => {
    page = new MyBakeryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
