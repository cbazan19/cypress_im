// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
require('cypress-xpath');
import 'cypress-file-upload';
import 'cypress-mochawesome-reporter/register';

// Alternatively you can use CommonJS syntax:
// require('./commands')

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