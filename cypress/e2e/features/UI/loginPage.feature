Feature: Login Functionality

  @smoke
  Scenario: User logs in with valid credentials
    Given I visit the login page
    When I enter valid credentials
    And I click the login button
    Then I verify the title of the application

  @regression
  Scenario: User logs in with invalid credentials
    Given I visit the login page
    When I enter invalid credentials
    And I click the login button
    Then the error message is displayed
