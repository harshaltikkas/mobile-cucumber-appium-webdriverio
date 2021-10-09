Feature: Login validations & Forgot password

  Background:
    Given I am on the username screen

  Scenario: Displays Inline error message when clicking on Continue button without entering credentials
    When I click on 'Continue' button
    Then app should displays 'This field is required' inline error message

  ## could not verify snackbar msg
  # Scenario: Displays snackbar error message when clicking on Continue button with entering invalid contact number
  #   When I entered '9876543210' in username field
  #   And I click on 'Continue' button
  #   Then app should displays 'Valid registered contact number is required' snackbar error message

  ## could not verify snackbar msg
  # Scenario: Displays snackbar error message when entering valid username and incorrect password
  #   When I entered 'valid_username' in username field
  #   And I click on 'Continue' button
  #   And I entered 'incorrect_password' in password field
  #   And I click on 'Sign in' button
  #   Then app should displays 'Wrong email or password.' snackbar error message

  ## could not verify snackbar msg
  # Scenario: Displays snackbar error message when entering invalid username and correct password
  #   When I entered 'invalid_username' in username field
  #   And I click on 'Continue' button
  #   And I entered 'correct_password' in password field
  #   And I click on 'Sign in' button
  #   Then app should displays 'Wrong email or password.' snackbar error message

  # Scenario: Displays app dashboard, when entering valid credentials
  #   When I entered 'valid_username' in username field
  #   And I click on 'Continue' button
  #   And I entered 'correct_password' in password field
  #   And I click on 'Sign in' button
  #   Then app should displays 'Hello' followed by 'valid_username' on dashboard

  # Scenario: verify Reset Password screen
  #   When I entered 'valid_username' in username field
  #   And I click on 'Continue' button
  #   And I click on 'Forgot password' button
  #   Then I should see 'Reset Password' screen
  #   When I entered 'valid_email' in email field 
  #   Then I should redirect to username screen