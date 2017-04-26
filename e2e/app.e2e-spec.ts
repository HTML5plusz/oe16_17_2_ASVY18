import { SportNemethadrianPage } from './app.po';

describe('sport-nemethadrian App', () => {
  let page: SportNemethadrianPage;

  beforeEach(() => {
    page = new SportNemethadrianPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
