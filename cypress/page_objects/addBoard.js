class AddBoard{
    getBoardHeading(){
        return cy.get(".vs-c-modal_title");
    }
    getBoardsCardTitle(){
        return cy.get("header").find("h2").first();
    }
    getNewBoardCard(){
        return cy.get(".vs-c-modal");
    }
    getBoardModalTitle(){
        return this.getBoardModalTitle.find("h2 > label");
    }
    get boardCards() {
        return cy.get(".vs-c-my-boards");
      }
    get organizationName(){
        return this.getBoardModalTitle.get("input").first();
    }
    get helpText(){
        return this.getBoardModalTitle.find("small");
    }
    get boardName(){
        return this.getBoardModalTitle.find("input").second();
    }
    get dotIndicators() {
        return this.getBoardModalTitle.find("ul").children();
      }
    get buttonNext(){
        return this.getBoardModalTitle.find("button").last();
    }
    get checkBoxKanban(){
        return this.getBoardModalTitle.find(":checkbox").last();
    }
    getBoardCardTitle(index){
        return this.boardCards
        .eq(index)
        .find("h2")
        .invoke("text")
        .then((text) => {
            return text;
        })

    }

    createBoard(orgName, boardName){
        this.organizationName.type(orgName);
        this.boardName.type(boardName);
        this.buttonNext.click();
    }
}
export const addBoard = new AddBoard();