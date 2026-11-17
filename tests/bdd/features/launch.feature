Feature: Launch
  A player opening Squad Surge lands straight on a playable mission briefing
  with a live 3D battlefield preview and no setup.

  @perf
  Scenario: Landing page presents the mission briefing
    Given the app is running
    When I browse to "/"
    Then the landing page is visible
    And WebGL runs on the expected GPU backend
    And the 3D battlefield is rendering
    And 3 missions are offered
    And the "Deploy" control is visible
    And the controls instructions are visible
    And the landing page became interactive within 3000 ms

  Scenario: Deploy the default mission
    Given the landing page is visible
    When I click "Deploy"
    Then a run is active
    And the HUD shows squad, weapon, kills, score and progress
    And the squad is in the center lane
