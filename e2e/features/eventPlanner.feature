Feature: Plan event in date planner app

  Scenario Outline: As a user, I can create a new event in the date planner app

    Given I am on the date planner screen
    When I create a new event with <eventName> , <taskDescription> and <date>
    Then I should see <eventName> at date planner screen

    Examples:
      | eventName | taskDescription | date |
      | Test1     | TestTask1       | 16   |

  # Scenario Outline: As a user, I can edit an existing event task in the date planner app

  #   Given I am on the date planner screen
  #   When I create a new event with <eventName> , <taskDescription> and <date>
  #   Then I should see <eventName> at date planner screen
  #   When I mark task as done from <eventName>
  #   Then I should see  <eventName> task status as done
  #   When I delete the event with <eventName>
  #   Then I should not see <eventName> at date planner screen

  #   Examples:
  #     | eventName | taskDescription | date |
  #     | Test2     | TestTask2       | 16   |

  # Scenario Outline: As a user, I want to see over event is in the past

  #   Given I am on the date planner screen
  #   When I create a new event with <eventName> , <taskDescription> and <date>
  #   Then I should see <eventName> in the past at date planner-screen

  #   Examples:
  #     | eventName | taskDescription | date |
  #     | Test3     | TestTask3       | 14   |