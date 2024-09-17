import { home } from 'ospath';
import homePage from '../page-objects/pageObjects.cy'
const baseUrl = Cypress.config('baseUrl');

describe('Test Homepage', () => {
    beforeEach(() => {
    // Naigate to page
     cy.visit(baseUrl)
    })

    it('Test playwright getting started', () => {
        // We use the `cy.get()` command to get all elements that match the selector.
        // Then, we use `should` to assert that there are two matched items,
        // which are the two default items.
        homePage.clickGetStartedButton()
        cy.url().should('equal', `${baseUrl}/docs/intro`)
      })

    it('Test Search', () => {
        homePage.clickSearchInput()
        homePage.fillInSearch('Writing Tests')
        homePage.clickSearchOutput('Introduction')
        cy.get('[id="introduction"]').should('be.visible')
        })
    }
)


