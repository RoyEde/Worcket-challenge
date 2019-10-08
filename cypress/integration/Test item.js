/* eslint-disable no-undef */
describe('Test items', function() {
  it('List is empty', function() {
    cy.visit('/');
    const count = cy.get('h3[data-test="count"]');
    count.should('exist');
    count.should('have.text', 'List is empty!');
  })
  it('Opens modal', function() {
    const button = cy.get('button[data-test="add-button"]');
    button.should('exist');
    button.should('have.text', 'Add an item');
    button.click();
    cy.get('.modal').should('exist');
  })
  it('Adds item', function() {
    const input = cy.get('input[data-test="add-input"]');
    input.should('exist');
    input.type('This is a test');
    const button = cy.get('button[data-test="save-item-button"]')
    button.should('exist');
    button.click();
    const count = cy.get('h3[data-test="count"]');
    count.should('exist');
    count.should('have.text', 'Items: 1');
    const item = cy.get('.cartlist__item__descriptor');
    item.should('exist');
    item.should('have.text', 'This is a test');
  })
  it('Removes item', function() {
    const button = cy.get('.button--danger');
    button.should('exist');
    button.should('have.text', 'Remove');
    button.click();
  })
  it('List is empty again', function() {
    const count = cy.get('h3[data-test="count"]');
    count.should('exist');
    count.should('have.text', 'List is empty!');
  })
})