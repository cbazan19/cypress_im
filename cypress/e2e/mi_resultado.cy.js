/// <reference types="cypress" />



describe('Prueba del Menú Resultado con validación de la información básica mostrada', () => {
    beforeEach(() => {
  
      cy.visit('https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio/results')
  
    })
  
  
  
    it('Ingreso a Mi Resultado', () => {
    
  
      cy.get('#username').type('f.balderian@mercapsoftware.com')
      cy.get('#password').type('Mercap2022')
      cy.get('.c22fea258 > .cf1ef5a0b').click()
      cy.origin('https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio/results', () => {
  

        // Validación de los distintos menús mostrados, desde Home hasta Ayuda

        cy.get('#sidenav-list > :nth-child(1)').should('contain.text','Home')
        cy.get('#sidenav-list > :nth-child(2)').should('contain.text','Mis operaciones')
        cy.get('#sidenav-list > :nth-child(3)').should('contain.text','Mi dinero')
        cy.get('#sidenav-list > :nth-child(4)').should('contain.text','Mis portfolios')
        cy.get('#sidenav-list > :nth-child(5)').should('contain.text','Resultado')
        cy.get('#sidenav-list > :nth-child(6)').should('contain.text','Agenda')
        cy.get('#sidenav-list > :nth-child(7)').should('contain.text','Comparativa')
        cy.get('#sidenav-list > :nth-child(8)').should('contain.text','Ayuda')
        
        // Validación del h3

        cy.get('.mr-auto > h3').should('have.text', 'Resultado')
       
        // Seleccionar Portoflio creado en Mis_portfolios llamado Testing

        cy.contains('Testing').should('exist').and('be.visible').click()
        cy.wait(3000)
        cy.get('button[class="btn dropdown-toggle btn-default bs-placeholder"]').should('exist').and('be.visible').click()
        cy.get('.bs-select-all').click()
        cy.get('.trades-filters-backdrop').click()
        cy.wait(1500)
        cy.get('[class="dropdown bootstrap-select form-control]').click()
        

        
        // cy.get('[class="inner-component-backdrop"]').eq(1).should('exist').and('be.visible').and('contain.text','Operaciones del mes')

      



        


        





        

  
        
      })
      
      
  
  
      
    
  
     
    })
  
  
  
  
  
  })
  
  