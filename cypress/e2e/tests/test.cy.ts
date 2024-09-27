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
        // Validate Get started button
        homepage.clickGetStartedButton()
        cy.url().should('equal', `${baseUrl}/docs/intro`)
      })

    const searchText = [
        'Writing tests',
        'Installation'
    ]

    searchText.forEach((text) => {
    it(`Test Search for ${text}`, () => {
        // Validate search
        homepage.clickSearchInput()
        homepage.fillInSearch(text)
        homepage.clickSearchOutput(text)
        cy.get('h1').contains(text, {timeout: 5000}).should('be.visible')
        })
    })

    it('Test Github link', () => {
        // Validate Link
        homepage.clickGithubButton()
        })
    }
)
