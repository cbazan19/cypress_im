/// <reference types="cypress" />



describe('Smoke Testing Abbaco Prod', () => 
{
    beforeEach("Precondición: LogIn", () => 
    {

        cy.LoginAbbaco("cy_smoke@mercapsoftware.com","testing1")

    })

   

    it('Validación del home, armado escenarios en Análisis de Sensibilidad y uso de Simular Inversión', () => 
    {
    // Se realiza validaciones de carga de los elementos del home, luego ingresa el AL30 y hace click en Analizar, y en cada pestaña valida la carga de datos

        cy.get('.card-body').should('exist').and('be.visible')
        cy.get('input[class="input-sm border-0 p-0 shadow-none form-control"]').should('exist').and('be.visible').click().type('AL30')
        cy.get('div[class="w-100 top-100 start-0 border-0 p-0  list-group dropdown-menu show"]', {timeout:50000}, {timeout:50000}).should('exist').and('be.visible').eq(0).click()
        cy.contains('Analizar').click({force: true})
        cy.get('ul[class="mb-3 nav nav-underline', {timeout:50000}).should('exist').and('be.visible').and('contain.text', 'General').and('contain.text', 'Condiciones de Emisión').and('contain.text', 'Análisis de Sensibilidad').and('contain.text', 'TIR Históricas').and('contain.text', 'Paridades Históricas').and('contain.text', 'Simular Inversión')
        cy.get('.card-body', {timeout:50000}).should('exist').and('be.visible').and('contain.text', 'TIR').and('contain.text', 'TIR').and('contain.text', 'M. Duration').and('contain.text', 'Última Cotización').and('contain.text', 'Paridad').and('contain.text', 'Cotizaciones Históricas Clean').and('contain.text', 'Métricas secundarias').and('contain.text', 'Cashflow')
        cy.contains('Condiciones de Emisión').click({force: true})
        cy.get('.card-body', {timeout:50000}).should('exist').and('be.visible').and('contain.text', 'Información básica').and('contain.text', 'Pagos').and('contain.text', 'Cupones')
        cy.contains('Análisis de Sensibilidad').click({force: true})
        cy.get('div[class="d-flex align-items-center col-xxl-9 col-sm-12"]', {timeout:50000}).should('exist').and('be.visible')
        cy.get('#numberOfScenarios').should('exist').and('be.visible').click().type('4')
        cy.get('#spreadVariation').should('exist').and('be.visible').click().type('4')
        cy.get('.col-xxl-1 > .mb-3').should('exist').and('be.visible').and('have.text', 'Calcular').click()
        cy.get('.col-xxl-5').should('exist').and('be.visible')
        cy.get('.mb-3.col-xxl-7').should('exist').and('be.visible')
        cy.contains('TIR Históricas').click({force: true})
        cy.get('rect[class="highcharts-background"]').should('exist').and('be.visible')
        cy.contains('Paridades Históricas').click({force: true})
        cy.get('rect[class="highcharts-background"]').should('exist').and('be.visible')
        cy.contains('Simular Inversión').click({force: true})
        cy.get('div[class="gy-4 row"]').should('exist').and('be.visible')
        cy.get('button[class="float-end btn btn-primary"]').eq(0).should('exist').and('be.visible').and('have.text', 'Simular')
        cy.get('#investmentAmount', {timeout:50000}).should('exist').and('be.visible').click({force: true}).type('100000')
        cy.get('#value').should('exist').and('be.visible').click({force: true}).clear().type('5000')
        cy.get(':nth-child(5) > #exchangeRate').should('exist').and('be.visible').click({force: true}).type('2000')
        cy.get('button[class="float-end btn btn-primary"]').eq(0).should('exist').and('be.visible').and('have.text', 'Simular').click({force: true})
        cy.get('.col-xl-4 > .card > .card-body > .table-responsive > .my-3 > tbody > :nth-child(1) > :nth-child(1) > .small', {timeout:50000}).should('exist').and('be.visible')
        cy.get('.col-xl-4').should('exist').and('be.visible')
        cy.get('.col-xl-5').should('exist').and('be.visible')

        

    })
      

    it('Mi Portafolio', () => 
    {

    // Verifica especie en el portfolio, recorre las pestañas y en cada una valida la carga de datos

        cy.contains('MI PORTAFOLIO').should('exist').and('be.visible').click()
        cy.get('.table-responsive', {timeout:50000}).should('exist').and('be.visible').and('contain.text', 'Bono').and('contain.text', 'Nombre').and('contain.text', 'Moneda').and('contain.text', 'Nominales').and('contain.text', 'Precio').and('contain.text', 'Valorizado')

    // Agregar especie opcional    

    /*    cy.get('#bond').should('exist').and('be.visible').click({force: true}).type('AL30')
        cy.get('a[class="text-truncate overflow-hidden text-break  list-group-item list-group-item-action dropdown-item"]', {timeout:50000}).should('exist').and('be.visible').click({force: true})
        cy.get('#nominals').should('exist').and('be.visible').click({force: true}).type('10000')
        cy.contains('Agregar').should('exist').and('be.visible').click({force: true})   */

        cy.get('tr > :nth-child(1) > .p-0', {timeout:50000}).should('exist').and('be.visible').eq(0).click({force: true})
        cy.get('li[class="d-flex justify-content-between align-items-start border-0 border-bottom list-group-item"]', {timeout:50000}).should('exist').and('be.visible')
        cy.get('.mb-3 > .card > .card-body').should('exist').and('be.visible')
        cy.get('.col-lg-6 > .card > .card-body').should('exist').and('be.visible')
        cy.get('tr > :nth-child(1) > .p-0').should('exist').and('be.visible')
        cy.contains('Proyección', {timeout:50000}).should('exist').and('be.visible').click({force: true})
        cy.get('tbody > :nth-child(3) > :nth-child(1) > div', {timeout:50000}).should('exist').and('be.visible')
        cy.get('.card-body').should('exist').and('be.visible')
        cy.contains('Agenda de Cortes', {timeout:50000}).should('exist').and('be.visible').click({force: true})
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .float-end', {timeout:50000}).should('exist').and('be.visible')
        cy.get('.card-body').should('exist').and('be.visible')
        
   
    })    

    
    
})
  
  