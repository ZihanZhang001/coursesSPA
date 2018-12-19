describe("About us", () => {

  beforeEach(() => {
    cy.visit("/");
    // Click Donate navbar link
    cy.get('.navbar-nav:nth-child(2)').
    find('.nav-item:first').click()
  });

  it("Shows a header", () => {
    cy.get(".vue-title").should('contain','About');
  });


});
