
import { Then, When, Before } from "@badeball/cypress-cucumber-preprocessor";

const username = Cypress.env("LOGIN_USER");
const password = Cypress.env("LOGIN_PASSWORD");

Before(function () {
    cy.visit('https://adactinhotelapp.com/');
});

When('I login with valid credentials', () => {
    cy.get('#username').should('be.visible').and('not.be.disabled').focus().clear().type(username, { delay: 50 }).should('have.value', username);
    cy.get('#password').should('be.visible').and('not.be.disabled').focus().clear().type(password, { delay: 50 }).should('have.value', password);
    cy.get('#login').should('be.visible').and('not.be.disabled').focus().click();
    cy.get('#username_show').invoke('val').should('include', username);

});

When('I login with invalid credentials', () => {
    const username = '123';
    const password = '123';
    cy.get('#username').should('be.visible').and('not.be.disabled').focus().clear().type(username, { delay: 50 }).should('have.value', username);
    cy.get('#password').should('be.visible').and('not.be.disabled').focus().clear().type(password, { delay: 50 }).should('have.value', password);
    cy.get('#login').should('be.visible').and('not.be.disabled').focus().click();
    cy.contains("Invalid Login details or Your Password might have expired.");

});

When('I select the value {string} in the {string} dropdown', (value,dropdown) => {
    cy.get('#' + dropdown).select(value);
});
