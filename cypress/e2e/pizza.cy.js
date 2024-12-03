describe('Pizza sipariş formu testi', () => {
  it('inputa bir metin giren test', () => {
    cy.visit('http://localhost:5173/orderpizza')
    cy.get('input[id="name"]').type("melisa").should("have.value", "melisa")
  })
  it('birden fazla malzeme seçilebilen bir test', () => {
    cy.get('[data-cy="checkbox-Papperoni"]').check().should("be.checked")
    cy.get('[data-cy="checkbox-Sosis"]').check().should("be.checked")
    cy.get('[data-cy="checkbox-Kanada Jambonu"]').check().should("be.checked")
    cy.get('[data-cy="checkbox-Tavuk Izgara"]').check().should("be.checked")

  })
  it('formu gönderen bir test', () => {
    cy.get('input[type="radio"][value="medium"]').check()
    cy.get('select').select('normal');
    cy.get('[data-cy="checkbox-Papperoni"]').check()
    cy.get('[data-cy="checkbox-Sosis"]').check()
    cy.get('[data-cy="checkbox-Kanada Jambonu"]').check()
    cy.get('[data-cy="checkbox-Domates"]').check()
    cy.get('input[id="name"]').type('Melisa')
    cy.get('button[type="button"]').should('not.be.disabled');

  })
  
})