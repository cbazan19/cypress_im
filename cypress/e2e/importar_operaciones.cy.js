/// <reference types="cypress" />



describe('Validaciones básicas de Importar operaciones', () => {
    beforeEach(() => {
  
      cy.visit('https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio')
  
    })
  
   
    it('Importar operaciones', () => {
      cy.get('#username').type('f.balderian@mercapsoftware.com')
      cy.get('#password').type('Mercap2022')
      cy.get('.c22fea258 > .cf1ef5a0b', {timeout:40000}).click()
      cy.origin('https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio', () => {
  
        cy.wait(15000)
        cy.contains('Importar operaciones').click() 
        cy.wait(2000)
        cy.get('.modal-title').should('have.text', 'Importación de Transacciones')
        cy.contains('Procesar').click()
        cy.wait(1000)
        cy.get('.alert > ul > li').should('have.text', 'Portfolio: Se debe seleccionar al menos un portfolio')
        cy.get('.alert > .close').click()
        cy.contains('Seleccionar depositario').click()
        cy.wait(1000)
        cy.get('#bs-select-5-0').click()
        cy.wait(1000)
        cy.contains('Procesar').click()
        cy.wait(1000)
        cy.get('.alert > ul > li').should('have.text', 'Portfolio: Se debe seleccionar al menos un portfolio')
        cy.get('.alert > .close').click()
        cy.wait(1000)
        cy.contains('Seleccionar portfolio').click()
        cy.wait(1000)
        cy.get('#bs-select-6-0').click()
        cy.wait(1000)
        cy.contains('Procesar').click()
        cy.get('.alert > ul > li').should('have.text', 'Archivo: No se seleccionó ningún archivo')
        cy.get('.alert > .close').click()
       
  
        
      })
      
      
     
    })
  

  
  })
  
  