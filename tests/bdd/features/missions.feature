Feature: Mission selection
  Three handcrafted missions are unlocked from the start and can be chosen
  on the briefing before deploying.

  Scenario Outline: Select a mission on the briefing
    Given the landing page is visible
    When I select mission <number>
    Then mission <number> is selected
    And exactly one mission is selected

    Examples:
      | number |
      | 1      |
      | 2      |
      | 3      |

  Scenario Outline: Deploy a chosen mission
    Given the landing page is visible
    When I select mission <number>
    And I click "Deploy"
    Then a run is active on mission <number>
    And elapsed time advances

    Examples:
      | number |
      | 2      |
      | 3      |

  Scenario: Leave a paused run for the briefing
    Given the run is paused
    When I click "Menu"
    Then the landing page is visible
    And no run is active
