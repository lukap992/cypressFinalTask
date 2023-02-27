import { addBoard } from "../page_objects/addBoard";
describe("create board test", ()=> {
    before("log into the app", () => {
        cy.intercept({
            method: "GET",
            url: `${Cypress.env("apiUrl")}/my-boards`
        }).as("getMyBoards")

        cy.loginBE();
        cy.visit("/")
        cy.wait("@getMyBoards").then((interception) => {
            expect(interception.response.statusCode).eq(200);
            expect(window.localStorage.getItem("token")).to.exist;
        })
        cy.url().should("include", "my-boards");
        addBoard.getBoardsCardTitle
        .should("be.visible")
        .and("have.text")


    })
    it("Create Board with valid data", () => {
        cy.intercept({
            method: "POST",
            url: `${Cypress.env("apiUrl")}/boards`,
          }).as("createBoards");

          cy.intercept({
            method: "GET",
            url: `${Cypress.env("apiUrl")}/my-boards`,
          }).as("getMyBoards");

          let boardId;
          let randomName = faker.company.name();

          addBoard.createBoard(randomName);
          cy.wait("@createBoard").then((interception) => {
            boardId = interception.response.body.id;

            expect(interception.response.statusCode).eq(201);
            expect(interception.response.body.name).eq(randomName);

            cy.visit(`/boards/${boardId}/boards`);
            cy.url().should("include", `${boardId}/boards`);
          })
    })
})