Feature: Radio Buttons

  @radio  @regression
  Scenario Outline: Verify all the radio buttons if they are enabled
    Given I am on the "login" page
    And I type the "valid" key and click start
    When I am at the top of the "Comments" page
    Then all the "<radioButtons>" should be enabled to click

    Examples:
      | radioButtons |
      | positive     |
      | negative     |
      | neutral      |
      | visible      |
      | hidden       |