import { should } from 'chai';
import { homePage } from '../page-objects/pageObjects.cy';
const baseUrl = Cypress.config('baseUrl');

describe('Tests Homepage functionality', () => {
    beforeEach(() => {
    // Naigate to page
     cy.visit(baseUrl)
    })

    const homepage = new homePage

    it('Test playwright getting started', () => {
        // We use the `cy.get()` command to get all elements that match the selector.
        // Then, we use `should` to assert that there are two matched items,
        // which are the two default items.
        homepage.clickGetStartedButton()
        cy.url().should('equal', `${baseUrl}/docs/intro`)
      })

    it('Test Search', () => {
        // Validate search
        homepage.clickSearchInput()
        homepage.fillInSearch('Writing Tests')
        homepage.clickSearchOutput('Introduction')
        cy.get('[id="introduction"]').should('be.visible')
        cy.url().should('equal', `${baseUrl}/docs/writing-tests#introduction`)
        })

    it('Test Github link', () => {
        // Validate search
        homepage.clickGithubButton()
        })
    }
)
