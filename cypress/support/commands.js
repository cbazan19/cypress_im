// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';

Cypress.Commands.add("LoginAbbaco", (user, password) => 
{ 
    
    cy.visit('https://bonds.mercapabbaco.com/')
    cy.origin('https://mercap.auth0.com', () => 
    {

      cy.viewport(1600, 900)
      cy.get('#username').should('exist').and('be.visible').click().type('cy_smoke@mercapsoftware.com')
      cy.get('#password').should('exist').and('be.visible').click().type('testing1')
      cy.contains('Continue').click({force: true})


   })

})

Cypress.Commands.add("LoginMisOperaciones", (user, password) => 
{ 
    
   cy.visit('https://portfolio.cfi.staging.mercap.com.ar/mercap-portfolio/trading')
   /*cy.get('#username').type('f.balderian@mercapsoftware.com')
   cy.get('#password').type('Mercap2022')
   cy.contains('Continue').click({force: true})*/

})

const nodemailer = require('nodemailer');

Cypress.Commands.add('customFailHandler', () => {
  Cypress.on('fail', (error, runnable) => {
    // Configurar el transporte SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'cbazan1909@gmail.com',
        pass: 'eimv baod qzzz pbok',
      },
    });

    // Detalles del correo electrónico
    const mailOptions = {
      from: 'cbazan1909@gmail.com',
      to: 'cbazan1909@gmail.com',
      subject: 'El Ford Focus está disponible para reservar bbsuli',
      text: `La prueba '${runnable.fullTitle()}' ha fallado. Detalles:\n\n${error.message}`,
    };

   // Enviar el correo electrónico
   transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
      console.error('Error al enviar el correo electrónico:', err);
      } else {
      console.log('Correo electrónico enviado:', info.response);
      }
   });
  });
});