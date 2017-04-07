import { RosterPage } from './app.po';

describe('roster App', function() {
  let page: RosterPage;

  beforeEach(() => {
    page = new RosterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
