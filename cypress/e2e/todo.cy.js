/// <reference types="cypress" />



describe('Prueba Recorrido de menúes IM con validaciones básicas', () => {
  beforeEach(() => {

    cy.visit('https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio')

  })

  // No encuentro la forma de poder subir un archivo xlsx, segun la docu de cypress no se acepta ese formato

  it.skip('Subir archivo para importar', () => {
  
    cy.get('#username').type('f.balderian@mercapsoftware.com')
    cy.get('#password').type('Mercap2022')
    cy.get('.c22fea258 > .cf1ef5a0b',{timeout:40000}).click()
    cy.origin('https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio', () => {

      cy.wait(20000)
      cy.contains('Importar operaciones').click() 
      cy.wait(3000)
      cy.fixture('CFI.xlsx')
      cy.get('input[type=file]').invoke('show').selectFile('./cypress/fixtures/CFI.xlsx')  
   

    
  })

   
  })


  it.skip('Log In', () => {
  
    cy.get('#username').type('f.balderian@mercapsoftware.com')
    cy.get('#password').type('Mercap2022')
    cy.get('.c22fea258 > .cf1ef5a0b').click()
    cy.wait(20000)

   
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
      cy.get('#username').type('mailincorrecto8@gmail.com')
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

  // Validación que el botón Importar operacioens funciones y validación de sus errores, no tiene carga de archivo

  it('Importar operaciones', () => {
    cy.get('#username').type('f.balderian@mercapsoftware.com')
    cy.get('#password').type('Mercap2022')
    cy.get('.c22fea258 > .cf1ef5a0b', {timeout:40000}).click()
    cy.origin('https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio', () => {

      cy.wait(60000)
      cy.contains('Importar operaciones').click() 
      cy.wait(30000)
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

  it('Validación que no se muestren los tool tips que dicen Buscando el precio o No existe especie ', () => {
    cy.get('#username').type('f.balderian@mercapsoftware.com')
    cy.get('#password').type('Mercap2022')
    cy.get('.c22fea258 > .cf1ef5a0b').click()
    cy.wait(60000)
    cy.origin('https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio', () => {

      
      cy.get('svg[class="svg-inline--fa fa-circle-exclamation fa-lg"]').should('not.exist')

      
    })

  })

  it('Home', () => {
    
  
    cy.get('#username').type('f.balderian@mercapsoftware.com')
    cy.get('#password').type('Mercap2022')
    cy.get('.c22fea258 > .cf1ef5a0b').click()
    cy.wait(60000)
    cy.origin('https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio', () => {

      // Validación que no se encuentren los carteles de advertencias que contienen: No se tiene precio... o No existe especie...

      // cy.get('svg[class="svg-inline--fa fa-circle-exclamation fa-lg"]').should('not.exist')

      // Validación que se muestre el saludo al usuario ** Se podria crear una variable con el usuario a ingresar**
      cy.wait(30000)
      cy.get('.mr-auto > h3').should('have.text', 'Hola f.balderian@mercapsoftware.com')    
      
      // Validación de la URL y su protocolo

      cy.url().should('eq','https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio')
      cy.location('protocol').should('contains','https')

      // Validación de los distintos menús mostrados, desde Home hasta Ayuda

      cy.get('#sidenav-list > :nth-child(1)').should('contain.text','Home')
      cy.get('#sidenav-list > :nth-child(2)').should('contain.text','Mis operaciones')
      cy.get('#sidenav-list > :nth-child(3)').should('contain.text','Mi dinero')
      cy.get('#sidenav-list > :nth-child(4)').should('contain.text','Mis portfolios')
      cy.get('#sidenav-list > :nth-child(5)').should('contain.text','Resultado')
      cy.get('#sidenav-list > :nth-child(6)').should('contain.text','Agenda')
      cy.get('#sidenav-list > :nth-child(7)').should('contain.text','Comparativa')
      cy.get('#sidenav-list > :nth-child(8)').should('contain.text','Ayuda')

      // Agrupar y desagrupar instrumentos

      // cy.contains('Acciones').click()
      cy.contains('Fondo').click()
      cy.wait(1000)
      //cy.contains('Cauciones').click()
      cy.wait(1000)
      cy.contains('Monedas').click()
      cy.wait(1000)
      cy.contains('Obligación Negociable').click()
      cy.wait(1000)
      cy.contains('Plazos fijos').click()
      cy.wait(1000)
      cy.contains('Título Público').click()
      
      

      // Interacción con el gráfico de highcarts

      /*cy.get('.highcharts-level-group-1 > [x="0"]').click()
      cy.wait(1000)
      cy.get('.highcharts-drillup-button > .highcharts-button-box').click({force: true})
      cy.get(':nth-child(4) > .card > .card-header > .card-title > :nth-child(1) > .btn > .filter-option > .filter-option-inner > .filter-option-inner-inner').click()
      cy.wait(1000)
      cy.get(':nth-child(2) > .btn > .filter-option > .filter-option-inner > .filter-option-inner-inner').click()
      cy.wait(1000)
      cy.get(':nth-child(3) > .btn').click()
      cy.wait(1000)*/

      // Condicional para ver si existe Tipo de Operación = Vencimiento y Tipo de Activo = Caución para validar los botones Ver Información, Modificar Evento y Anular

      
      cy.get('#main-inner-content').then(($body) => {
        if ($body.text().includes('Caución','Vencimiento')) {

          // Validación Ver Información de una operación de Vencimiento de Caución

          cy.get('#a-id66').click({force: true})
          cy.wait(30000)
          cy.get('.modal-title').should('have.text', 'Caución')
          cy.get('.modal-body').should('contain', 'Detalles del instrumento').and('contain', 'Instrumento').and('contain', 'Vencimiento').and('contain', 'Capital').and('contain',  'Interés').and('contain', 'Concertación').and('contain', 'Depositario').and('contain', 'TNA').and('contain', 'Monto')
          cy.get('.modal-body').should('contain', 'Vencimiento').and('contain', 'Fecha de evento')
          cy.wait(1000)
          cy.get('.modal-footer > .btn').click()



          // Validación Modificar Evento de una operación de Vencimiento de Caución

          cy.get('#a-id67').click({force: true})
          cy.wait(1000)
          cy.get('.modal-title').should('contain.text', 'Vencimiento')
          cy.get('.modal-body').should('contain', 'Instrumento').and('contain', 'Vencimiento').and('contain', 'Capital').and('contain', 'Interés').and('contain', 'Concertación').and ('contain', 'Depositario').and('contain', 'TNA').and('contain', 'Monto').and('contain', 'Fecha de evento').and('contain', 'Fecha de cobro')
          cy.get('.modal-footer > .btn-secondary').click()


        // Validación Anular Evento de una operación de Caución

          cy.get('#a-id68').click({force: true})
          cy.wait(2000)
          cy.get('.modal-title').should('have.text', 'Confirmación')
          cy.get('.modal-body').should('have.text', '¿Seguro de que desea anular la operación?')
          cy.get('.modal-footer > .btn-secondary').click()
        }   
        else {

          cy.get('#container-id60 > h3').should('have.text', 'Últimas operaciones del mes')
          
        }
      })

      // Condicional para ver si existe Tipo de Operación = Concertación y Tipo de Activo = Caución para validar los botones Ver Información, Modificar Evento y Anular


      cy.get('#main-inner-content').then(($body) => {
        if ($body.text().includes('Caución','Concertación')) {

          // Validación Ver Información de una operación de Concertación de Caución

          cy.get('#a-id70').click({force: true})
          cy.wait(30000)
          cy.get('.modal-title').should('have.text', 'Caución')
          cy.get('.modal-body').should('contain', 'Detalles del instrumento').and('contain', 'Instrumento').and('contain', 'Vencimiento').and('contain', 'Capital').and('contain',  'Interés').and('contain', 'Concertación').and('contain', 'Depositario').and('contain', 'TNA').and('contain', 'Monto')
          cy.wait(1000)
          cy.get('.modal-footer > .btn').click()

          // Validación Modificar Evento de una operación de Concertación de Caución

          cy.get('#a-id71').click({force: true})
          cy.wait(1000)
          cy.get('.modal-title').should('contain.text', 'Concertación')
          cy.get('.modal-body').should('contain', 'Tipo').and('contain', 'Concertación').and('contain', 'Depositario').and('contain', 'Número de certificado').and('contain', 'TNA').and  ('contain', 'Vencimiento').and('contain', 'Portfolio').and('contain', 'Capital').and('contain', 'TNA').and('contain', 'Interés').and('contain', 'Monto')
          cy.get('.modal-footer > .btn-secondary').click()


        // Validación Anular Evento de una operación de Caución

          cy.get('#a-id72').click({force: true})
          cy.wait(2000)
          cy.get('.modal-title').should('have.text', 'Confirmación')
          cy.get('.modal-body').should('have.text', '¿Seguro de que desea anular la operación?')
          cy.get('.modal-footer > .btn-secondary').click()
        }   
        else {

          cy.get('#container-id60 > h3').should('have.text', 'Últimas operaciones del mes')
          
        }
      })



      // Validación Ver Información de una operación de Caución

      /*cy.get('#a-id66').click({force: true})
      cy.wait(5000)
      cy.get('.modal-title').should('have.text', 'Caución')
      cy.get('.modal-body').should('contain', 'Detalles del instrumento').and('contain', 'Instrumento').and('contain', 'Vencimiento').and('contain', 'Capital').and('contain', 'Interés').and('contain', 'Concertación').and('contain', 'Depositario').and('contain', 'TNA').and('contain', 'Monto')
      cy.get('.modal-body').should('contain', 'Vencimiento').and('contain', 'Fecha de evento')
      cy.wait(1000)
      cy.get('.modal-footer > .btn').click()



      // Validación Modificar Evento de una operación de Caución

      cy.get('#a-id67').click({force: true})
      cy.wait(1000)
      cy.get('.modal-title').should('contain.text', 'Concertación')
      cy.get('.modal-body').should('contain', 'Tipo').and('contain', 'Concertación').and('contain', 'Depositario').and('contain', 'Número de certificado').and('contain', 'TNA').and('contain', 'Vencimiento').and('contain', 'Portfolio').and('contain', 'Capital').and('contain', 'TNA').and('contain', 'Interés').and('contain', 'Monto')
      cy.get('.modal-footer > .btn-secondary').click()


      // Validación Anular Evento de una operación de Caución

      cy.get('#a-id68').click({force: true})
      cy.wait(2000)
      cy.get('.modal-title').should('have.text', 'Confirmación')
      cy.get('.modal-body').should('have.text', '¿Seguro de que desea anular la operación?')
      cy.get('.modal-footer > .btn-secondary').click()*/


      // Validación Ver Información de una operación de Plazo Fijo

      /*cy.get('#a-id66').click({force: true})
      cy.wait(1000)
      cy.get('.modal-title').should('have.text', 'Plazo fijo')
      cy.get('.modal-body').should('contain', 'Detalles del instrumento').and('contain', 'Instrumento').and('contain', 'Vencimiento').and('contain', 'Capital').and('contain', 'Interés').and('contain', 'Concertación').and('contain', 'Depositario').and('contain', 'TNA').and('contain', 'Monto')
      //cy.get('.modal-body').should('contain', 'Vencimiento').and('contain', 'Fecha de evento')
      cy.wait(1000)
      cy.get('.modal-footer > .btn').click()*/



      // Validación Modificar Evento de una operación de Plazo Fijo

      /*cy.get('#a-id67').click({force: true})
      cy.wait(1000)
      cy.get('.modal-title').should('contain.text', 'Concertación')
      cy.get('.modal-body').should('contain', 'Tipo').and('contain', 'Concertación').and('contain', 'Depositario').and('contain', 'Número de certificado').and('contain', 'TNA').and('contain', 'Vencimiento').and('contain', 'Portfolio').and('contain', 'Capital').and('contain', 'TNA').and('contain', 'Interés').and('contain', 'Monto')
      cy.get('.modal-footer > .btn-secondary').click()*/



      // Validación Anular Evento de una operación de Plazo Fijo

      /*
      cy.get('#a-id68').click({force: true})
      cy.wait(2000)
      cy.get('.modal-title').should('have.text', 'Confirmación')
      cy.get('.modal-body').should('have.text', '¿Seguro de que desea anular la operación?')
      cy.get('.modal-footer > .btn-secondary').click()
      */


      // Validación del botón Ver Información y su pantalla (Misma posición al de Splitear hay que revisar como utilizar ambos al mismo tiempo) , que se muestre correctamente, no se valida su funcionalidad en este test, se lo hace por separado en otro

      /*Validaciones de pantalla para X movimiento de operación

      cy.get('#a-id66').click({force: true})
      cy.wait(1000)
      cy.get('.modal-title').should('have.text', 'Caución')
      cy.get('.modal-body').should('contain', 'Detalles del instrumento').and('contain', 'Instrumento').and('contain', 'Vencimiento').and('contain', 'Capital').and('contain', 'Interés').and('contain', 'Concertación').and('contain', 'Depositario').and('contain', 'TNA').and('contain', 'Monto')
      //cy.get('.modal-body').should('contain', 'Vencimiento').and('contain', 'Fecha de evento')
      cy.wait(1000)
      cy.get('.modal-footer > .btn').click()

      // Validación del botón Vencimiento y su pantalla (Misma posición al de Modificar evento, hay que revisar como utilizar ambos al mismo tiempo) , que se muestre correctamente, no se valida su funcionalidad en este test, se lo hace por separado en otro

      cy.get('#a-id67').click({force: true})
      cy.wait(1000)
      cy.get('.modal-title').should('have.text', 'Vencimiento')
      cy.get('.modal-body').should('contain', 'Detalles del instrumento').and('contain', 'Instrumento').and('contain', 'Vencimiento').and('contain', 'Capital').and('contain', 'Interés').and('contain', 'Concertación').and('contain', 'Depositario').and('contain', 'TNA').and('contain', 'Monto')
      cy.get('.modal-body').should('contain', 'Vencimiento').and('contain', 'Fecha de evento')
      cy.get('.modal-body').should('contain', 'Condiciones del evento').and('contain', 'Fecha de cobro')
      cy.get('.modal-footer > .btn-secondary').click()
      

      // Validación de Anular, que se muestre correctamente, no se valida su funcionalidad en este test, se lo hace por separado en otro

      cy.get('#a-id68').click({force: true})
      cy.wait(1000)
      cy.get('.modal-title').should('have.text', 'Confirmación')
      cy.get('.modal-body').should('contain', '¿Seguro que desea anular la operación?')
      cy.get('.modal-footer > .btn-secondary').click()
      */

      

      
    })
    
    


    
  

   
  })
  

  it.skip('Home Viejo', () => {
  
    // Voy a ir completando todas las acciones disponibles de la pagina principal "Home"

    // 1: Agrupar y desagrupar instrumentos: Acciones, Bonos, Fondos, Monedas y Plazos Fijos

    cy.get('#username').type('f.balderian@mercapsoftware.com')
    cy.get('#password').type('Mercap2022')
    cy.get('.c22fea258 > .cf1ef5a0b').click()
    cy.wait(40000)
    cy.origin('https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio', () => {

      
      //cy.get('svg[class="svg-inline--fa fa-circle-exclamation fa-lg"]').should('not.exist') ** Con esto puedo buscar todos los cartelitos de advertencias de la página

      //cy.get('span[data-original-title]').should('not.exist') ** Con esto puedo buscar el div que contiene a esos cartelitos
      
      /*cy.get('.mr-auto > h3').should('have.text', 'Hola f.balderian@mercapsoftware.com') ** Con esto valido que se muestre el saludo al usuario

      cy.get('div.container-fluid div.row div.application-content-container.container-fluid div.pl-4.ml-2.mt-4.mr-4:nth-child(3) div.card.custom-titled-card div.card-body div.row:nth-child(1) div.col-12.col-xl-9:nth-child(1) div.table-responsive div.dataTables_wrapper.dt-bootstrap4.no-footer div.horizontal-scrollbar:nth-child(2) table.table.table-sm.w-100.dataTable.no-footer tbody:nth-child(2) tr.odd:nth-child(6) > td.text-right.number-cell:nth-child(3)').should('not.have.descendants', 'div')
      cy.get('div.container-fluid div.row div.application-content-container.container-fluid div.pl-4.ml-2.mt-4.mr-4:nth-child(3) div.card.custom-titled-card div.card-body div.row:nth-child(1) div.col-12.col-xl-9:nth-child(1) div.table-responsive div.dataTables_wrapper.dt-bootstrap4.no-footer div.horizontal-scrollbar:nth-child(2) table.table.table-sm.w-100.dataTable.no-footer tbody:nth-child(2) tr.odd:nth-child(6) > td.text-right.number-cell:nth-child(4)').should('not.have.descendants', 'div')

      ** Todo ese choclo de arriba era para seleccionar elementos via css de la plantilla donde muestran las valuaciones, no creo que lo use


      cy.get('#id118 > .svg-inline--fa').trigger('mouseover')
      cy.get('.tooltip-inner').should('not.contain', 'No existe especie')
      cy.get('#id120 > .svg-inline--fa').trigger('mouseover')
      cy.get('.tooltip-inner').should('not.contain', 'No existe especie')
      cy.get('#id120 > .svg-inline--fa').trigger('mouseover')
      cy.get('.tooltip-inner').should('not.contain', 'No existe especie')

      ** Esto recorria indivdualmente cada tooltip pero no tenia mucho sentido hacerlo asi, primero porque los ids son dinamicos y segundo porque no podia validar toda la pagina

      cy.contains('Importar operaciones').click() 
      cy.wait(1000)                                     ****** Con esto puedo hacer click al botón Importar operaciones y despues cerrarlo
      cy.contains('Cerrar').click()
      
      
      cy.contains('Acciones').click()
      cy.wait(1000)
      cy.contains('Bonos').click()
      cy.wait(1000)
      cy.contains('Fondos').click()
      cy.wait(1000)
      cy.contains('Monedas').click()
      cy.wait(1000)
      cy.get(':nth-child(10) > .dtrg-group').click()
      cy.get('.highcharts-level-group-1 > [x="0"]').click()
      cy.wait(1000)
      cy.get('.highcharts-drillup-button > .highcharts-button-box').click({force: true})
      cy.get(':nth-child(4) > .card > .card-header > .card-title > :nth-child(1) > .btn > .filter-option > .filter-option-inner > .filter-option-inner-inner').click()
      cy.wait(1000)
      cy.get(':nth-child(2) > .btn > .filter-option > .filter-option-inner > .filter-option-inner-inner').click()
      cy.wait(1000)
      cy.get(':nth-child(3) > .btn').click()
      cy.wait(1000)

      ** Todo esto recorre la plantilla de valuaciones, agrupando y desagrupando los distintos instrumentos, tambien interactua con el grafico


      cy.get('#a-id66').click({force: true})
      cy.wait(1000)
      cy.get('.modal-footer > .btn-secondary').click()
      cy.wait(1000)

      ** Hace click en Splitear y lo Cierra

      cy.get('#a-id67').click({force: true})
      cy.wait(1000)
      cy.get('.modal-footer > .btn-secondary').click()

      ** Hace click en Modificar y lo Cierra

      cy.get('#a-id68').click({force: true})
      cy.wait(1000)
      cy.get('.modal-footer > .btn-secondary').click()

      ** Hace click en Anular y lo Cierra*/

      

      
    })
    
    


    
  

   
  })





})

