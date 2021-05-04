describe("HelloWorld", () => {

  it("renders a message", () => {
    cy.visit("http://localhost:8080/");
    
    const msg = "Welcome to Your Vue.js App";
    cy.get("h1").should("have.text", msg);
  });
});
