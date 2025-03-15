Feature: Product Page Functionality
  @productpage
  @regression
  Scenario Outline: User searches for products and adds them to the cart
    Given I am on the product page
    When I search for products "<productOne>", "<productTwo>", "<productThree>" and add them to the cart
    Then I verify number of items by clicking view cart in confirmation pop up
    And confirm the items exist in the cart "<productOne>", "<productTwo>", "<productThree>"

    Examples:
      | productOne | productTwo | productThree     |
      | Blue Top   | Men Tshirt | Sleeveless Dress |

  Scenario Outline: User searches for products and adds them to the cart
    Given I am on the product page
    When I search product "<product>"
    And click on view product
    Then I submit my review
    And I verify my review has been submitted successfully
    Examples:
      | product          |
      | Blue Top         |
      | Men Tshirt       |
      | Sleeveless Dress |