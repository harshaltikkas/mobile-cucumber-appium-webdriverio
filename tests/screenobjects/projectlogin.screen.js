import AppScreen from './app.screen';
import NativeAlert from '../helpers/NativeAlert';

const SELECTORS = {

    WELCOME_LABEL: '~welcome-label',
    USERNAME_INPUT: '~username-input',
    CONTINUE_BUTTON: '~login-continue-test-key',
    WELCOME_BACK_LABEL: '~welcome-back-label',
    USERNAME_LABEL: '~username-label',
    PASSWORD_INPUT: '~password-input',
    SIGN_IN_BUTTON: '~sign-in-button',
    FORGOT_PASSWORD_LABEL: '~forgot-password-label',
    RESET_PASSWORD_HEADING: '~reset-password-heading',
    RESET_PASSWORD_LABEL: '~reset-password-label',
    EMAIL_INPUT: '~email-input',
    RESET_PASSWORD_BUTTON: '~reset-password-button',
    DASHBOARD_TEXT:'~dashboard-text',

    LANDING_SCREEN: '~get-approved-image',
    SKIP_BUTTON: '~skip-test-key',
    NEXT_BUTTON: '~next-test-key',

    ANDROID: {
        THIS_FIELD_REQUIRED_TEXT:
            '//android.widget.TextView[@text="This field is required"]',
        GET_APPROVED_LABEL: '//android.widget.TextView[@text="Get Approved"]'
    },
    IOS: {
        ALERT: "-ios predicate string:type == 'XCUIElementTypeAlert'",
    },
};

class ProjectLoginScreen extends AppScreen {
    constructor() {
        try {
            super(SELECTORS.WELCOME_LABEL);
        }
        catch (err) {
            const selector = driver.isAndroid
                ? SELECTORS.ANDROID.GET_APPROVED_LABEL
                : SELECTORS.IOS.GET_APPROVED_LABEL;
            super(selector);
        }
    }

    get skipButton() {
        return $(SELECTORS.SKIP_BUTTON);
    }

    get nextButton() {
        return $(SELECTORS.NEXT_BUTTON);
    }

    get username() {
        return $(SELECTORS.USERNAME_INPUT);
    }

    get continueButton() {
        return $(SELECTORS.CONTINUE_BUTTON);
    }

    get password() {
        return $(SELECTORS.PASSWORD_INPUT);
    }
    get signInButton() {
        return $(SELECTORS.SIGN_IN_BUTTON);
    }
    get dashbaordText() {
        return $(SELECTORS.DASHBOARD_TEXT);
    }
    //Rendoring methods
    processSkipButtonFirstTime() {
        try {
            this.skipButton.click();
            console.log('Skip Button Clicked...')
        }
        catch (err) {
        }
    }

    continueButtonClick() {
        this.continueButton.click();
    }

    signInButtonClick() {
        this.signInButton.click();
    }
   
    enterUsername(username) {
        this.username.setValue(username);
        if (driver.isKeyboardShown()) {
            driver.hideKeyboard();
        }
        
    }

    enterPassword(password) {
        this.password.setValue(password);
        if (driver.isKeyboardShown()) {
            driver.hideKeyboard();
        }
    }

    get alert() {
        return NativeAlert;
    }

    get errorMessage() {
        const selector = driver.isAndroid
            ? SELECTORS.ANDROID.THIS_FIELD_REQUIRED_TEXT
            : SELECTORS.IOS.ALERT;
        return $(selector);
    }
}

export default new ProjectLoginScreen();
