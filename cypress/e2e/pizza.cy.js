describe('Pizza sipariş formu testi', () => {
  it('inputa bir metin giren test', () => {
    cy.visit('http://localhost:5173/orderpizza')
    cy.get('input[id="name"]').type("melisa").should("have.value", "melisa")
  })
  it('birden fazla malzeme seçilebilen bir test', () => {
    cy.visit('http://localhost:5173/orderpizza')
    cy.get('[data-cy="checkbox-Papperoni"]').check().should("be.checked")
    cy.get('[data-cy="checkbox-Sosis"]').check().should("be.checked")
    cy.get('[data-cy="checkbox-Kanada Jambonu"]').check().should("be.checked")
    cy.get('[data-cy="checkbox-Tavuk Izgara"]').check().should("be.checked")

  })
  it('formu gönderen bir test', () => {
    cy.visit('http://localhost:5173/orderpizza')

    cy.get('[data-cy="size-large"]').check().should('be.checked')
    cy.get('[data-cy="size-dough"]').select('ince').should('have.value', 'ince')

    cy.get('[data-cy="checkbox-Papperoni"]').check().should('be.checked')
    cy.get('[data-cy="checkbox-Sosis"]').check().should('be.checked')
    cy.get('[data-cy="checkbox-Kanada Jambonu"]').check().should('be.checked')
    cy.get('[data-cy="checkbox-Domates"]').check().should('be.checked')
    
    cy.get('input[id="name"]').type("melisa").should("have.value", "melisa")
    cy.get('button[type="button"]').should('not.be.disabled')

    cy.get('form').submit()
    cy.url().should('include', '/success')

  })
  
})


