Feature: Pause and resume
  A run can be paused at any moment; while paused nothing in the simulation advances.

  Scenario: Pause with the keyboard
    Given a run is active
    When I press "Space"
    Then the run is paused
    And the pause overlay is visible

  Scenario: Pause with the pause control
    Given a run is active
    When I click "Pause"
    Then the run is paused
    And the pause overlay is visible

  Scenario: A paused run is frozen
    Given the run is paused
    When I wait 2 seconds
    Then elapsed time and squad size are unchanged since pausing

  Scenario: Resume with the resume control
    Given the run is paused
    When I click "Resume"
    Then a run is active
    And elapsed time continues from where it paused

  Scenario: Resume with the keyboard
    Given the run is paused
    When I press "Space"
    Then a run is active
    And elapsed time continues from where it paused

  Scenario: Restart from the pause overlay
    Given the run is paused
    When I click "Restart"
    Then a run is active
    And elapsed time has restarted
