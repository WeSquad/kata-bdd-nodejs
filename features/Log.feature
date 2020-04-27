Feature: Simple Feature

	Simple description

	Scenario: Log a string
		When I want to log "Hello"
		Then the response equals "Hello"

	Scenario Outline: Log a string with outline
		When I want to log "<log>"
		Then the response equals "<log>"

		Examples:
			| log          |
			| Hello world  |
			| another test |