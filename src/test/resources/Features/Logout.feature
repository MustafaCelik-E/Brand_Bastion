Feature: Logout functionality

  @logout  @regression
  Scenario: Verify that user can logout by clicking Logout button
    Given I am on the "login" page
    And I type the "valid" key and click start
    When I am at the top of the "Comments" page
    And I click logout button
    Then I should be able to logout successfully and see the login page again