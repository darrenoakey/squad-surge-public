@long
Feature: Personal bests
  Finished runs record a personal best in this browser profile only, and the
  briefing shows it after a reload. Storage is exercised through play alone.

  Scenario: A fresh profile shows every mission as unplayed
    Given the landing page is visible
    Then every mission shows "Unplayed"
    And no storage error is shown

  Scenario: A finished run records a personal best that survives reload
    Given the defeat screen is shown for mission 1
    Then the end screen reports a new personal best
    When I click "Return to briefing"
    Then mission 1 shows the recorded personal best
    And mission 2 shows "Unplayed"
    When I reload the page
    Then mission 1 shows the recorded personal best
    And no storage error is shown
