class LoginPage {

    open(url) {
        cy.visit(url);
        return this;
    }

    login(login, password) {
        cy.get('#username').should('be.visible');
        cy.get('#username').type(login);
        cy.get('#password').type(password);
        cy.get('button[type="login"]').click();
        return this;
    }
}

export default LoginPage