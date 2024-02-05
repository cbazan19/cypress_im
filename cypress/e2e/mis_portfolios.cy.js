/// <reference types="cypress" />



describe('Prueba del Menú Mis Portfolios con validación de sus funcionalidades básicas', () => {
    beforeEach(() => {
  
      cy.visit('https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio/investment-accounts')
  
    })
  
  
  
    it('Ingreso a Mis Portfolios', () => {
    
  
      cy.get('#username').type('f.balderian@mercapsoftware.com')
      cy.get('#password').type('Mercap2022')
      cy.get('.c22fea258 > .cf1ef5a0b').click()
      cy.wait(3000)
      cy.origin('https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio/investment-accounts', () => {
  

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

        cy.get('.mr-auto > h3').should('have.text', 'Mis portfolios')
       
        // Agregar Nuevo Portfolio (simple)

        /*cy.get('a[class="btn btn-primary"]').click()
        cy.wait(1500)
        cy.get('.modal-title').should('exist').and('be.visible').and('have.text','Nuevo Portfolio')
        cy.get('.modal-body').should('exist').and('be.visible').and('contain.text', 'Nombre').and('contain.text', 'Notas').and('contain.text', 'Esquema de valuación')
        cy.get('.custom-control-label').should('exist').and('be.visible').and('have.text','Permitir saldo negativo')
        cy.get('input[placeholder="Ingresar nombre"]').click().type('Testing')
        cy.get('textarea[placeholder="Ingresa notas..."]').click().type('Notas')
        cy.get('.custom-control-label').click()
        cy.get('.filter-option-inner-inner').click()
        cy.get('.text').eq(0).click()
        cy.get('button[class="btn btn-primary"]').click()
        cy.wait(1000)
        // cy.get('.alert').should('contain.text','Ya existe un portfolio') esto valida el cartel de error en el caso que exista un portfolio con el mismo nombre creado
        cy.get('.card-header').should('exist').and('be.visible').and('contain.text','Testing')*/

        // Ingresar y Modificar Nombre y Notas de Nuevo Portfolio (simple)

        cy.get('a[class="navbar-text d-none d-sm-block"]').eq(2).click()
        cy.wait(3000)
        cy.get('.heading').should('exist').and('be.visible').and('contain.text','Testing').and('contain.text','Notas')
        cy.get('.custom-control-label').should('exist').and('be.visible').click() // No permite saldo negativos, antes al crearlo se habia creado permitiendolo
        cy.get('.card-header').should('exist').and('be.visible').and('contain.text','Posición valuada en')
        cy.get('.table-responsive').should('exist').and('be.visible')
        cy.get(':nth-child(4) > .mt-3').should('exist').and('be.visible').and('contain.text','Rendimiento según')
        cy.get('#main-inner-content > :nth-child(4)').should('exist').and('be.visible')
        cy.get('[class="inner-component-backdrop"]').eq(0).should('exist').and('be.visible') // Que exista y se muestre el cuadro de gráficos
        cy.get('[class="inner-component-backdrop"]').eq(1).should('exist').and('be.visible').and('contain.text','Operaciones del mes') // Que exista y se muestre el cuadro Operaciones del mes	
        cy.get('[class="inner-component-backdrop"]').eq(2).should('exist').and('be.visible').and('contain.text','Movimientos monetarios') // Que exista y se muestre el cuadro de Movimientos         monetarios
        /*cy.get('button[class="btn btn-outline-secondary update-investment-account-button"]').click() // Botón para Modificar
        cy.get('.modal-header').should('exist').and('be.visible').and('contain.text','Modificar Testing')
        cy.get('.modal-body').should('exist').and('be.visible').and('contain.text','Nombre').and('contain.text','Notas')
        cy.get('input[placeholder="Ingresar nombre"]').click().clear().type('Testing2')
        cy.get('textarea[placeholder="Ingresa notas..."]').dblclick().type('2')
        cy.get('button[class="btn btn-primary"]').click() // Botón Modificar para Confirmar
        cy.get('.heading').should('exist').and('be.visible').and('contain.text','Testing2').and('contain.text','2Notas')*/

        // Eliminar Portfolio sin tener operaciones creadas

        /*cy.wait(3000)
        cy.get('button[class="btn float-right btn-outline-danger stop-managing-investment-account-button"]').click() // Botón para Eliminar
        cy.wait(1000)
        cy.get('.modal-header').should('exist').and('be.visible').and('contain.text','Confirmación')
        cy.get('.modal-body').should('exist').and('be.visible').and('contain.text','¿Desea eliminar el portfolio?')
        cy.contains('Aceptar').click({force: true})
        cy.wait(1000)
        cy.get('.card-header').should('not.contain.text','Testing')*/

        // Ingresar Movimientos monetarios - Depósito desde el portfolio simple
        /*
        cy.contains('Movimientos monetarios').click({force: true})
        cy.wait(1500)
        cy.get('.dropdown-item').eq(0).click()
        cy.get('.modal-title').should('exist').and('be.visible').and('have.text','Depósito o extracción de dinero')
        cy.get('label[class="btn trade-party-role-button"]').eq(0).click()
        cy.get('button[class="btn dropdown-toggle btn-light bs-placeholder"]').eq(0).click()
        cy.get('input[placeholder="Buscar... "]').eq(0).click().type('Santander')
        cy.get('.text').click()
        cy.get('button[class="btn dropdown-toggle btn-light bs-placeholder"]').click()
        cy.get('input[placeholder="Buscando moneda... "]').eq(0).click().type('ARS')
        cy.get('.text').eq(1).click()
        cy.get('input[class="form-control text-right"]').eq(0).click().type(100000)
        cy.get('button[class="btn btn-primary"]').eq(0).click()
        cy.wait(5000)*/

        // Asignar al portfolio el depósito
        /*
        cy.get('.modal-title').eq(1).should('have.text', 'Registro de operación')
        cy.get('.card-title').should('exist').and('be.visible').and('contain.text', 'Agregar nueva asignación')
        cy.get('label[class="col-md-5 col-form-label text-right form-control-sm"]').should('contain.text','Nominales').and('contain.text','Asignados').and('contain.text','Sin asignar')  
        cy.get(':nth-child(3) > .dropdown > .btn').should('exist').and('be.visible').and('have.text', 'Seleccione portfolio a asignar ')
        cy.get('input[class="form-control text-right"]').eq(1).click().type('100000')
        cy.get(':nth-child(3) > .dropdown > .btn').click().type('t{enter}') //** Replicar esto en otros selectores, ayuda a elegir el elemento que nosotros querramos 
        cy.get('button[class="btn btn-primary"]').eq(1).click()
        cy.wait(3000)
        cy.get('.card-title').should('exist').and('be.visible').and('contain.text', 'Testing')
        cy.get('button[class="btn btn-primary"]').eq(1).click()
        cy.wait(10000)*/
        
        // Validacion del home actualizado con el nuevo depósito: Cuadro de Posición Valuada

        cy.get('.heading').should('exist').and('be.visible').and('contain.text','ARS').and('contain.text','100.000')
        cy.get('.table-responsive').should('exist').and('be.visible').and('contain.text','ARS').and('contain.text','100.000')

        // Validacion del home actualizado con el nuevo depósito: Cuadro de Operaciones del Mes

        cy.get('[class="inner-component-backdrop"]').eq(1).should('exist').and('be.visible').and('contain.text','Operaciones del mes')
        cy.get('[class="inner-component-backdrop"]').and('contain.text','Testing').and('contain.text','Santander').and('contain.text','Depósito').and('contain.text','Moneda').and('contain.text','ARS')

        // Validacion del home actualizado con el nuevo depósito: Cuadro de Movimientos Monetarios

        cy.get('li[class="nav-item"]').eq(2).click()
        cy.get('a[aria-selected="true"]').should('exist').and('be.visible')
        cy.get('.inner-component-backdrop').should('contain.text', '100.000').and('contain.text', 'Santander').and('contain.text', 'Ingreso').and('contain.text', 'Depósito de 100.000').and('contain.text', 'ARS')

        // Falta registrar una operación y ver como impacta en el portfolio, pero eso se va a hacer desde Mis Operaciones





      



        


        





        

  
        
      })
      
      
  
  
      
    
  
     
    })
  
  
  
  
  
  })
  
  