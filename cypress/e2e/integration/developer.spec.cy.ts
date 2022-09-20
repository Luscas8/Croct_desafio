/// <reference types="cypress" />
import setPersona from '../../test'

const titlePersona: string = "Become your marketing team’s hero";
const subtitlePersona: string = "Build rich user experiences that are easy for your team to evolve and maintain.";

setPersona("developer");

describe("Testing home-banner is personalization to Developer:", (): void => {
  beforeEach((): void => {
      cy.visit(" http://127.0.0.1:5173/");
  });

  it("Testing Title Developer", (): void => {
      cy.contains("strong", titlePersona);
  });

  it("Testing Subtitle Developer", (): void => {
      cy.contains("p", subtitlePersona);
  });

  it("Testing button Developer", ():void => {
      cy.contains("button", "Watch our tutorial")
  });
  
});