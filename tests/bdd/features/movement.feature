Feature: Lane movement
  The squad switches between three lanes with the keyboard or on-screen lane controls.

  Background:
    Given a run is active

  Scenario Outline: Move between lanes with the keyboard
    When I press "<key>"
    Then the squad is in the <lane> lane

    Examples:
      | key        | lane  |
      | ArrowLeft  | left  |
      | ArrowRight | right |
      | a          | left  |
      | d          | right |

  Scenario: The squad cannot leave the left edge
    When I press "ArrowLeft" 3 times
    Then the squad is in the left lane

  Scenario: The squad cannot leave the right edge
    When I press "d" 3 times
    Then the squad is in the right lane

  Scenario Outline: Move with the on-screen controls
    When I click "<control>"
    Then the squad is in the <lane> lane

    Examples:
      | control    | lane  |
      | Move left  | left  |
      | Move right | right |
      | Left lane  | left  |
      | Right lane | right |

  Scenario: Return to the center lane with its lane control
    When I click "Right lane"
    And I click "Center lane"
    Then the squad is in the center lane
