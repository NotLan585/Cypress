

class homePage {
    elements = {
        getStartedButton: () => cy.get('.getStarted_Sjon'),
        searchInput: () => cy.get('.DocSearch'),
        writingTestSearch: () => cy.get('input[placeholder="Search docs"]'),
        searchOutput: () => cy.get('.DocSearch-Hit-title')
    }

    clickGetStartedButton() {
        this.elements.getStartedButton().click()
    }

    clickSearchInput() {
        this.elements.searchInput().click()
    }
    
    fillInSearch(search_text) {
        this.ele
        this.elements.writingTestSearch().type(search_text)
    }

    clickSearchOutput(text) {
        this.elements.searchOutput().contains(text).click()
    }

}
module.exports = new homePage();
