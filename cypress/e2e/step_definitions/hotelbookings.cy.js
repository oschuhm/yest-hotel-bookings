
import {Then, When, Before} from "@badeball/cypress-cucumber-preprocessor"; 

Before(function () {
    cy.visit('https://adactinhotelapp.com/');    
});

When('I login with valid credentials', () => {
    return true
});
