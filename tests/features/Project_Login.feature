Feature: Login validations & Forgot password

  Background:
    Given I am on the username screen

  Scenario: Displays Inline error message when clicking on Continue button without entering credentials
    When I click on 'Continue' button
    Then app should displays 'This field is required' inline error message

  ## could not verify snackbar msg
  # Scenario: Displays snackbar error message when clicking on Continue button with entering invalid contact number
  #   When I enter '9876543210' in username field
  #   And I click on 'Continue' button
  #   Then app should displays 'Valid registered contact number is required' snackbar error message

  ## could not verify snackbar msg
  # Scenario: Displays snackbar error message when entering valid username and incorrect password
  #   When I enter 'valid_username' in username field
  #   And I click on 'Continue' button
  #   And I enter 'incorrect_password' in password field
  #   And I click on 'Sign in' button
  #   Then app should displays 'Wrong email or password.' snackbar error message

  ## could not verify snackbar msg
  # Scenario: Displays snackbar error message when entering invalid username and correct password
  #   When I enter 'invalid_username' in username field
  #   And I click on 'Continue' button
  #   And I enter 'correct_password' in password field
  #   And I click on 'Sign in' button
  #   Then app should displays 'Wrong email or password.' snackbar error message

  Scenario: if enter valid credentials it should displays app dashboard,
    When I enter 'htikkas' in username field
    And I click on 'Continue' button
    And I enter 'project@123' in password field
    And I click on 'Sign in' button
    Then app should displays 'Hello htikkas' on dashboard

  # Scenario: verify Reset Password screen
  #   When I enter 'htikkas' in username field
  #   And I click on 'Continue' button
  #   And I click on 'Forgot password' button
  #   Then I should see 'Reset Password' screen
  #   When I enter 'htikkas@projectfinancebpo.com' in email field 
  #   And I click on 'Reset Password' button
  #   Then I should see "username" screen