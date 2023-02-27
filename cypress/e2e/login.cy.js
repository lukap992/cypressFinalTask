import { loginPage } from "../page_objects/login";
describe('login page test', () => {
    before("visit login page", ()=>{
        cy.visit("/login");
        cy.url().should("include", "/login");

        loginPage.loginPageHeading
        .should("be.visible")
        .and("have.text", "Log in with your existing account")
        .and("exist")
    })
    it("log in with valid credentials", ()=> {
        cy.intercept({
            method: "POST",
            url: `${Cypress.env("apiUrl")}/login`,
        }).as("login");

        loginPage.login(Cypress.env("testUserEmail"), Cypress.env("testUserPass"));
        loginPage.loginPageHeading.should("not.exist");
    })
})