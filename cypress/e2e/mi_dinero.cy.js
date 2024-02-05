/// <reference types="cypress" />



describe('Prueba del Menú Mis Operaciones con validación de sus funcionalidades básicas', () => {
    beforeEach(() => {
  
      cy.visit('https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio/monetary-flows')
  
    })
  
  
  
    it('Ingreso a Mis Operaciones', () => {
    
  
      cy.get('#username').type('f.balderian@mercapsoftware.com')
      cy.get('#password').type('Mercap2022')
      cy.contains('Continue').click({force: true})
      cy.wait(40000)
      cy.origin('https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio/monetary-flows', () => {
  

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

        cy.get('.mr-auto > h3').should('have.text', 'Mi dinero')
       
        // Validaciones del cuadro Movimientos monetarios

        cy.get('.inner-component-backdrop').should('contain.text','Movimientos monetario')
        cy.contains('Movimientos monetarios')
        cy.get('[aria-label="Portfolio: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Portfolio')
        cy.get('[aria-label="Depositario: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Depositario')
        cy.get('[aria-label="Dirección: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Dirección')
        cy.get('[aria-label="Operación: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Operación')
        cy.get('[aria-label="Monto: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Monto')
        cy.get('[aria-label="Moneda: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Moneda')
        cy.get('[aria-label="Fecha: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Fecha')

        // Movimientos monetarios > Depósito
        
        cy.get('.nav > .btn').click()
        cy.wait(5000)
        cy.get('.dropdown-item').eq(0).click()
        cy.wait(45000)
        cy.get('.modal-title').should('exist').and('be.visible').and('have.text','Depósito o extracción de dinero')
        cy.get('.btn-group btn-group-toggle > label:nth-child(1)').click()
        cy.get('button[class="btn dropdown-toggle btn-light bs-placeholder"]').eq(0).click()
        //cy.get('input[placeholder="Buscar... "]').eq(0).click().type('Santander')
        //cy.get('#bs-select-2-2').click()
        cy.get('#bs-select-2-1').click()
        cy.get('button[class="btn dropdown-toggle btn-light bs-placeholder"]').click()
        //cy.get('input[placeholder="Buscando moneda... "]').eq(0).click().type('ARS')
        cy.get('#bs-select-3-0').click() 
        cy.get('input[class="form-control text-right"]').eq(0).click().type(100000)
        cy.get('button[class="btn btn-primary"]').eq(0).click()
        cy.wait(7000)
   
        // Registro y Asignación de operación

        cy.wait(7000)
        cy.get('.modal-title').eq(1).should('have.text', 'Registro de operación')
        cy.get('.card-title').should('exist').and('be.visible').and('have.text', 'Agregar nueva asignación')
        cy.get('label[class="col-md-5 col-form-label text-right form-control-sm"]').should('contain.text','Nominales').and('contain.text','Asignados').and('contain.text','Sin asignar')  
        cy.get(':nth-child(3) > .dropdown > .btn').should('exist').and('be.visible').and('have.text', 'Seleccione portfolio a asignar ')
        cy.get('input[class="form-control text-right"]').eq(1).click().type('100000')
        cy.get(':nth-child(3) > .dropdown > .btn').click()
        cy.get('#bs-select-4-0').click() // cambiar este selector porque tiene id dinámico
        cy.get('button[class="btn btn-primary"]').eq(1).click()
        cy.wait(30000)
        cy.get('.card-title').should('exist').and('be.visible').and('contain.text', 'Cartera CFI')
        cy.get('button[class="btn btn-primary"]').eq(1).click()
        cy.wait(3000)
        //cy.get('.alert').should('exist').and('be.visible').and('contain.text','Falló la ejecución')

        // Falta agregar validación del cuadro de Movimientos monetarios, una vez finalizado el registro de forma correcta

        cy.get('li[class="nav-item"]').eq(1).click()
        cy.get('a[aria-selected="true"]').should('exist').and('be.visible')
        cy.get('.inner-component-backdrop').should('contain.text', '100.000').and('contain.text', 'Banco Nación').and('contain.text', 'Ingreso').and('contain.text', 'Depósito de 100.000').and('contain.text', 'ARS')
        
        






        
       

  
        
      })
      
      
  
  
      
    
  
     
    })
  
  
  
  
  
  })
  
  