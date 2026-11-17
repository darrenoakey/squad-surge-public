Feature: Responsive layout and evidence
  The game fits a 390 px phone with thumb-sized controls and a 1440 px desktop
  without overflow.

  Scenario: Phone briefing fits the screen
    Given I am using a 390x844 touch phone
    And the landing page is visible
    Then the page has no horizontal overflow
    And every visible control is at least 44 px
    And I capture the screenshot "mobile-ready"

  Scenario: Deploy by tapping on a phone
    Given I am using a 390x844 touch phone
    And the landing page is visible
    When I tap "Deploy"
    Then a run is active
    And the page has no horizontal overflow
    And every visible control is at least 44 px
    And I capture the screenshot "mobile" after 4 seconds of play

  Scenario Outline: Tap lane controls on a phone
    Given I am using a 390x844 touch phone
    And a run is active
    When I tap "<control>"
    Then the squad is in the <lane> lane

    Examples:
      | control    | lane  |
      | Left lane  | left  |
      | Right lane | right |
      | Move left  | left  |
      | Move right | right |

  Scenario: Desktop briefing fits the screen
    Given I am using a 1440x900 desktop
    And the landing page is visible
    Then the page has no horizontal overflow
    And the 3D battlefield is rendering
    And I capture the screenshot "desktop-ready"

  Scenario: Desktop active run
    Given I am using a 1440x900 desktop
    And a run is active
    Then the page has no horizontal overflow
    And I capture the screenshot "desktop-active" after 6 seconds of play
