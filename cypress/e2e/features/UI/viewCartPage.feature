Feature: View cart Page Functionality
  @viewcartpage
  @smoke
  Scenario: User checks out the items from the cart
    Given I am on the view cart page
    When I click proceed to checkout
    And make payment after placing the order
    Then I see the order placed message


