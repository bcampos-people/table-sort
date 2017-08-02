import { TableSortPage } from './app.po';

describe('table-sort App', () => {
  let page: TableSortPage;

  beforeEach(() => {
    page = new TableSortPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
