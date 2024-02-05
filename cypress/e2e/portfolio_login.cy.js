/// <reference types="cypress" />



describe('Prueba de las funcionalidades correspondientes al Log In', () => {
    beforeEach(() => {
  
      cy.visit('https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio')
  
    })
  
  
    it('Login Válido', () => {
    
      cy.get('#username').type('f.balderian@mercapsoftware.com')
      cy.get('#password').type('Mercap2022')
      cy.get('.c22fea258 > .cf1ef5a0b').click()
      cy.wait(20000)
      cy.origin('https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio', () => {

      //cy.get('svg[class="svg-inline--fa fa-circle-exclamation fa-lg"]').should('not.exist') ** Con esto puedo buscar todos los cartelitos de advertencias de la página
      cy.get('.mr-auto > h3').should('have.text', 'Hola f.balderian@mercapsoftware.com')     
      cy.url().should('eq','https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio')
      cy.location('protocol').should('contains','https')
      cy.get('#sidenav-list > :nth-child(1)').should('contain.text','Home')
      cy.get('#sidenav-list > :nth-child(2)').should('contain.text','Mis operaciones')
      cy.get('#sidenav-list > :nth-child(3)').should('contain.text','Mi dinero')
      cy.get('#sidenav-list > :nth-child(4)').should('contain.text','Mis portfolios')
      cy.get('#sidenav-list > :nth-child(5)').should('contain.text','Resultado')
      cy.get('#sidenav-list > :nth-child(6)').should('contain.text','Agenda')
      cy.get('#sidenav-list > :nth-child(7)').should('contain.text','Comparativa')
      cy.get('#sidenav-list > :nth-child(8)').should('contain.text','Ayuda')
      cy.contains('Acciones').click()
      cy.wait(1000)
      cy.contains('Bonos').click()
      cy.wait(1000)
      cy.contains('Fondos').click()
      cy.wait(1000)
      cy.contains('Monedas').click()
      cy.wait(1000)
      cy.contains('Plazos fijos').click()
      cy.wait(1000)
      /*
      cy.get('.highcharts-level-group-1 > [x="0"]').click()
      cy.wait(1000)
      cy.get('.highcharts-drillup-button > .highcharts-button-box').click({force: true})
      cy.get(':nth-child(4) > .card > .card-header > .card-title > :nth-child(1) > .btn > .filter-option > .filter-option-inner > .filter-option-inner-inner').click()
      cy.wait(1000)
      cy.get(':nth-child(2) > .btn > .filter-option > .filter-option-inner > .filter-option-inner-inner').click()
      cy.wait(1000)
      cy.get(':nth-child(3) > .btn').click()
      cy.wait(1000)*/
   
    })
      
     
    })

    it('Login Inválido', () => {
    
        cy.get('.c22fea258 > .cf1ef5a0b').click()
        cy.wait(1000)
        cy.url().should('not.eq','https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio')
        cy.get('#username').type('f.balderian@mercapsoftware.com')
        cy.get('.c22fea258 > .cf1ef5a0b').click()
        cy.wait(1000)
        cy.url().should('not.eq','https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio')
        cy.get('#username').clear()
        cy.get('#password').type('Mercap2022')
        cy.get('.c22fea258 > .cf1ef5a0b').click()
        cy.wait(1000)
        cy.url().should('not.eq','https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio')
        cy.get('#username').type('mailincorrecto7@gmail.com')
        cy.get('.c22fea258 > .cf1ef5a0b').click()
        cy.wait(1000)
        cy.url().should('not.eq','https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio')
        cy.get('#error-element-password').should('be.visible')
        cy.get('#username').clear()
        cy.wait(1000)
        cy.get('#username').type('f.balderian@mercapsoftware.com')
        cy.wait(1000)
        cy.get('#password').type('passwordincorrecta')
        cy.get('.c22fea258 > .cf1ef5a0b').click()
        cy.wait(1000)
        cy.get('#error-element-password').should('be.visible')
        cy.url().should('not.eq','https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio')
       
    })


    it('Ingresar y Cerrar sesión', () => {
    
      cy.get('#username').type('f.balderian@mercapsoftware.com')
      cy.get('#password').type('Mercap2022')
      cy.get('.c22fea258 > .cf1ef5a0b').click()
      cy.wait(20000)
      cy.origin('https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio', () => {

      //cy.get('svg[class="svg-inline--fa fa-circle-exclamation fa-lg"]').should('not.exist') ** Con esto puedo buscar todos los cartelitos de advertencias de la página
      cy.get('.mr-auto > h3').should('have.text', 'Hola f.balderian@mercapsoftware.com')     
      cy.url().should('eq','https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio')
      cy.location('protocol').should('contains','https')
      cy.get('#sidenav-list > :nth-child(1)').should('contain.text','Home')
      cy.get('#sidenav-list > :nth-child(2)').should('contain.text','Mis operaciones')
      cy.get('#sidenav-list > :nth-child(3)').should('contain.text','Mi dinero')
      cy.get('#sidenav-list > :nth-child(4)').should('contain.text','Mis portfolios')
      cy.get('#sidenav-list > :nth-child(5)').should('contain.text','Resultado')
      cy.get('#sidenav-list > :nth-child(6)').should('contain.text','Agenda')
      cy.get('#sidenav-list > :nth-child(7)').should('contain.text','Comparativa')
      cy.get('#sidenav-list > :nth-child(8)').should('contain.text','Ayuda')
      cy.get('#container-id11').click()
      cy.get('.col-9').should('contain.text','f.balderian@mercapsoftware.com')
      cy.get('.row > :nth-child(2) > .btn').click()
      cy.wait(3000)
      cy.url().should('not.eq','https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio')



        

    
    })
     
    })

    it('Olvidó Contraseña', () => {

        cy.get('.cdc5ed3fa').should('have.text', 'Welcome')
        cy.contains('Forgot password?').click()
        cy.wait(1000)
        cy.get('.cccd81a90').click()
        cy.wait(1000)
        cy.contains('Forgot password?').click()
        cy.wait(1000)
        cy.get('.cdc5ed3fa').should('have.text', 'Forgot Your Password?')
        cy.get('#email').type('testing@gmail.com')
        cy.wait(1000)
        cy.contains('Continue').click()
        cy.get('.c3a75dd85').should('have.text', 'Check Your Email')
        cy.get('.cf1ef5a0b').click()
        cy.get('.cdc5ed3fa').should('have.text', 'Forgot Your Password?')
        cy.get('.cccd81a90').click()
        cy.get('.cdc5ed3fa').should('have.text', 'Welcome')
    })

      

  
  })
  
  