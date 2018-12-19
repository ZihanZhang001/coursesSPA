// describe("Release page", () => {
//
//     beforeEach(() => {
//       cy.visit("/");
//       // Click Donate navbar link
//       cy.get('.navbar-nav:nth-child(1)').
//         find('.nav-item:nth-child(3)').click()
//     });
//
//     it("allows a valid course to be submitted", () => {
//        // Fill out web form
//         cy.get('#type').select('P')
//         cy.get('input[data-test=time]').type(10.15);
//         cy.get('label').contains('Name').next().type('English');
//         cy.get('label').contains('Size').next().type(17);
//         cy.get('label').contains('Room').next().type('G07');
//         cy.contains('Successfully released!').should('not.exist');
//         cy.get('.error').should('not.exist')
//         cy.get('button[type=submit]').click();
//         cy.contains('Successfully released!').should('exist');
//      });
//
//      it("shows error messages for incomplete form fields", () => {
//         cy.get('button[type=submit]').click();
//         cy.get('.error').contains('Time')
//         cy.get('.error').contains('Name')
//         cy.get('.error').contains('Room')
//         cy.get('label').contains('Time').next().type(9.15);
//         cy.get('.error').contains('Time').should('not.exist')
//         cy.get('label').contains('Name').next().type('english');
//         cy.get('.error').contains('Name').should('not.exist')
//         cy.get('label').contains('Room').next().type('G09');
//         cy.get('.error').should('not.exist')
//      });
// })
