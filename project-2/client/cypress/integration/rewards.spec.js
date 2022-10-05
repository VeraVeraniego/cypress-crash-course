/* eslint-disable no-undef */
/// <reference types="cypress"/>

describe("Rewards Dashboard", () => {
  beforeEach(() => {
    cy.visit("/rewards");
    cy.intercept("GET", "http://localhost:4000/rewards", {
      fixture: "rewards.json",
    });
  });
  it("should display a list of rewards", () => {
    cy.get("ul")
      .should(
        "contain",
        "500 points for drinking 8 cups of water for 7 straight days"
      )
      .and("contain", "250 points for exercising for 3 straight days");
  });
  it("should display alist of rewards with mocks", () => {
    cy.get("ul")
      .should(
        "contain",
        "500 points for drinking 8 cups of water for 7 straight days"
      )
      .and("contain", "450 points for exercising for 3 straight days");
  });
});
