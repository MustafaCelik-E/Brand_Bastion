Feature: Comment classification and status functionalities

  @comments  @regression
  Scenario Outline: Verify that all classification and status combinations
    Given I am on the "login" page
    And I type the "valid" key and click start
    And I am at the top of the "Comments" page
    When I process with "<classification>" and "<status>"
    Then I should be able to click the process button

    Examples:
      | classification | status  |
      | positive       | visible |
      | positive       | hidden  |
      | negative       | visible |
      | negative       | hidden  |
      | neutral        | visible |
      | neutral        | hidden  |