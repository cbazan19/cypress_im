/// <reference types="cypress" />



describe('Prueba Recorrido de menúes IM con validaciones básicas', () => {
    beforeEach(() => {
  
      cy.visit('https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio')
  
    })
  
    it('Subir archivo para importar', () => {
        
      cy.get('#username').type('f.balderian@mercapsoftware.com')
      cy.get('#password').type('Mercap2022')
      cy.get('.c22fea258 > .cf1ef5a0b',{timeout:40000}).click()
      cy.origin('https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio', () => {        
        cy.wait(20000)
        cy.contains('Importar operaciones').click() 
        cy.wait(3000)
        cy.fixture('CFI.xlsx', 'binary')
        .then(Cypress.Blob.binaryStringToBlob)
        .then(fileContent => {
          cy.get('input[type=file]').selectFile({
            fileContent,
            fileName: 'CFI.xlsx',
            mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            encoding: 'utf8'
          })
        })
       /* const xlsfile = 'CFI.xlsx';
        cy.get('input[type="file"]').attachFile('xlsfile');
        cy.fixture('CFI.xlsx')
        cy.get('input[type=file]').selectFile("./cypress/fixtures/CFI.xlsx")
        cy.fixture('CFI.xlsx')
        .then((contenido) => {
            cy.get('input[type=file]').selectFile("./cypress/fixtures/CFI.xlsx")
        })*/


  
        
  
     
  
      
    })
  
     
    })
  

  
  })
  
  