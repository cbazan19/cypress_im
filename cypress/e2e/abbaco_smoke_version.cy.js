/// <reference types="cypress" />



describe('Smoke Testing Abbaco Version', () => 
{
    beforeEach("Precondición: LogIn", () => 
    {

        cy.LoginAbbaco("cy_smoke@mercapsoftware.com","testing1")

    })

   
 

    it('Validación de todos los cuadros del Home e Ingreso y Recorrido en Analizar con Especie tipo C', () => 
    {

        cy.get('.card-body').should('exist').and('be.visible')
        cy.get('input[class="input-sm border-0 p-0 shadow-none form-control"]').should('exist').and('be.visible').click().type('GD30')
        cy.get('div[class="w-100 top-100 start-0 border-0 p-0  list-group dropdown-menu show"]', {timeout:50000}, {timeout:50000}).should('exist').and('be.visible').eq(0).click()
        cy.contains('Analizar').click({force: true})
        cy.get('ul[class="mb-3 nav nav-underline', {timeout:50000}).should('exist').and('be.visible').and('contain.text', 'General').and('contain.text', 'Condiciones de Emisión').and('contain.text', 'Análisis de Sensibilidad').and('contain.text', 'TIR Históricas').and('contain.text', 'Paridades Históricas').and('contain.text', 'Simular Inversión')
        cy.get('.card-body', {timeout:50000}).should('exist').and('be.visible').and('contain.text', 'TIR').and('contain.text', 'TIR').and('contain.text', 'M. Duration').and('contain.text', 'Última Cotización').and('contain.text', 'Paridad').and('contain.text', 'Cotizaciones Históricas Clean').and('contain.text', 'Métricas secundarias').and('contain.text', 'Cashflow')
        cy.contains('Condiciones de Emisión').click({force: true})
        cy.get('.card-body', {timeout:50000}).should('exist').and('be.visible').and('contain.text', 'Información básica').and('contain.text', 'Pagos').and('contain.text', 'Cupones')
        cy.contains('Análisis de Sensibilidad').click({force: true})
        cy.get('div[class="d-flex align-items-center col-xxl-9 col-sm-12"]', {timeout:50000}).should('exist').and('be.visible')
        cy.contains('TIR Históricas').click({force: true})
        cy.get('rect[class="highcharts-background"]').should('exist').and('be.visible')
        cy.contains('Paridades Históricas').click({force: true})
        cy.get('rect[class="highcharts-background"]').should('exist').and('be.visible')
        cy.contains('Simular Inversión').click({force: true})
        cy.get('div[class="gy-4 row"]').should('exist').and('be.visible')
        cy.get('button[class="float-end btn btn-primary"]').eq(0).should('exist').and('be.visible').and('have.text', 'Simular')
        

    })
      

    it('Armado de escenarios en Análisis de Sensibilidad', () => 
    {

        cy.get('.card-body').should('exist').and('be.visible')
        cy.get('input[class="input-sm border-0 p-0 shadow-none form-control"]').should('exist').and('be.visible').click().type('GD30')
        cy.get('div[class="w-100 top-100 start-0 border-0 p-0  list-group dropdown-menu show"]', {timeout:50000}).should('exist').and('be.visible').eq(0).click()
        cy.contains('Analizar').click({force: true})
        cy.get('ul[class="mb-3 nav nav-underline').should('exist').and('be.visible').and('contain.text', 'General').and('contain.text', 'Condiciones de Emisión').and('contain.text', 'Análisis de Sensibilidad').and('contain.text', 'TIR Históricas').and('contain.text', 'Paridades Históricas').and('contain.text', 'Simular Inversión')
        cy.get('.card-body', {timeout:50000}).should('exist').and('be.visible').and('contain.text', 'TIR').and('contain.text', 'TIR').and('contain.text', 'M. Duration').and('contain.text', 'Última Cotización').and('contain.text', 'Paridad').and('contain.text', 'Cotizaciones Históricas Clean').and('contain.text', 'Métricas secundarias').and('contain.text', 'Cashflow')
        cy.contains('Análisis de Sensibilidad').click({force: true})
        cy.get('div[class="d-flex align-items-center col-xxl-9 col-sm-12"]', {timeout:50000}).should('exist').and('be.visible')
        cy.get('#numberOfScenarios').should('exist').and('be.visible').click().type('4')
        cy.get('#spreadVariation').should('exist').and('be.visible').click().type('4')
        cy.get('.col-xxl-1 > .mb-3').should('exist').and('be.visible').and('have.text', 'Calcular').click()
        cy.get('.col-xxl-5').should('exist').and('be.visible')
        cy.get('.mb-3.col-xxl-7').should('exist').and('be.visible')

        
    })

    it('Uso de Simular Inversión', () => 
    {

        cy.get('.card-body').should('exist').and('be.visible')
        cy.get('input[class="input-sm border-0 p-0 shadow-none form-control"]').should('exist').and('be.visible').click().type('GD30')
        cy.get('div[class="w-100 top-100 start-0 border-0 p-0  list-group dropdown-menu show"]', {timeout:50000}).should('exist').and('be.visible').eq(0).click()
        cy.contains('Analizar').click({force: true})
        cy.get('ul[class="mb-3 nav nav-underline', {timeout:50000}).should('exist').and('be.visible').and('contain.text', 'General').and('contain.text', 'Condiciones de Emisión').and('contain.text', 'Análisis de Sensibilidad').and('contain.text', 'TIR Históricas').and('contain.text', 'Paridades Históricas').and('contain.text', 'Simular Inversión')
        cy.get('.card-body', {timeout:50000}).should('exist').and('be.visible').and('contain.text', 'TIR').and('contain.text', 'TIR').and('contain.text', 'M. Duration').and('contain.text', 'Última Cotización').and('contain.text', 'Paridad').and('contain.text', 'Cotizaciones Históricas Clean').and('contain.text', 'Métricas secundarias').and('contain.text', 'Cashflow')
        cy.contains('Simular Inversión').click({force: true})
        cy.get('#investmentAmount', {timeout:50000}).should('exist').and('be.visible').click({force: true}).type('100000')
        cy.get('#value').should('exist').and('be.visible').click({force: true}).type('5000')
        cy.get('#exchangeRate').should('exist').and('be.visible').click({force: true}).type('2000')
        cy.get('button[class="float-end btn btn-primary"]').eq(0).should('exist').and('be.visible').and('have.text', 'Simular').click({force: true})
        cy.get('.col-xl-4').should('exist').and('be.visible')
        cy.get('.col-xl-5').should('exist').and('be.visible')

   
    })

    it('Curvas', () => 
    {

    // Hace click en un tipo de curva, recorre sus pestañas y espera que se muestre la información (se saca validación que se pueda ir a Analizar desde la curva seleccionada)

        cy.contains('CURVAS').should('exist').and('be.visible').click()
        cy.wait(1000)
        cy.contains('Argentina - ONs - USD - Ley Argentina', {timeout:50000}).should('exist').and('be.visible').click({force: true})
        cy.get('rect[class="highcharts-background"]', {timeout:50000}).should('exist').and('be.visible')
        cy.get(':nth-child(1) > .highcharts-a11y-proxy-button', {timeout:50000}).should('exist').and('be.visible')
        cy.get(':nth-child(16) > :nth-child(1) > .p-0', {timeout:50000}).scrollIntoView().should('exist').and('be.visible').click({force: true})
        cy.get('li[class="d-flex justify-content-between align-items-start border-0 border-bottom list-group-item"]', {timeout:50000}).should('exist').and('be.visible')
        cy.contains('Análisis online').should('exist').and('be.visible').click({force: true})
        cy.get('.card-body > .table > tbody > :nth-child(4) > :nth-child(1) > .p-0', {timeout:50000}).should('exist').and('be.visible').click({force: true})
        cy.get('li[class="d-flex justify-content-between align-items-start border-0 border-bottom list-group-item"]', {timeout:50000}).should('exist').and('be.visible')
        cy.contains('Bonos fuera de la curva').should('exist').and('be.visible').click({force: true})
        cy.contains('RAC4O', {timeout:50000}).should('exist').and('be.visible').click({force: true})
        cy.get('li[class="d-flex justify-content-between align-items-start border-0 border-bottom list-group-item"]', {timeout:50000}).should('exist').and('be.visible')
 
    })
    


    it('Mi Portafolio', () => 
    {

    // Agregar especie y nominales y luego verificar que se visualice la posición correctamente

        cy.contains('MI PORTAFOLIO').should('exist').and('be.visible').click()
        cy.wait(1500)
        cy.get('.table-responsive', {timeout:50000}).should('exist').and('be.visible').and('contain.text', 'Bono').and('contain.text', 'Nombre').and('contain.text', 'Moneda').and('contain.text', 'Nominales').and('contain.text', 'Precio').and('contain.text', 'Valorizado')
        cy.get('#bond').should('exist').and('be.visible').click({force: true}).type('AL30')
        cy.get('a[class="text-truncate overflow-hidden text-break  list-group-item list-group-item-action dropdown-item"]', {timeout:50000}).should('exist').and('be.visible').click({force: true})
        cy.get('#nominals').should('exist').and('be.visible').click({force: true}).type('10000')
        cy.contains('Agregar').should('exist').and('be.visible').click({force: true})
        cy.get('.mb-3 > .card > .card-body').should('exist').and('be.visible')
        cy.get('.col-lg-6 > .card > .card-body').should('exist').and('be.visible')
        cy.get('tr > :nth-child(1) > .p-0', {timeout:50000}).should('exist').and('be.visible')

    // Eliminar la Posición creada previamente  

        cy.contains('MI PORTAFOLIO').should('exist').and('be.visible').click()
        cy.wait(1500)
        cy.get('button[class="badge px-1 py-1 btn btn-danger"]', {timeout:50000}).should('exist').and('be.visible').click({force: true})
        cy.get('td[class="text-center"]', {timeout:50000}).should('exist').and('be.visible').and('have.text', 'Añada especies utilizando el formulario de arriba para comenzar')

    // Vuelve a crear la posicion para recorrer las pestañas de Proyección y Agenda de Cortes

        cy.get('#bond').should('exist').and('be.visible').click({force: true}).type('AL30')
        cy.get('a[class="text-truncate overflow-hidden text-break  list-group-item list-group-item-action dropdown-item"]', {timeout:50000}).should('exist').and('be.visible').click({force: true})    
        cy.get('#nominals').should('exist').and('be.visible').click({force: true}).type('10000')
        cy.contains('Agregar').should('exist').and('be.visible').click({force: true})
        cy.get('.mb-3 > .card > .card-body').should('exist').and('be.visible')
        cy.get('.col-lg-6 > .card > .card-body').should('exist').and('be.visible')    
        cy.contains('Proyección', {timeout:50000}).should('exist').and('be.visible').click({force: true})
        cy.get('tbody > :nth-child(3) > :nth-child(1) > div', {timeout:50000}).should('exist').and('be.visible')
        cy.get('.card-body').should('exist').and('be.visible')
        cy.contains('Agenda de Cortes', {timeout:50000}).should('exist').and('be.visible').click({force: true})
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .float-end', {timeout:50000}).should('exist').and('be.visible')
        cy.get('.card-body').should('exist').and('be.visible')
        
   
    })    

    it.only('Comparar', () => 
    {

    // Agregar especie y nominales y luego verificar que se pueda ir a Analizar desde la pestaña Posición
    
        cy.contains('COMPARAR').should('exist').and('be.visible').click()
        cy.get('#search').should('exist').and('be.visible').click({force: true}).type('AL30')
        cy.get('a[class="text-truncate overflow-hidden text-break  list-group-item list-group-item-action dropdown-item"]', {timeout:50000}).should('exist').and('be.visible').eq(0).click({force: true})
        cy.contains('Añadir').should('exist').and('be.visible').click({force: true})
        cy.get('.table-responsive', {timeout:50000}).should('exist').and('be.visible')
        cy.get('tr > :nth-child(1) > a', {timeout:50000}).should('exist').and('be.visible').click({force: true})
        cy.get('ul[class="mb-3 nav nav-underline', {timeout:50000}).should('exist').and('be.visible').and('contain.text', 'General').and('contain.text', 'Condiciones de Emisión').and('contain.text', 'Análisis de Sensibilidad').and('contain.text', 'TIR Históricas').and('contain.text', 'Paridades Históricas').and('contain.text', 'Simular Inversión')
        cy.get('.card-body', {timeout:50000}).should('exist').and('be.visible').and('contain.text', 'TIR').and('contain.text', 'TIR').and('contain.text', 'M. Duration').and('contain.text', 'Última Cotización').and('contain.text', 'Paridad').and('contain.text', 'Cotizaciones Históricas Clean').and('contain.text', 'Métricas secundarias').and('contain.text', 'Cashflow')
        cy.contains('COMPARAR').should('exist').and('be.visible').click()
        cy.get(':nth-child(2) > .p-0', {timeout:50000}).should('exist').and('be.visible').click()
        cy.get('.list-group > :nth-child(1) > a', {timeout:50000}).should('exist').and('be.visible').click({force: true})
        cy.get('ul[class="mb-3 nav nav-underline', {timeout:50000}).should('exist').and('be.visible').and('contain.text', 'General').and('contain.text', 'Condiciones de Emisión').and('contain.text', 'Análisis de Sensibilidad').and('contain.text', 'TIR Históricas').and('contain.text', 'Paridades Históricas').and('contain.text', 'Simular Inversión')
        cy.get('.card-body', {timeout:50000}).should('exist').and('be.visible').and('contain.text', 'TIR').and('contain.text', 'TIR').and('contain.text', 'M. Duration').and('contain.text', 'Última Cotización').and('contain.text', 'Paridad').and('contain.text', 'Cotizaciones Históricas Clean').and('contain.text', 'Métricas secundarias').and('contain.text', 'Cashflow')
        cy.contains('COMPARAR').should('exist').and('be.visible').click()
        cy.contains('Condiciones de Emisión').should('exist').and('be.visible').click({force: true})
        cy.get('.table-responsive', {timeout:50000}).should('exist').and('be.visible')
        cy.contains('TIR Históricas').should('exist').and('be.visible').click({force: true})
        cy.get('rect[class="highcharts-background', {timeout:50000}).should('exist').and('be.visible')
        cy.contains('Paridades Históricas').should('exist').and('be.visible').click({force: true})
        cy.get('rect[class="highcharts-background', {timeout:50000}).should('exist').and('be.visible')
            
    // Ir a la pestaña Analizar y borrar la comparativa

        cy.contains('Análisis').should('exist').and('be.visible').click({force: true})  
        cy.wait(1000)
        cy.get('tr > :nth-child(1) > a', {timeout:50000}).should('exist').and('be.visible')
        cy.get(':nth-child(12) > .badge > .svg-inline--fa > path').should('exist').and('be.visible').click({force: true})
        cy.get('td[class="text-center"]', {timeout:50000}).should('exist').and('be.visible').and('have.text', 'Agregue especies utilizando el formulario para comenzar')
        

    })    


    it('Arbitraje', () => 
    {

    // Añade dos especies para arbitrar, luego recorre las pestañas y verifica que se carguen los datos de cada una
    
        cy.contains('ARBITRAJE').should('exist').and('be.visible').click()
        cy.get('#first-security > .d-flex > .input-sm').should('exist').and('be.visible').click({force: true}).type('GD30')
        cy.get('a[class="text-truncate overflow-hidden text-break  list-group-item list-group-item-action dropdown-item"]', {timeout:50000}).should('exist').and('be.visible').eq(2).click({force: true})
        cy.get('#second-security > .d-flex > .input-sm').should('exist').and('be.visible').click({force: true}).type('AL30')
        cy.get('a[class="text-truncate overflow-hidden text-break  list-group-item list-group-item-action dropdown-item"]', {timeout:50000}).should('exist').and('be.visible').eq(2).click({force: true})
        cy.contains('Arbitrar').should('exist').and('be.visible').click({force: true})
        cy.get('.card-body', {timeout:50000}).should('exist').and('be.visible')
        cy.get('.highcharts-menu-wrapper', {timeout:50000}).should('exist').and('be.visible')
        cy.contains('Paridad').should('exist').and('be.visible').click({force: true})
        cy.get('.card-body', {timeout:50000}).should('exist').and('be.visible')
        cy.get('.highcharts-menu-wrapper', {timeout:50000}).should('exist').and('be.visible')
        cy.contains('Inversión').should('exist').and('be.visible').click({force: true})
        cy.get('.table-responsive', {timeout:50000}).should('exist').and('be.visible')
        cy.contains('Scatter').should('exist').and('be.visible').click({force: true})
        cy.get('.card-body', {timeout:50000}).should('exist').and('be.visible')
        cy.get('rect[class="highcharts-background"]', {timeout:50000}).should('exist').and('be.visible')
        
        
    })       


    it('Sensibilidad', () => 
    {

    // Agregar especie y escenario
        
        cy.contains('SENSIBILIDAD').should('exist').and('be.visible').click()
        cy.get('#search-security-for-sensitivity', {timeout:50000}).should('exist').and('be.visible').click({force: true}).type('AL30')
        cy.get('a[class="text-truncate overflow-hidden text-break  list-group-item list-group-item-action dropdown-item"]', {timeout:50000}).should('exist').and('be.visible').eq(2).click({force: true})
        cy.contains('Agregar Escenario').should('exist').and('be.visible').click({force: true})
        cy.get('#scenario-first', {timeout:50000}).should('exist').and('be.visible').click({force: true}).type('5')
        cy.contains('Aceptar').should('exist').and('be.visible').click({force: true})
        cy.get('.m-2', {timeout:50000}).should('exist').and('be.visible')
        cy.get('button[class="float-end float-lg-start btn btn-primary"]', {timeout:50000}).should('exist').and('be.visible').click({force: true})
        cy.get(':nth-child(2) > a', {timeout:50000}).should('exist').and('be.visible') 
        cy.get(':nth-child(2) > .placeholder-glow > .col-12', {timeout:50000}).should('exist').and('be.visible') 
    
    // Eliminar Escenario

        cy.get(':nth-child(2) > .badge', {timeout:50000}).should('exist').and('be.visible').click({force: true})
        cy.get('.m-2').should('not.exist')
        
    // Eliminar Especie

        cy.get(':nth-child(1) > .badge', {timeout:50000}).should('exist').and('be.visible').click({force: true})    
        cy.get('td[class="text-center"]', {timeout:50000}).should('exist').and('be.visible').and('have.text', 'Agregue una especie para comenzar')  
        

    })       
    

    it('Screener', () => 
    {

    // Realiza filtro, busqueda y espera que aparezca el resultado
        
        cy.contains('SCREENER').should('exist').and('be.visible').click()
        cy.get('[for="Obligación Negociable"]', {timeout:50000}).should('exist').and('be.visible').click()
        cy.contains('Seleccionar Moneda de Emisión', {timeout:50000}).should('exist').and('be.visible').click({force: true})
        cy.contains('USD', {timeout:50000}).should('exist').and('be.visible').click({force: true})
        cy.contains('Seleccionar Ley', {timeout:50000}).should('exist').and('be.visible').click({force: true})
        cy.contains('Ley Argentina', {timeout:50000}).should('exist').and('be.visible').click({force: true})
        cy.contains('Seleccionar Emisor', {timeout:50000}).should('exist').and('be.visible').click({force: true})
        cy.get('#form-control-Emisor', {timeout:50000}).should('exist').and('be.visible').click({force: true}).type('YPF S.A.')
        cy.contains('YPF S.A.', {timeout:50000}).should('exist').and('be.visible').click({force: true})
        cy.contains('Buscar').should('exist').and('be.visible').click({force: true})
        cy.get('.card-body', {timeout:50000}).should('exist').and('be.visible')
        cy.contains('YMC1O', {timeout:50000}).should('exist').and('be.visible')
        

    })     


    it('Graficador', () => 
    {

    // Selecciona todas las curvas, las grafica y espera que se muestren
        
        cy.contains('GRAFICADOR').should('exist').and('be.visible').click()
        cy.contains('Seleccionar Curvas', {timeout:50000}).should('exist').and('be.visible').click({force: true})
        cy.get(':nth-child(1) > .text-wrap > span', {timeout:50000}).should('exist').and('be.visible')
        cy.contains('Todos', {timeout:50000}).should('exist').and('be.visible').click({force: true})
        cy.contains('Graficar', {timeout:50000}).should('exist').and('be.visible').click({force: true})
        cy.get(':nth-child(20) > .highcharts-a11y-proxy-button', {timeout:50000}).should('exist').and('be.visible')

    // Va a la pestaña Especies ingresa, selecciona, la grafica y espera que se muestre 

        cy.contains('Especies').should('exist').and('be.visible').click({force: true})
        cy.get('#security-ticker').should('exist').and('be.visible').type('AL30')
        cy.get('a[class="text-truncate overflow-hidden text-break  list-group-item list-group-item-action dropdown-item"]', {timeout:50000}).should('exist').and('be.visible').eq(1).click({force: true})
        cy.get('.mb-3 > .float-end', {timeout:50000}).should('exist').and('be.visible').click({force: true})
        cy.get('.highcharts-menu-wrapper', {timeout:50000}).should('exist').and('be.visible')

    
    })         

  
    
})
  
  