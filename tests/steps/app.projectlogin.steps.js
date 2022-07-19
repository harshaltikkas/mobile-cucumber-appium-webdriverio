import { assert } from 'chai';
import { Given, When, Then } from 'cucumber';
import projectLoginScreen from '../screenobjects/projectlogin.screen';

Given(/^I am on the username screen$/, () => {
    projectLoginScreen.processSkipButtonFirstTime();
    projectLoginScreen.waitForIsShown(true);
});

When(/^I click on '(.+)' button$/, (btnText) => {
    if (btnText === 'Continue') {
        projectLoginScreen.continueButtonClick();
    }
    else if (btnText === 'Sign in') {
        projectLoginScreen.signInButtonClick();
    }
    browser.pause(1000)
});

Then(/^app should displays '(.+)' inline error message$/, (msg) => {    
    assert.equal(
        projectLoginScreen.errorMessage.getText(),msg
    );    
});

When(/^I enter '(.+)' in username field$/, (uname) => {
    projectLoginScreen.enterUsername(uname)
});

When(/^I enter '(.+)' in password field$/, (pwd) => {
    projectLoginScreen.enterPassword(pwd)
});

Then(/^app should displays '(.+)' on dashboard$/, (helloUser) => {
    assert.equal(
        projectLoginScreen.dashbaordText.getText(),helloUser
    );
});

