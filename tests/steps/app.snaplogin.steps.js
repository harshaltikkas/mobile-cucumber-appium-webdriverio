import { assert } from 'chai';
import { Given, When, Then } from 'cucumber';
import snapLoginScreen from '../screenobjects/snaplogin.screen';

Given(/^I am on the username screen$/, () => {
    snapLoginScreen.processSkipButtonFirstTime();
    snapLoginScreen.waitForIsShown(true);
});

When(/^I click on '(.+)' button$/, (btnText) => {
    if (btnText === 'Continue') {
        snapLoginScreen.continueButtonClick();
    }
    else if (btnText === 'Sign in') {
        snapLoginScreen.signInButtonClick();
    }
    browser.pause(1000)
});

Then(/^app should displays '(.+)' inline error message$/, (msg) => {    
    assert.equal(
        snapLoginScreen.errorMessage.getText(),msg
    );    
});

When(/^I enter '(.+)' in username field$/, (uname) => {
    snapLoginScreen.enterUsername(uname)
});

When(/^I enter '(.+)' in password field$/, (pwd) => {
    snapLoginScreen.enterPassword(pwd)
});

Then(/^app should displays '(.+)' on dashboard$/, (helloUser) => {
    assert.equal(
        snapLoginScreen.dashbaordText.getText(),helloUser
    );
});

