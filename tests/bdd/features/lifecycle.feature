Feature: Mission lifecycle
  Switching missions, restarting and replaying always starts a fresh, fully
  live battle: kills register and gates are taken in every new run.

  Scenario: The first run is a live battle
    Given a run is active
    Then the squad scores kills and takes a gate

  Scenario: A different mission after leaving a run is a live battle
    Given the run is paused
    When I click "Menu"
    And I select mission 3
    And I click "Deploy"
    Then a run is active on mission 3
    And the field log starts fresh
    And the squad scores kills and takes a gate

  Scenario: Restarting a run is a live battle
    Given the run is paused
    When I wait 2 seconds
    And I click "Restart"
    Then a run is active
    And the field log starts fresh
    And the squad scores kills and takes a gate
