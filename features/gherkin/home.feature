Feature: User Registration

    User Registration in Home Page

Scenario: As a User, I can register and upload the file through the website
    Given I open the home page
    When I fill all the forms
    And I upload the files
    Then I see the success message
