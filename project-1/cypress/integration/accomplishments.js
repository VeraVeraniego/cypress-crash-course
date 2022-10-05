/// <reference types="cypress" />

describe("Accomplishments", () => {
  beforeEach(() => {
    cy.visit("/accomplishments");
  });
  it("should showcase error if information is missing", () => {
    cy.get("input[placeholder='Title']").type("My React accomplishment");
    cy.get("textarea[placeholder='My accomplishment...']").type(
      "I did good progress learning front end development"
    );
    cy.contains(/submit accomplishment/i).click();
    cy.contains(/complete the items above to continue/i).should("be.visible");
  });
  it("should show show spinner after submit", () => {
    cy.get("input[placeholder='Title']").type("My React accomplishment");
    cy.get("textarea[placeholder='My accomplishment...']").type(
      "I did good progress learning front end development"
    );
    cy.get("input[type='checkbox']").click();
    cy.contains(/submit accomplishment/i).click();
    cy.contains(/This Accomplisment was Successfully Submitted/i).should(
      "be.visible"
    );
  });
});
