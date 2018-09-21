import {MainPage} from './app.po';
import {by, element} from 'protractor';

describe('Signup e2e', () => {
  let page: MainPage;

  const numberOfInputs = 6;

  beforeEach(() => {
    page = new MainPage();
  });

  it('should have the right title', () => {
    page.navigateTo();

    expect(page.getTitle()).toEqual('Start your 14 day free trial');
  });

  it('should have the right subtitle', () => {
    page.navigateTo();

    expect(page.getSubTitle()).toEqual('No credit card required');
  });

  it(`should have ${numberOfInputs} text inputs`, () => {
    page.navigateTo();
    expect(page.getInputs().count()).toBe(numberOfInputs);
  });
});
