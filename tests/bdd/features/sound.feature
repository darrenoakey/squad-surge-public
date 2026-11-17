Feature: Sound preference
  The synthesized sound toggle remembers the player's choice in this browser profile.

  Scenario: Toggled sound preference survives a reload
    Given the landing page is visible
    When I click "Sound"
    Then the sound preference is flipped
    When I reload the page
    Then the sound preference is still flipped

  Scenario: Toggling sound twice restores the original preference after reload
    Given the landing page is visible
    When I click "Sound"
    And I click "Sound"
    And I reload the page
    Then the sound preference is unchanged
