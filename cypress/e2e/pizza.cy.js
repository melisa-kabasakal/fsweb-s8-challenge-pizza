describe('Pizza sipariş formu testi', () => {
  it('inputa bir metin giren test', () => {
    cy.visit('http://localhost:5173/orderpizza')
    cy.get('[data-cy="input-name"]').type("melisa").should("have.value", "melisa")
  })
  it('birden fazla malzeme seçilebilen bir test', () => {
    cy.visit('http://localhost:5173/orderpizza')
    cy.get('[data-cy="checkbox-Papperoni"]').next('label').click();
    cy.get('[data-cy="checkbox-Papperoni"]').should('be.checked');

    cy.get('[data-cy="checkbox-Sosis"]').next('label').click();
    cy.get('[data-cy="checkbox-Sosis"]').should('be.checked');

    cy.get('[data-cy="checkbox-Kanada Jambonu"]').next('label').click();
    cy.get('[data-cy="checkbox-Kanada Jambonu"]').should('be.checked');

    cy.get('[data-cy="checkbox-Tavuk Izgara"]').next('label').click();
    cy.get('[data-cy="checkbox-Tavuk Izgara"]').should('be.checked');


  })
  it('formu gönderen test', () => {
    cy.visit('http://localhost:5173/orderpizza');

    cy.get('[data-cy="size-large"]').check({ force: true }).should('be.checked');
    cy.get('[data-cy="size-dough"]').select('Süpper İnce').should('have.value', 'Süpper İnce');

    
    cy.get('[data-cy="checkbox-Papperoni"]').next('label').click();
    cy.get('[data-cy="checkbox-Papperoni"]').should('be.checked');

    cy.get('[data-cy="checkbox-Sosis"]').next('label').click();
    cy.get('[data-cy="checkbox-Sosis"]').should('be.checked');

    cy.get('[data-cy="checkbox-Domates"]').next('label').click();
    cy.get('[data-cy="checkbox-Domates"]').should('be.checked');

    cy.get('[data-cy="checkbox-Soğan"]').next('label').click();
    cy.get('[data-cy="checkbox-Soğan"]').should('be.checked');

    cy.get('[data-cy="input-name"]').type("melisa").should('have.value', 'melisa');
    
    
    cy.get('[data-cy="submit-button"]').should('not.be.disabled');
    
    
    cy.get('[data-cy="submit-button"]').click();
    cy.url().should('include', '/success');
  });
  it('Geçerli girişler yapıldığında formu göndermeli', () => {
    cy.visit('http://localhost:5173/orderpizza')

    cy.get('[data-cy="size-large"]').check({ force: true }).should('be.checked');
    cy.get('[data-cy="size-dough"]').select('Süpper İnce').should('have.value', 'Süpper İnce')
    cy.get('[data-cy="input-name"]').type('Melisa') 

    cy.get('[data-cy="checkbox-Papperoni"]').next('label').click();
    cy.get('[data-cy="checkbox-Papperoni"]').should('be.checked');

    cy.get('[data-cy="checkbox-Sosis"]').next('label').click();
    cy.get('[data-cy="checkbox-Sosis"]').should('be.checked');

    cy.get('[data-cy="checkbox-Domates"]').next('label').click();
    cy.get('[data-cy="checkbox-Domates"]').should('be.checked');

    cy.get('[data-cy="checkbox-Soğan"]').next('label').click();
    cy.get('[data-cy="checkbox-Soğan"]').should('be.checked');

    cy.get('[data-cy="submit-button"]').should('not.be.disabled').click();


   
    cy.url({ timeout: 10000 }).should('include', '/success');
    cy.contains('Sipariş Özeti').should('be.visible');
  });

  it('Form geçersiz ise butona tıklamasın', () => {
    cy.visit('http://localhost:5173/orderpizza')
    cy.get('[data-cy="size-large"]').check({ force: true }).should('be.checked');
    cy.get('[data-cy="size-dough"]').select('Süpper İnce').should('have.value', 'Süpper İnce')
    cy.get('[data-cy="input-name"]').clear();
    cy.get('[data-cy="submit-button"]').should('be.disabled');
  });

  
  it('Ağ hatası varsa hata mesajı göndermeli', () => {
    cy.intercept('POST', 'https://reqres.in/api/pizza', {
      statusCode: 500, 
      body: { error: 'Server Error' }, 
    }).as('submitOrder');

    cy.visit('http://localhost:5173/orderpizza')
    cy.get('[data-cy="size-large"]').check({ force: true }).should('be.checked');
    cy.get('[data-cy="size-dough"]').select('Süpper İnce').should('have.value', 'Süpper İnce')
    cy.get('[data-cy="input-name"]').type('Melisa') 

    cy.get('[data-cy="checkbox-Papperoni"]').next('label').click();
    cy.get('[data-cy="checkbox-Papperoni"]').should('be.checked');

    cy.get('[data-cy="checkbox-Sosis"]').next('label').click();
    cy.get('[data-cy="checkbox-Sosis"]').should('be.checked');

    cy.get('[data-cy="checkbox-Domates"]').next('label').click();
    cy.get('[data-cy="checkbox-Domates"]').should('be.checked');

    cy.get('[data-cy="checkbox-Soğan"]').next('label').click();
    cy.get('[data-cy="checkbox-Soğan"]').should('be.checked');


    cy.get('[data-cy="submit-button"]').click() 

    cy.contains('İnternete bağlanılamadı.Lütfen internet bağlantınızı kontrol edin.')
  });
  
})




