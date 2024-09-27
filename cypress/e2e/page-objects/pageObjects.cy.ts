

export class homePage {
    elements = {
        getStartedButton: () => cy.get('.getStarted_Sjon'),
        searchInput: () => cy.get('.DocSearch'),
        writingTestSearch: () => cy.get('input[placeholder="Search docs"]'),
        searchOutput: () => cy.get('.DocSearch-Hit-title'),
        gitHubButton: () => cy.get('.gh-btn')
    }

    clickGetStartedButton() {
        this.elements.getStartedButton().click()
    }

    clickSearchInput() {
        this.elements.searchInput().click()
    }
    
    fillInSearch(search_text: string) {
        this.elements.writingTestSearch().type(search_text)
    }

    clickSearchOutput(text: string) {
        this.elements.searchOutput().contains(text, { timeout: 5000 }).click()
    }

    clickGithubButton() {
        this.elements.gitHubButton().click()
    }

}