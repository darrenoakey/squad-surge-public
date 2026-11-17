@long
Feature: Run outcomes and progression
  Runs end in defeat or victory through real-time play driven only by
  keyboard and clicks; no game state or time is altered.

  Scenario: An idle squad is eventually defeated
    Given the landing page is visible
    When I select mission 1
    And I click "Deploy"
    And the squad holds the center lane until the run ends
    Then the defeat screen is shown for mission 1
    And the defeat happened after the opening 10 seconds
    And "Replay" and "Return to briefing" are offered

  Scenario: Replay after defeat
    Given the defeat screen is shown for mission 1
    When I click "Replay"
    Then a run is active on mission 1
    And elapsed time has restarted
    And the squad scores kills and takes a gate

  Scenario: Return to the briefing after defeat
    Given the defeat screen is shown for mission 1
    When I click "Return to briefing"
    Then the landing page is visible

  Scenario Outline: Win a mission by steering with the keyboard
    Given the landing page is visible
    When I select mission <number>
    And I click "Deploy"
    And I steer the winning route for mission <number> with the keyboard
    Then the victory screen is shown for mission <number>

    Examples:
      | number |
      | 1      |
      | 2      |
      | 3      |

  Scenario Outline: Progress to the next mission after a victory
    Given the victory screen is shown for mission <number>
    When I click "Next mission"
    Then a run is active on mission <next>
    And the squad scores kills and takes a gate

    Examples:
      | number | next |
      | 1      | 2    |
      | 2      | 3    |
