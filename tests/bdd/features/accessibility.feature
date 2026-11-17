Feature: Keyboard accessibility
  Every control is reachable with the keyboard and shows a visible focus indicator.

  Scenario: Tab reaches every briefing control
    Given the landing page is visible
    When I tab through the page
    Then focus reached every mission, "Deploy" and "Sound"
    And every focused control showed a visible focus indicator

  Scenario: Deploy using only the keyboard
    Given the landing page is visible
    When I tab to "Deploy" and press "Enter"
    Then a run is active
