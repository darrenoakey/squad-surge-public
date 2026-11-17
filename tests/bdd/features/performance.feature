@perf
Feature: Runtime performance
  Live play stays responsive in headless Chromium. Frame rate is judged
  against an empty page measured in the same browser at the same moment, so
  host load does not masquerade as an app regression.

  Scenario: An active run renders smoothly
    Given a run is active
    When I measure rendering for 3 seconds
    Then WebGL runs on the expected GPU backend
    And the frame rate is at least 30 fps
    And the frame rate is at least 50 percent of the browser baseline
    And no main-thread task blocked for more than 250 ms
