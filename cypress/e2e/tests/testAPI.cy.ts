

context("GET /", () => {
    it("Baseline GET", () => {
      cy.request("GET", "/").then((response) => {
        expect(response.status).to.eq(200)
      })
    })
  })