class BasicPage {

    addNewProduct(name, newPrice, newDiscoutPrice) {
        cy.get('#annNewProduct').click();
        cy.get('#newName').type(name);
        cy.get('#newPrice').type(newPrice);
        cy.get('#newDiscoutPrice').type(newDiscoutPrice);
        cy.get('button[name="save"]').click();
        return this;
    }

    assertSingleProductWasAdded() {
        this.checkAllertMessage('Product has been added');
        return this;
    }

    checkAllertMessage(message) {
        cy.get('div[class="alert-success"]').should('be.visible');
        cy.get('div[class="alert-success"]').contains(message);
        return this;
    }

    deleteOneProduct(name) {
        cy.get('.productName').contains(name).parent().children('#checkbox').click();
        cy.get('#deleteMarked').click();
        return this;

    }

    assertSingleProductWasDeleted() {
        this.checkAllertMessage('Product has been deleted');
        return this;

    }

    deleteManyProducts(name) {
        cy.get('.productName').contains(name).parent().children('#checkbox').click();
        cy.get('.productName').contains(name).parent().children('#checkbox').click();
        cy.get('#deleteMarked').click();
        return this;

    }

    assertAllCheckedProductsWereDeleted() {
        this.checkAllertMessage('All checked products have been deleted');
        return this;

    }

    editOneProduct(name, newPrice, newDiscoutPrice) {
        cy.get('.editProduct').click();
        cy.get('#newName').type(name);
        cy.get('#newPrice').type(newPrice);
        cy.get('#newDiscoutPrice').type(newDiscoutPrice);
        cy.get('button[name="save"]').click();
        return this;
    }

    assertSingleProductWasEdited() {
        this.checkAllertMessage('Product has been edited');
        return this;
    }

    editManyProducts(name) {
        cy.get('.productName').contains(name).parent().children('#checkbox').click();
        cy.get('.productName').contains(name).parent().children('#checkbox').click();
        cy.get('.editProduct').click();

    }

    assertAllCheckedProductsWereEdited() {
        this.checkAllertMessage('All checked products have been edited');
        return this;
    }

    checkNegativePrice(newNegativePrice) {
        cy.get('.editProduct').click();
        cy.get('#newPrice').type(newNegativePrice);
        cy.get('button[name="save"]').click();
        return this;
    }

    checkNegativeDiscoutPrice(newNegativeDiscoutPrice){
        cy.get('.editProduct').click();
        cy.get('#newDiscoutPrice').type(newNegativeDiscoutPrice);
        cy.get('button[name="save"]').click();
        return this;
    }

    assertAddNegativePrice() {
        this.checkAllertMessage('You can not add negative price');
        return this;
    }
}


export default BasicPage