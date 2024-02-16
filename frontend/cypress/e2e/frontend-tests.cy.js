/* eslint-disable no-undef */
describe('Home Page Tests', () => {
  it('Loads Home Page', () => {
    cy.visit('http://localhost:3000');
    cy.get('body');
  });

  it('Begin Journey Button Works', () => {
    cy.visit('http://localhost:3000');
    cy.get('#download-button').should('have.text', 'Begin Journey');
    cy.get('#download-button').click();
    cy.url().should('include', '/categories')
  });

  it('Logo Button Works', () => {
    cy.visit('http://localhost:3000');
    cy.get('#logo-container').should('have.text', 'lrnr');
    cy.get('#logo-container').click();
    cy.url().should('equal', 'http://localhost:3000/');
  });
});

describe('Categories Page Tests', () => {
  it('Loads Categories Page', () => {
    cy.visit('http://localhost:3000/categories');
  });

  it('Form Validation Works', () => {
    cy.visit('http://localhost:3000/categories');
    cy.get('#btn-categories').click();
    cy.get('div').should('contain', 'Please fill in all the fields.');
  });

  it('Dropdowns Work', () => {
    cy.visit('http://localhost:3000/categories');
    cy.get('#topic').select('aws', { force: true }).should('have.value', 'aws');
    cy.get('#expertise').select('novice', { force: true }).should('have.value', 'novice');
    cy.get('#numquestions').select('5', { force: true }).should('have.value', '5');
    cy.get('#questionstyle').select('master oogway', { force: true }).should('have.value', 'master oogway');
  });
});

describe('Account Page Tests', () => {
  it('Loads Account Page', () => {
    cy.visit('http://localhost:3000/account');
  });

  it('Displays Static Account Stats', () => {
    cy.visit('http://localhost:3000/account');
    cy.get('h1').should('have.text', 'Account');
    cy.get('i').contains('whatshot');
    cy.get('p').contains('Streak');
    cy.get('i').contains('view_list');
    cy.get('p').contains('Platinum Quizzes');
    cy.get('i').contains('person');
    cy.get('p').contains('lrnr Level');
  });
});

describe('Results Page Tests', () => {
  it('Loads Result Page', () => {
    cy.visit('http://localhost:3000/result');
  });

  it('Displays Static Account Stats', () => {
    cy.visit('http://localhost:3000/result');
    cy.get('p').contains('Questions Right:');
    cy.get('p').contains('Points:');
  });

  it('Try Another Quiz Button Works', () => {
    cy.visit('http://localhost:3000/result');
    cy.get('#download-button').should('have.text', 'Try Another Quiz');
    cy.get('#download-button').click();
    cy.url().should('include', '/categories')
  });
});