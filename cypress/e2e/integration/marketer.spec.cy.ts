/// <reference types="cypress" />
import setPersona from '../../test'

const titlePersona: string = "Get more out of your marketing investment";
const subtitlePersona: string = "Optimize your digital customer experience to drive more sales and happier customers.";

setPersona("marketer");

describe("Testing home-banner is personalization to Marketer:", (): void => {
  beforeEach((): void => {
      cy.visit(" http://127.0.0.1:5173/");
  });

  it("Testing Title Marketer", (): void => {
      cy.contains("strong", titlePersona);
  });

  it("Testing Subtitle Marketer", (): void => {
      cy.contains("p", subtitlePersona);
  });

  it("Testing button Marketer", ():void => {
      cy.contains("button", "Book a demo")
  });
  
});