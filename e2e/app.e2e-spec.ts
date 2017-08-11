import { ServiceDemoPage } from './app.po';

describe('service-demo App', () => {
  let page: ServiceDemoPage;

  beforeEach(() => {
    page = new ServiceDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
