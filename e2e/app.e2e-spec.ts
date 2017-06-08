import { ExciseFePage } from './app.po';

describe('excise-fe App', () => {
  let page: ExciseFePage;

  beforeEach(() => {
    page = new ExciseFePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
