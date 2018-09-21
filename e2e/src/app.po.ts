import {browser, by, element} from 'protractor';

export class MainPage {
  public navigateTo() {
    return browser.get('/');
  }

  public getTitle() {
    return element(by.css('h2')).getText();
  }

  public getSubTitle() {
    return element(by.css('.sm-signup__sub-title')).getText();
  }

  public getInputs() {
    return element.all(by.css('.sm-input-text'));
  }
}
