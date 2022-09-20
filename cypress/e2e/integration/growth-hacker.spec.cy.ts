/// <reference types="cypress" />
import setPersona from '../../test'

const titlePersona: string = "Grow faster with personalization";
const subtitlePersona: string = "Hyper-targeted experiences that generate 5x more leads.";

setPersona("growth-hacker");

describe("Testing home-banner is personalization to Growth Hacker:", (): void => {
  beforeEach((): void => {
      cy.visit(" http://127.0.0.1:5173/");
  });

  it("Testing Title Growth Hacker", (): void => {
      cy.contains("strong", titlePersona);
  });

  it("Testing Subtitle Growth Hacker", (): void => {
      cy.contains("p", subtitlePersona);
  });

  it("Testing button Growth Hacker", ():void => {
      cy.contains("button", "Try it now")
  });
  
});