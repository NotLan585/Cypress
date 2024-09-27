import { should } from 'chai';
import { homePage } from '../page-objects/pageObjects.cy';
import "cypress-axe";

const baseUrl = Cypress.config('baseUrl');
describe("Sign Up Accessibility test suite", () => {
    before(() => {
      cy.visit(baseUrl);
      cy.injectAxe();
    });
  
    it("Check entire page for accessbility issues", () => {
        cy.checkA11y(null, null, (violations) => {
            cy.log(JSON.stringify(violations, null, 2));
            // Log violations
            if (violations.length > 0) {
                console.log(violations)
                expect(violations.length).to.equal(0, 'Accessibility violations found');
            } else {
            expect(violations.length).to.equal(0, 'Accessibility violations found');
            }
          });
    });
  });