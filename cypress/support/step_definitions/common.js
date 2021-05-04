import { Given, Then } from "cypress-cucumber-preprocessor/steps";
/* global given, when, then */

const goTo = page => {
	switch (page) {
		case 'Página principal':
			cy.visit('http://localhost:8080/');
		break
		default:
			cy.visit('http://localhost:8080/');
	}
};

Given('Estoy en {string}', goTo);
Then('Veo el logo de VUE', () => {
	cy.get('img[alt="Vue logo"]');
});
Then('Tengo el link de documentación', () => {
	cy.get('a[href="https://cli.vuejs.org"]')
});
