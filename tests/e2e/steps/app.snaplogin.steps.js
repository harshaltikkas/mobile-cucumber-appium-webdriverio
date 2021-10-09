//import { assert } from 'chai';
import { Given, When, Then } from 'cucumber';
import { context } from '../data/Context';
import snapLoginScreen from '../screenobjects/snaplogin.screen';
import * as appMessages from '../utilities/appMessages.constant';

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
});

Then(/^app should displays '(.+)' inline error message$/, (msg) => {
    //snapLoginScreen.verifyRequiredFieldMessage(msg).should.be.true;
    // assert.equal(
    //     snapLoginScreen.errorMessage.getText().replace('×\n', ''),msg
    // );
    assert.equal(
        snapLoginScreen.verifyRequiredFieldMessage(msg),true
    );
});







When(
    /^I try to log in with credentials; email: '(.+)' and password: '(.+)'$/,
    (email, password) => {
        snapLoginScreen.login(email, password);
    },
);

Then(/^app displays a message that the credentials are invalid$/, () => {
    assert.equal(
        snapLoginScreen.errorMessage.getText().replace('×\n', ''),
        appMessages.INVALID_EMAIL_OR_PASSWORD,
    );
});

When(/^I log in with the user '(.+)'$/, (userType) => {
    const user = context.logins[userType];
    snapLoginScreen.login(user.email, user.password);
    snapLoginScreen.loginMessagemOk();
});

Then(/^app displays alert of successful login$/, () => {
    snapLoginScreen.alert.waitForIsShown(false);
});
