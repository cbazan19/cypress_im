/// <reference types="cypress" />



describe('Prueba del Home con validación de sus funcionalidades básicas', () => {
    beforeEach(() => {
  
      cy.visit('https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio')
  
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

        cy.contains('Acciones').click()
        cy.wait(1000)
        cy.contains('Bonos').click()
        cy.wait(1000)
        cy.contains('Cauciones').click()
        cy.wait(1000)
        cy.contains('Fondos').click()
        cy.wait(1000)
        cy.contains('Monedas').click()
        cy.wait(1000)
        cy.contains('Plazos fijos').click()
        cy.wait(1000)
        
        
  
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
  
  
  
  
  
  })
  
  