describe("Footer", () => {
  const pages = [
    "http://localhost:3000/dashboard",
    "http://localhost:3000/dashboard/issues",
    // add all other pages of your application here
  ];

  pages.forEach((page) => {
    it(`renders correctly on ${page}`, () => {
      // visit the page
      cy.visit(page);

      // check that the footer is visible
      cy.get("#footer").should("be.visible");

      // check that the current version number is shown
      // replace '.version' with the actual class or identifier of the version element in your code
      cy.get("#version").should("have.text", "Version:14.5.2"); // replace '1.0.0' with your actual version number

      // check that the links exist
      // replace '.footer-link' with the actual class or identifier of your footer links
      cy.get("#footerMenuItems").should("exist");

      // check that the logo is visible
      // replace '.footer-logo' with the actual class or identifier of your logo
      cy.get("#footerLogo").should("be.visible");
    });
  });
});
