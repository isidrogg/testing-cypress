import { mount } from "@cypress/vue";
import HelloWorld from "../../src/components/HelloWorld.vue";

describe("Open the web", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/");
  });
  it("should open the correct page ", () => {
    cy.title().should("eq", "Capital Quiz");
  });
});
