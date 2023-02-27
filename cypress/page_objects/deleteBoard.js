class DeleteBoard{
    get helpDeleteText(){
        return cy.get("h4");
    }
    get areYouSureText(){
        return cy.get("p")
    }
    get buttonNo(){
        return cy.get("button").first();
    }
    get buttonYes(){
        return cy.get("button").last();
    }
    deleteBoard(){
        this.buttonYes.click();
    }
}
export const deleteB = new DeleteBoard();