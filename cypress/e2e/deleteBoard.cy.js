import { deleteB } from "../page_objects/deleteBoard";
describe('Delete board test', () => {

    it("delete board", () => {
       cy.request({
        method: "DELETE",
        url: `${Cypress.env("apiUrl")}/boards/14686`
       }).as("boards");
    })
})