
describe("Manage Courses page", () => {

    beforeEach(() => {
        // Delete all donations in the API's datastore
        cy.request('https://damp-cove-14583.herokuapp.com/courses/')
          .its('body')
          .then( (courses) => {
            courses.forEach( (element) => {
                cy.request('DELETE',
                   'https://damp-cove-14583.herokuapp.com/courses/' + element._id)
             });
          })
          // Populate API's datastore
          cy.fixture('courses')
            .then((courses) => {
              courses.forEach((course) => {
                  cy.request('POST',
                     'https://damp-cove-14583.herokuapp.com/courses', course )
                })
          })
          cy.visit("/");
          // Click Manage Donations navbar link
          cy.get('.navbar-nav:nth-child(1)').
              find('.nav-item:nth-child(2)').click()

     });

    it("allows a course to be deleted", () => {
        cy.get('tbody').find('tr').should('have.length', 3)
        // Click trash/delete link of 3rd donation in list
        cy.get('tbody').find('tr:nth-child(3)').find('td:nth-child(9)').click()
        // Click confirmation button
        cy.get('button').contains('Delete').click()
        cy.get('tbody').find('tr').should('have.length', 2)
    });
    it("edit a course", () => {
      cy.get('tbody').find('tr:nth-child(1)').find('td:nth-child(8)').click()
      cy.url().should('include','/edit' )
    });

    // it("shows and hides a donation's message", () => {
    //     // Click + symbol of 2nd donation in list
    //     cy.get('tbody').find('tr:nth-child(2)').find('td:nth-child(1)').click();
    //     cy.get('div.vue-message', {timeout: 5000}).should('contain', 'The message is [ Hope this helps')
    //     // Unclick same + symbol
    //     cy.get('tbody').find('tr:nth-child(2)').find('td:nth-child(1)').click();
    //     cy.get('div.vue-message').should('not.exist')
    // });
})
