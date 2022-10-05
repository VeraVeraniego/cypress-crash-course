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
  it.only("should return back to accomplishment dashboard with empty inputs whe back button clicked", () => {
    cy.get("input[placeholder='Title']").type("My React accomplishment");
    cy.get("textarea[placeholder='My accomplishment...']").type(
      "I did good progress learning front end development"
    );
    cy.get("input[type='checkbox']").click();
    cy.contains(/submit accomplishment/i).click();
    cy.contains(/go back/i).click();
    cy.get("input[placeholder='Title']").should("be.empty");
    cy.get("textarea[placeholder='My accomplishment...']").should("be.empty");
    cy.get("input[type='checkbox']").should("not.be.checked");
  });
});
