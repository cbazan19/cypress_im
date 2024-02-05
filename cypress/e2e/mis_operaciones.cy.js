/// <reference types="cypress" />



describe('Menú Mis Operaciones', () => 
{

    it.only("Precondición: LogIn", () => 
    {
        cy.LoginMisOperaciones("f.balderian@mercapsoftware.com","Mercap2022")

    })


    it("Registro de Bono", () => 
    {
        cy.origin('https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio/trading', () => {
  

        // Validación de los distintos menús mostrados, desde Home hasta Ayuda

        cy.get('#sidenav-list > :nth-child(1)').should('contain.text','Home')
        cy.get('#sidenav-list > :nth-child(2)').should('contain.text','Mis operaciones')
        cy.get('#sidenav-list > :nth-child(3)').should('contain.text','Mi dinero')
        cy.get('#sidenav-list > :nth-child(4)').should('contain.text','Mis portfolios')
        cy.get('#sidenav-list > :nth-child(5)').should('contain.text','Resultado')
        cy.get('#sidenav-list > :nth-child(6)').should('contain.text','Rendimiento')
        cy.get('#sidenav-list > :nth-child(7)').should('contain.text','Agenda')
        cy.get('#sidenav-list > :nth-child(8)').should('contain.text','Comparativa')
        cy.get('#sidenav-list > :nth-child(9)').should('contain.text','Ayuda')

        // Ingreso al menú Mis Operaciones

        //cy.get('#sidenav-list > :nth-child(2)').click()
        
        // Validación del h3

        cy.get('.mr-auto > h3').should('have.text', 'Mis operaciones')

        // Validación de que existan los botones Movimientos de Títulos, Importar Operaciones y Registrar operación

        cy.url().should('eq','https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio/trading')
        cy.location('protocol').should('contains','https')
        cy.get('.p-2 > .row').should('contain.text','Registrar operación').and('contain.text','Importar operaciones')//.and('contain.text','Movimientos de Títulos')

        // Validaciones de los filtros

        cy.get('.trades-filters-backdrop').should('exist')
        cy.get(':nth-child(2) > .dropdown > .dropdown-toggle').should('exist').and('be.visible').and('contain.text','Seleccionar moneda de pago')
        cy.get(':nth-child(5) > .dropdown > .dropdown-toggle').should('exist').and('be.visible').and('contain.text','Seleccionar tipo de operatoria')
        cy.get(':nth-child(6) > .dropdown > .dropdown-toggle').should('exist').and('be.visible').and('contain.text','Seleccionar tipo de instrumento')
        cy.get('form > :nth-child(1) > :nth-child(3)').should('exist').and('contain.text','Filtrar')

        // Validaciones del cuadro Operaciones

        cy.get('form > :nth-child(1) > :nth-child(3)').should('exist').and('contain.text','Filtrar')
        cy.get('.dt-buttons > .btn-group > .btn').should('exist')                                   
        cy.get('.buttons-excel').should('exist')
        cy.get('.buttons-copy').should('exist')
        cy.get('.buttons-print').should('exist')
        cy.get('[aria-label="Depositario: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Depositario')
        cy.get('[aria-label="Tipo de Operación: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Tipo de Operación')
        cy.get('[aria-label="Tipo de Activo: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Tipo de Activo')
        cy.get('[aria-label="Fecha Concertación: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Fecha Concertación')
        cy.get('.sorting_desc').should('exist').and('be.visible').and('contain.text','Fecha Liquidación')
        cy.get('[aria-label="Nominal/Capital: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Nominal/Capital')
        cy.get('[aria-label="Activo: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Activo')
        cy.get('[aria-label="Precio/TNA: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Precio/TNA')
        cy.get('[aria-label="Bruto: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Bruto')
        cy.get('[aria-label="Gastos: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Gastos')
        cy.get('[aria-label="Neto: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Neto')
        cy.get('[aria-label="Moneda: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Moneda')
        cy.get('[aria-label="Identificador: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Identificador')

        // Agregar Depositario
        /*
        cy.get('svg[class="svg-inline--fa fa-circle-plus fa-lg"]').click()
        cy.get('.modal-title').should('exist').and('be.visible').and('have.text','Agregar cuenta de depositario')
        cy.get('.modal-body').should('exist').and('be.visible').and('contain.text','Seleccionar depositario')
        cy.get('div[class="filter-option-inner-inner"]').eq(3).click()
        cy.get('.bs-searchbox > .form-control').type('Santander')
        cy.get('.text').click()
        cy.get('button[class="btn btn-primary"]').click()
        cy.get('.alert').should('contain.text','×Cuenta de depositario: El nombre de referencia no puede ser vacio')
        cy.get('input[placeholder="Ingrese un nombre de referencia"]').click().type('Santander{enter}')
        cy.get('button[class="btn btn-primary"]').click()
        cy.get('div[class="d-flex depositary-user-tenant-filters"]').should('contain.text','Santander')
        */
        // Eliminar Depositario
        /*
        cy.get('svg[class="svg-inline--fa fa-circle-xmark"]').eq(2).click()
        cy.get('button[class="btn btn-primary"]').click()
        cy.get('div[class="d-flex depositary-user-tenant-filters"]').should('not.contain.text','Santander')
        */

        // Registrar Operación de Bono

        cy.get('.nav > .btn').eq(2).click()
        cy.get('a[class="dropdown-item"]').eq(4).click()
        cy.get('.modal-title').eq(0).should('have.text', 'Operación de Bono')
        
        // Compra de Bonos plazo T+2 mercado ByMA especie AL30 PESOS 100.000 nominales precio 5.000 cada 100

        cy.get('input[value="1"]').click({force: true})
        //cy.get('.label.btn').eq(0).click({force: true})
        cy.get('div[class="filter-option-inner-inner"]').eq(3).click()
        cy.get('input[placeholder="Buscar... "]').eq(0).click().type('ICBC (CFI)')
        cy.get('.text').click() // cambiar este selector porque tiene id dinámico // cy.get('[data-layer="Content"]')
        cy.get('input[class="form-control text-right"]').eq(0).click().type('100000')
        cy.get('input[class="form-control text-right"]').eq(1).click().type('5000')
        cy.get('button[class="btn dropdown-toggle btn-light bs-placeholder"]').click()
        cy.get('span[class="text"').eq(1).click() // cambiar este selector porque tiene id dinámico y si lo hago por texto va a depender lo que tenga cargado previamente
        cy.get('input[class="form-control text-right"]').should('contain.value','100')
        cy.get('input[placeholder="Ingresar especie"]').click().type('AL30') 
        cy.get('.typeahead > :nth-child(2) > .dropdown-item').click()

        // Agregar impuestos o comisiones

        cy.get('svg[class="svg-inline--fa fa-chevron-right"]').click()
        cy.get('svg[class="svg-inline--fa fa-plus fa-lg"]').click()
        cy.get('button[class="btn dropdown-toggle btn-light bs-placeholder"]').eq(0).click()
        cy.get('input[placeholder="Buscando moneda... "]').eq(0).click().type('ARS{enter}')
        cy.get('input[placeholder="Ingresar cantidad"]').eq(1).click().type('1050000')
        cy.get('button[class="btn btn-primary"]').eq(1).click()
        cy.get('table[class="table table-sm table-striped table-bordered dataTable no-footer"]').should('be.visible').and('contain.text', '1.050.000,00')
        cy.get('div[class="heading d-flex align-items-center mt-2"]').eq(1).should('contain.text','Total Gastos1.050.000,00')
        cy.get('div[class="heading d-flex align-items-center mt-2"]').eq(2).should('contain.text','Total Neto6.050.000,00')
        cy.get('button[class="btn btn-primary"]').eq(0).click()
        
        // Asignación a Portfolio con Validación de Saldo Negativo

        cy.get('.modal-title').eq(1).should('have.text', 'Registro de operación')
        cy.get('.card-title').should('exist').and('be.visible').and('have.text', 'Agregar nueva asignación')
        cy.get('label[class="col-md-5 col-form-label text-right form-control-sm"]').should('contain.text','Nominales').and('contain.text','Asignados').and('contain.text','Sin asignar')  
        cy.get(':nth-child(3) > .dropdown > .btn').should('exist').and('be.visible').and('have.text', 'Seleccione portfolio a asignar ')
        cy.get('input[class="form-control text-right"]').eq(3).click().type('100000')
        cy.get(':nth-child(3) > .dropdown > .btn').click()
        cy.get('.text').eq(5).click() // cambiar este selector porque tiene id dinámico y si lo hago por texto va a depender lo que tenga cargado previamente
        cy.get('button[class="btn btn-primary"]').eq(1).click()
        cy.get('.card-title').should('exist').and('be.visible').and('have.text', 'CFI')
        /*cy.get('button[class="btn btn-primary"]').eq(1).click()
        cy.get('.alert').should('exist').and('be.visible').and('contain.text','Falló la ejecución')*/
  
        
      })

    })


    it("Operación de Depósito a plazo: Plazo Fijo", () => 
    {
        cy.origin('https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio/trading', () => {
  
         // Validación de los distintos menús mostrados, desde Home hasta Ayuda

        cy.get('#sidenav-list > :nth-child(1)').should('contain.text','Home')
        cy.get('#sidenav-list > :nth-child(2)').should('contain.text','Mis operaciones')
        cy.get('#sidenav-list > :nth-child(3)').should('contain.text','Mi dinero')
        cy.get('#sidenav-list > :nth-child(4)').should('contain.text','Mis portfolios')
        cy.get('#sidenav-list > :nth-child(5)').should('contain.text','Resultado')
        cy.get('#sidenav-list > :nth-child(6)').should('contain.text','Rendimiento')
        cy.get('#sidenav-list > :nth-child(7)').should('contain.text','Agenda')
        cy.get('#sidenav-list > :nth-child(8)').should('contain.text','Comparativa')
        cy.get('#sidenav-list > :nth-child(9)').should('contain.text','Ayuda')
        
        // Validación del h3

        cy.get('.mr-auto > h3').should('have.text', 'Mis operaciones')

        // Validación de que existan los botones Movimientos de Títulos, Importar Operaciones y Registrar operación

        cy.url().should('eq','https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio/trading')
        cy.location('protocol').should('contains','https')
        cy.get('.p-2 > .row').should('contain.text','Registrar operación').and('contain.text','Importar operaciones')//.and('contain.text','Movimientos de Títulos')

        // Validaciones de los filtros

        cy.get('.trades-filters-backdrop').should('exist')
        cy.get(':nth-child(2) > .dropdown > .dropdown-toggle').should('exist').and('be.visible').and('contain.text','Seleccionar moneda de pago')
        cy.get(':nth-child(5) > .dropdown > .dropdown-toggle').should('exist').and('be.visible').and('contain.text','Seleccionar tipo de operatoria')
        cy.get(':nth-child(6) > .dropdown > .dropdown-toggle').should('exist').and('be.visible').and('contain.text','Seleccionar tipo de instrumento')
        cy.get('form > :nth-child(1) > :nth-child(3)').should('exist').and('contain.text','Filtrar')

        // Validaciones del cuadro Operaciones

        cy.get('form > :nth-child(1) > :nth-child(3)').should('exist').and('contain.text','Filtrar')
        cy.get('.dt-buttons > .btn-group > .btn').should('exist')                                   
        cy.get('.buttons-excel').should('exist')
        cy.get('.buttons-copy').should('exist')
        cy.get('.buttons-print').should('exist')
        cy.get('[aria-label="Depositario: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Depositario')
        cy.get('[aria-label="Tipo de Operación: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Tipo de Operación')
        cy.get('[aria-label="Tipo de Activo: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Tipo de Activo')
        cy.get('[aria-label="Fecha Concertación: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Fecha Concertación')
        cy.get('.sorting_desc').should('exist').and('be.visible').and('contain.text','Fecha Liquidación')
        cy.get('[aria-label="Nominal/Capital: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Nominal/Capital')
        cy.get('[aria-label="Activo: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Activo')
        cy.get('[aria-label="Precio/TNA: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Precio/TNA')
        cy.get('[aria-label="Bruto: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Bruto')
        cy.get('[aria-label="Gastos: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Gastos')
        cy.get('[aria-label="Neto: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Neto')
        cy.get('[aria-label="Moneda: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Moneda')
        cy.get('[aria-label="Identificador: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Identificador')

        // Operación de Depósito a plazo: Plazo Fijo

        cy.get('.nav > .btn').eq(2).click()
        cy.get('a[class="dropdown-item"]').eq(7).click()
        cy.get('.modal-title').eq(0).should('have.text', 'Operación de Depósito a plazo')
        
        // Plazo Fijo 30 días PESOS 1.000.000 TNA 133

        cy.get('input[value="1"]').click({force: true})
        //cy.get('.label.btn').eq(0).click({force: true})
        cy.get('div[class="filter-option-inner-inner"]').eq(3).click()
        cy.get('input[placeholder="Buscar... "]').eq(0).click().type('ICBC (CFI)')
        cy.get('.text').click() // cambiar este selector porque tiene id dinámico // cy.get('[data-layer="Content"]')
        cy.get('input[class="form-control text-right"]').eq(0).click().type('1000000')
        cy.get('input[class="form-control text-right"]').eq(1).click().type('133')
        cy.get('input[placeholder="Ingresar certificado"]').click().type('1234')
        cy.get('button[class="btn dropdown-toggle btn-light bs-placeholder"]').eq(1).click()
        cy.get('#bs-select-6-0').click()
        cy.get('button[class="btn dropdown-toggle btn-light bs-placeholder"]').eq(0).click()
        cy.get('#bs-select-5-0').click()
        cy.get('span[class="form-control-plaintext ml-2"]').eq(0).should('contain.text', '109.315,07').and('contain.text', 'ARS')
        cy.get('span[class="form-control-plaintext ml-2"]').eq(1).should('contain.text', '1.109.315,07').and('contain.text', 'ARS')
        cy.get('button[class="btn btn-primary"]').click()

        // Filtro del cuadro de Operaciones

        cy.get('label > .form-control').click().type('plazo fijo{enter}')

       // Validación en el cuadro de movimientos

        cy.get('table[class="table table-sm dataTable no-footer"]')
        .should('contain.text', 'ICBC (CFI)')
        .and('contain.text', 'Concertación')
        .and('contain.text', 'Plazo fijo')
        .and('contain.text', 'Plazo fijo - 1234')
        .and('contain.text', 'ARS')
        cy.get('td[class="text-right  number-cell"]').should('contain.text','1.000.000,00')
        cy.get('td[class="text-right  number-cell"]').should('contain.text','133,00')

        // Ver detalle de la operación creada (ícono de lupa)

        cy.get('svg[class="svg-inline--fa fa-magnifying-glass"]').eq(0).click()
        cy.get('.modal-header').should('contain.text', 'Detalle de Plazo fijo - 1234')
        cy.get('.modal-body')
        .should('contain.text', 'Capital').and('contain.text', '1.000.000,00').and('contain.text', 'ARS')
        .should('contain.text', 'Monto a cobrar').and('contain.text', '1.109.315,07').and('contain.text', 'ARS')
        .should('contain.text', 'Interés').and('contain.text', '109.315,07').and('contain.text', 'ARS')
        cy.get('input[value="Pendiente"]').should('exist').and('be.visible')
        cy.get('input[value="ICBC (CFI)"]').should('exist').and('be.visible')
        cy.get('button[class="btn btn-secondary"]').click()

        // Modificar operación de Plazo Fijo cambiando su TNA, Capital y Certificado, con chequeo de recálculo de intereses

        cy.get('svg[class="svg-inline--fa fa-pen-to-square"]').eq(0).click()
        cy.get('.modal-header').should('contain.text', 'Concertación')
        cy.get('input[class="form-control text-right"]').eq(0).click().clear().type('2000000')
        cy.get('input[class="form-control text-right"]').eq(1).click().clear().type('150')
        cy.get('input[placeholder="Ingresar certificado"]').click().clear().type('12345')
        cy.get('button[class="btn btn-primary"]').click()
        cy.get('span[class="form-control-plaintext ml-2"]').eq(0).should('contain.text', '246.575,34').and('contain.text', 'ARS')
        cy.get('span[class="form-control-plaintext ml-2"]').eq(1).should('contain.text', '2.246.575,34').and('contain.text', 'ARS')

        // Validación de lo modificado

        cy.get('table[class="table table-sm dataTable no-footer"]')
        .should('contain.text', 'ICBC (CFI)')
        .and('contain.text', 'Concertación')
        .and('contain.text', 'Plazo fijo')
        .and('contain.text', 'Plazo fijo - 12345')
        .and('contain.text', 'ARS')
        cy.get('td[class="text-right  number-cell"]').should('contain.text','2.000.000,00')
        cy.get('td[class="text-right  number-cell"]').should('contain.text','150,00')

        // Eliminar operación de Plazo Fijo creada

        cy.get('svg[class="svg-inline--fa fa-trash-can"]').eq(0).click()
        cy.get('.modal-body').should('contain.text', '¿Seguro de que desea anular la operación?')
        cy.contains('Anular').click()
        // cy.get('button[class="btn btn-primary"]').click()

        // Validación que no se muestre más lo eliminado en el cuadro de Operaciones

        cy.get('td[class="text-right  number-cell"]').should('not.contain.text','2.000.000,00')
        cy.get('td[class="text-right  number-cell"]').should('not.contain.text','150,00')


      })

    })


    it.only("Operaciones a descuento: Cheque", () => 
    {
        cy.origin('https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio/trading', () => {
  
         // Validación de los distintos menús mostrados, desde Home hasta Ayuda

        cy.get('#sidenav-list > :nth-child(1)').should('contain.text','Home')
        cy.get('#sidenav-list > :nth-child(2)').should('contain.text','Mis operaciones')
        cy.get('#sidenav-list > :nth-child(3)').should('contain.text','Mi dinero')
        cy.get('#sidenav-list > :nth-child(4)').should('contain.text','Mis portfolios')
        cy.get('#sidenav-list > :nth-child(5)').should('contain.text','Resultado')
        cy.get('#sidenav-list > :nth-child(6)').should('contain.text','Rendimiento')
        cy.get('#sidenav-list > :nth-child(7)').should('contain.text','Agenda')
        cy.get('#sidenav-list > :nth-child(8)').should('contain.text','Comparativa')
        cy.get('#sidenav-list > :nth-child(9)').should('contain.text','Ayuda')
        
        // Validación del h3

        cy.get('.mr-auto > h3').should('have.text', 'Mis operaciones')

        // Validación de que existan los botones Movimientos de Títulos, Importar Operaciones y Registrar operación

        cy.url().should('eq','https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio/trading')
        cy.location('protocol').should('contains','https')
        cy.get('.p-2 > .row').should('contain.text','Registrar operación').and('contain.text','Importar operaciones')//.and('contain.text','Movimientos de Títulos')

        // Validaciones de los filtros

        cy.get('.trades-filters-backdrop').should('exist')
        cy.get(':nth-child(2) > .dropdown > .dropdown-toggle').should('exist').and('be.visible').and('contain.text','Seleccionar moneda de pago')
        cy.get(':nth-child(5) > .dropdown > .dropdown-toggle').should('exist').and('be.visible').and('contain.text','Seleccionar tipo de operatoria')
        cy.get(':nth-child(6) > .dropdown > .dropdown-toggle').should('exist').and('be.visible').and('contain.text','Seleccionar tipo de instrumento')
        cy.get('form > :nth-child(1) > :nth-child(3)').should('exist').and('contain.text','Filtrar')

       /* // Validaciones del cuadro Operaciones

        cy.get('form > :nth-child(1) > :nth-child(3)').should('exist').and('contain.text','Filtrar')
        cy.get('.dt-buttons > .btn-group > .btn').should('exist')                                   
        cy.get('.buttons-excel').should('exist')
        cy.get('.buttons-copy').should('exist')
        cy.get('.buttons-print').should('exist')
        cy.get('[aria-label="Depositario: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Depositario')
        cy.get('[aria-label="Tipo de Operación: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Tipo de Operación')
        cy.get('[aria-label="Tipo de Activo: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Tipo de Activo')
        cy.get('[aria-label="Fecha Concertación: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Fecha Concertación')
        cy.get('.sorting_desc').should('exist').and('be.visible').and('contain.text','Fecha Liquidación')
        cy.get('[aria-label="Nominal/Capital: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Nominal/Capital')
        cy.get('[aria-label="Activo: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Activo')
        cy.get('[aria-label="Precio/TNA: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Precio/TNA')
        cy.get('[aria-label="Bruto: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Bruto')
        cy.get('[aria-label="Gastos: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Gastos')
        cy.get('[aria-label="Neto: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Neto')
        cy.get('[aria-label="Moneda: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Moneda')
        cy.get('[aria-label="Identificador: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Identificador')

        // Registrar Operación de Cheque

        cy.get('.nav > .btn').eq(2).click()
        cy.get('a[class="dropdown-item"]').eq(8).click()
        cy.get('.modal-title').eq(0).should('have.text', 'Operación de Cheque')
        
        // Cheque a 30 días PESOS 1.000.000 TNA 133

        cy.get('div[class="filter-option-inner-inner"]').eq(3).click()
        cy.get('input[placeholder="Buscar... "]').eq(0).click().type('ICBC (CFI)')
        cy.get('.text').click()
        cy.get('input[placeholder="Ingresar certificado"]').click().type('112233')
        cy.get('input[class="form-control text-right"]').eq(0).click().type('1000000')
        cy.get('input[class="form-control text-right"]').eq(1).click().type('1100000')
        cy.get('button[class="btn dropdown-toggle btn-light bs-placeholder"]').eq(1).click()
        cy.get('#bs-select-6-0').click()
        cy.get('button[class="btn dropdown-toggle btn-light bs-placeholder"]').eq(0).click()
        cy.get('#bs-select-5-0').click()
        cy.get('span[class="form-control-plaintext ml-2"]').eq(0).should('contain.text', '121,67 %')
        cy.get('button[class="btn btn-primary"]').click()*/

        // Filtro del cuadro de Operaciones

        cy.get('label > .form-control').click().type('cheque{enter}')

       // Validación en el cuadro de movimientos

        cy.get('table[class="table table-sm dataTable no-footer"]')
        .should('contain.text', 'ICBC (CFI)')
        .and('contain.text', 'Compra')
        .and('contain.text', 'Cheque')
        .and('contain.text', 'Cheque - 112233')
        .and('contain.text', 'ARS')
        cy.get('td[class="text-right  number-cell"]').should('contain.text','1.000.000,00')
        cy.get('td[class="text-right  number-cell"]').should('contain.text','1.100.000,00')

        // Ver detalle de la operación creada (ícono de lupa)

        cy.get('svg[class="svg-inline--fa fa-magnifying-glass"]').eq(0).click()
        cy.get('.modal-header').should('contain.text', 'Detalle de Cheque - 1234')
        cy.get('.modal-body')
        .should('contain.text', 'Costo').and('contain.text', '1.000.000,00').and('contain.text', 'ARS')
        .should('contain.text', 'Monto a cobrar').and('contain.text', '1.100.000,00').and('contain.text', 'ARS')
        .should('contain.text', 'Interés').and('contain.text', '109.315,07').and('contain.text', 'ARS')
        cy.get('input[value="Pendiente"]').should('exist').and('be.visible')
        cy.get('input[value="ICBC (CFI)"]').should('exist').and('be.visible')
        cy.get('button[class="btn btn-secondary"]').click()

        // Modificar operación de Plazo Fijo cambiando su TNA, Capital y Certificado, con chequeo de recálculo de Interés y Monto

        cy.get('svg[class="svg-inline--fa fa-pen-to-square"]').eq(0).click()
        cy.get('.modal-header').should('contain.text', 'Concertación')
        cy.get('input[class="form-control text-right"]').eq(0).click().clear().type('2000000')
        cy.get('input[class="form-control text-right"]').eq(1).click().clear().type('150')
        cy.get('input[placeholder="Ingresar certificado"]').click().clear().type('12345')
        cy.get('button[class="btn btn-primary"]').click()
        cy.get('span[class="form-control-plaintext ml-2"]').eq(0).should('contain.text', '246.575,34').and('contain.text', 'ARS')
        cy.get('span[class="form-control-plaintext ml-2"]').eq(1).should('contain.text', '2.246.575,34').and('contain.text', 'ARS')

        // Validación de lo modificado

        cy.get('table[class="table table-sm dataTable no-footer"]')
        .should('contain.text', 'ICBC (CFI)')
        .and('contain.text', 'Concertación')
        .and('contain.text', 'Caución')
        .and('contain.text', 'Caución - 12345')
        .and('contain.text', 'ARS')
        cy.get('td[class="text-right  number-cell"]').should('contain.text','2.000.000,00')
        cy.get('td[class="text-right  number-cell"]').should('contain.text','150,00')

        // Eliminar operación de Plazo Fijo creada

        cy.get('svg[class="svg-inline--fa fa-trash-can"]').eq(0).click()
        cy.get('.modal-body').should('contain.text', '¿Seguro de que desea anular la operación?')
        cy.contains('Anular').click()
        // cy.get('button[class="btn btn-primary"]').click()

        // Validación que no se muestre más lo eliminado en el cuadro de Operaciones

        cy.get('td[class="text-right  number-cell"]').should('not.contain.text','2.000.000,00')
        cy.get('td[class="text-right  number-cell"]').should('not.contain.text','150,00')

        
      })

    })

    it("Operación de Depósito a plazo: Caución", () => 
    {
        cy.origin('https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio/trading', () => {
  
         // Validación de los distintos menús mostrados, desde Home hasta Ayuda

        cy.get('#sidenav-list > :nth-child(1)').should('contain.text','Home')
        cy.get('#sidenav-list > :nth-child(2)').should('contain.text','Mis operaciones')
        cy.get('#sidenav-list > :nth-child(3)').should('contain.text','Mi dinero')
        cy.get('#sidenav-list > :nth-child(4)').should('contain.text','Mis portfolios')
        cy.get('#sidenav-list > :nth-child(5)').should('contain.text','Resultado')
        cy.get('#sidenav-list > :nth-child(6)').should('contain.text','Rendimiento')
        cy.get('#sidenav-list > :nth-child(7)').should('contain.text','Agenda')
        cy.get('#sidenav-list > :nth-child(8)').should('contain.text','Comparativa')
        cy.get('#sidenav-list > :nth-child(9)').should('contain.text','Ayuda')
        
        // Validación del h3

        cy.get('.mr-auto > h3').should('have.text', 'Mis operaciones')

        // Validación de que existan los botones Movimientos de Títulos, Importar Operaciones y Registrar operación

        cy.url().should('eq','https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio/trading')
        cy.location('protocol').should('contains','https')
        cy.get('.p-2 > .row').should('contain.text','Registrar operación').and('contain.text','Importar operaciones')//.and('contain.text','Movimientos de Títulos')

        // Validaciones de los filtros

        cy.get('.trades-filters-backdrop').should('exist')
        cy.get(':nth-child(2) > .dropdown > .dropdown-toggle').should('exist').and('be.visible').and('contain.text','Seleccionar moneda de pago')
        cy.get(':nth-child(5) > .dropdown > .dropdown-toggle').should('exist').and('be.visible').and('contain.text','Seleccionar tipo de operatoria')
        cy.get(':nth-child(6) > .dropdown > .dropdown-toggle').should('exist').and('be.visible').and('contain.text','Seleccionar tipo de instrumento')
        cy.get('form > :nth-child(1) > :nth-child(3)').should('exist').and('contain.text','Filtrar')

        // Validaciones del cuadro Operaciones

        cy.get('form > :nth-child(1) > :nth-child(3)').should('exist').and('contain.text','Filtrar')
        cy.get('.dt-buttons > .btn-group > .btn').should('exist')                                   
        cy.get('.buttons-excel').should('exist')
        cy.get('.buttons-copy').should('exist')
        cy.get('.buttons-print').should('exist')
        cy.get('[aria-label="Depositario: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Depositario')
        cy.get('[aria-label="Tipo de Operación: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Tipo de Operación')
        cy.get('[aria-label="Tipo de Activo: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Tipo de Activo')
        cy.get('[aria-label="Fecha Concertación: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Fecha Concertación')
        cy.get('.sorting_desc').should('exist').and('be.visible').and('contain.text','Fecha Liquidación')
        cy.get('[aria-label="Nominal/Capital: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Nominal/Capital')
        cy.get('[aria-label="Activo: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Activo')
        cy.get('[aria-label="Precio/TNA: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Precio/TNA')
        cy.get('[aria-label="Bruto: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Bruto')
        cy.get('[aria-label="Gastos: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Gastos')
        cy.get('[aria-label="Neto: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Neto')
        cy.get('[aria-label="Moneda: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Moneda')
        cy.get('[aria-label="Identificador: Activar para ordenar la columna de manera ascendente"]').should('exist').and('be.visible').and('contain.text','Identificador')

        // Registrar Operación de Depósito a plazo: Caución

        cy.get('.nav > .btn').eq(2).click()
        cy.get('a[class="dropdown-item"]').eq(7).click()
        cy.get('.modal-title').eq(0).should('have.text', 'Operación de Depósito a plazo')
        
        // Caución 30 días PESOS 1.000.000 TNA 133

        cy.get('input[value="2"]').click({force: true})
        cy.get('div[class="filter-option-inner-inner"]').eq(3).click()
        cy.get('input[placeholder="Buscar... "]').eq(0).click().type('ICBC (CFI)')
        cy.get('.text').click()
        cy.get('input[class="form-control text-right"]').eq(0).click().type('1000000')
        cy.get('input[class="form-control text-right"]').eq(1).click().type('133')
        cy.get('input[placeholder="Ingresar certificado"]').click().type('1234')
        cy.get('button[class="btn dropdown-toggle btn-light bs-placeholder"]').eq(1).click()
        cy.get('#bs-select-6-0').click()
        cy.get('button[class="btn dropdown-toggle btn-light bs-placeholder"]').eq(0).click()
        cy.get('#bs-select-5-0').click()
        cy.get('span[class="form-control-plaintext ml-2"]').eq(0).should('contain.text', '109.315,07').and('contain.text', 'ARS')
        cy.get('span[class="form-control-plaintext ml-2"]').eq(1).should('contain.text', '1.109.315,07').and('contain.text', 'ARS')
        cy.get('button[class="btn btn-primary"]').click()

        // Filtro del cuadro de Operaciones

        cy.get('label > .form-control').click().type('caución{enter}')

       // Validación en el cuadro de movimientos

        cy.get('table[class="table table-sm dataTable no-footer"]')
        .should('contain.text', 'ICBC (CFI)')
        .and('contain.text', 'Concertación')
        .and('contain.text', 'Caución')
        .and('contain.text', 'Caución - 1234')
        .and('contain.text', 'ARS')
        cy.get('td[class="text-right  number-cell"]').should('contain.text','1.000.000,00')
        cy.get('td[class="text-right  number-cell"]').should('contain.text','133,00')

        // Ver detalle de la operación creada (ícono de lupa)

        cy.get('svg[class="svg-inline--fa fa-magnifying-glass"]').eq(0).click()
        cy.get('.modal-header').should('contain.text', 'Detalle de Caución - 1234')
        cy.get('.modal-body')
        .should('contain.text', 'Capital').and('contain.text', '1.000.000,00').and('contain.text', 'ARS')
        .should('contain.text', 'Monto a cobrar').and('contain.text', '1.109.315,07').and('contain.text', 'ARS')
        .should('contain.text', 'Interés').and('contain.text', '109.315,07').and('contain.text', 'ARS')
        cy.get('input[value="Pendiente"]').should('exist').and('be.visible')
        cy.get('input[value="ICBC (CFI)"]').should('exist').and('be.visible')
        cy.get('button[class="btn btn-secondary"]').click()

        // Modificar operación de Plazo Fijo cambiando su TNA, Capital y Certificado, con chequeo de recálculo de Interés y Monto

        cy.get('svg[class="svg-inline--fa fa-pen-to-square"]').eq(0).click()
        cy.get('.modal-header').should('contain.text', 'Concertación')
        cy.get('input[class="form-control text-right"]').eq(0).click().clear().type('2000000')
        cy.get('input[class="form-control text-right"]').eq(1).click().clear().type('150')
        cy.get('input[placeholder="Ingresar certificado"]').click().clear().type('12345')
        cy.get('button[class="btn btn-primary"]').click()
        cy.get('span[class="form-control-plaintext ml-2"]').eq(0).should('contain.text', '246.575,34').and('contain.text', 'ARS')
        cy.get('span[class="form-control-plaintext ml-2"]').eq(1).should('contain.text', '2.246.575,34').and('contain.text', 'ARS')

        // Validación de lo modificado

        cy.get('table[class="table table-sm dataTable no-footer"]')
        .should('contain.text', 'ICBC (CFI)')
        .and('contain.text', 'Concertación')
        .and('contain.text', 'Caución')
        .and('contain.text', 'Caución - 12345')
        .and('contain.text', 'ARS')
        cy.get('td[class="text-right  number-cell"]').should('contain.text','2.000.000,00')
        cy.get('td[class="text-right  number-cell"]').should('contain.text','150,00')

        // Eliminar operación de Plazo Fijo creada

        cy.get('svg[class="svg-inline--fa fa-trash-can"]').eq(0).click()
        cy.get('.modal-body').should('contain.text', '¿Seguro de que desea anular la operación?')
        cy.contains('Anular').click()
        // cy.get('button[class="btn btn-primary"]').click()

        // Validación que no se muestre más lo eliminado en el cuadro de Operaciones

        cy.get('td[class="text-right  number-cell"]').should('not.contain.text','2.000.000,00')
        cy.get('td[class="text-right  number-cell"]').should('not.contain.text','150,00')

        
      })

    })

    
    

   

  
    
})
  
  