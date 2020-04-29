Feature: Playing spare game

  Scenario Outline: Player missed all shots
    Given player made the following score '<score>'
    When we calculate his final score
    Then the result should be <result>

    Examples:
      | score                         | result |
      | --,--,--,--,--,--,--,--,--,-- | 0      |

  @wip
  Scenario Outline: Player did a simple score
    Given player made the following score '<score>'
    When we calculate his final score
    Then the result should be '<result>'

    Examples:
      | score                         | result |
      | 21,22,23,24,26,26,27,27,27,17 | 69     |
  @wip
  Scenario Outline: Player did a score with som spares
    Given player made the following score '<score>'
    When we calculate his final score
    Then the result should be '<result>'

    Examples:
      | score                         | result |
      | 55,22,23,24,26,26,27,25,24,17 | 75     |

  @wip
  Scenario Outline: Player did a score with som spares
    Given player made the following score '<score>'
    When we calculate his final score
    Then the result should be '<result>'

    Examples:
      | score                        | result |
      | X,22,23,24,26,26,27,28,28,17 | 104    |
