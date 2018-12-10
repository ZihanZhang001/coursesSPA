describe("Home page", () => {

  beforeEach(() => {
    cy.visit("/");
  });

  it("Shows a header", () => {
    cy.get(".vue-title").should('contain','Welcome !!');
  });

  describe("Navigation bar", () => {
      it("Shows the required links", () => {
        cy.get(".navbar").find('[data-test=releasebtn]' );
        cy.get(".navbar").contains('Home' );
        cy.get('.navbar-nav:nth-child(1)').within(() => {
          cy.get('.nav-item:first').should('contain', 'Home')
          cy.get('.nav-item:nth-child(2)').should('contain', 'Manage')
          cy.get('.nav-item:nth-child(3)').should('contain', 'Release')
          cy.get('.nav-item:nth-child(4)').should('contain', 'Map')
        })
        cy.get('.navbar-nav:nth-child(2)').within(() => {
          cy.get('.nav-item:first').should('contain', 'About')
          cy.get('.nav-item:nth-child(2)').should('contain', 'Contact')
          cy.get('.nav-item:nth-child(3)').should('contain', 'Login')
          cy.get('.nav-item:nth-child(4)').should('contain', 'Logout')
        })
      });

      it("Redirects when links are clicked", () => {
        cy.get('[data-test=releasebtn]').click();
        cy.url().should('include','/release' )
        cy.get(".navbar").contains('Manage' ).click();
        cy.url().should('include','/courses' )
        // etc
      });
    })
});
