@login  @regression
Feature: Login functionality

  Background:
    Given I am on the "login" page

  Scenario: Verify that user can login with a valid key
    When I type the "valid" key and click start
    Then I should be able to login and see the "Comments"

  Scenario: Verify that user can not login with an invalid key
    When I type the "invalid" key and click start
    Then I shouldn't be able to login and I should see "The key is not correct" alert message