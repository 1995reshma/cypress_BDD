Feature: Register user accounts Functionality
  @smoke
  Scenario: Create user account using API
    Given I create a user account through API
    Then I verify login is successful through API