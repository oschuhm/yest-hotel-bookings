
import {Then, When, Before} from "@badeball/cypress-cucumber-preprocessor"; 

const username = Cypress.env("LOGIN_USER");
const password = Cypress.env("LOGIN_PASSWORD");

Before(function () {
    cy.visit('https://adactinhotelapp.com/');    
});

When('I login with valid credentials', () => {
    cy.log(`Login with username: ${username}`);
    return true
});

When('I login with invalid credentials', () => {
    return true
});
