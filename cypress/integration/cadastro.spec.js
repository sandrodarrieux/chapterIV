/// <reference types="cypress" />
var Chance = require('chance');

// Instantiate Chance so it can be used
var chance = new Chance();


describe('Cadastro', () => {
    it('Quando eu informar os dados e finalizar, então o cadastro deve ser efetuado',() =>{
        cy.visit('https://form-agilizei.netlify.app')

        //Inputs de texto / textarea/ email -> type
        cy.get('input[name=firstName]').type(chance.first())
        cy.get('input[name=lastName]').type(chance.last())
        cy.get('textarea[name=adress]').type(chance.address())
        cy.get('input[name=emailAdress]').type(chance.email())



        // Inputs radio / checkboxes -> check
        cy.get('input[value=n]').check()
        cy.get('input[type=checkbox]').check('Netflix')
        cy.get('input[type=checkbox]').check('Dormir')

        // Inputs do tipo combobox / select -> select
        cy.get('select#countries').select('Dinamarca', { force: true })
        cy.get('select#years').select('2006', { force: true })
        cy.get('select#months').select('Janeiro', { force: true })
        cy.get('select#days').select('8', { force: true })

        // Inputs de senha -> type
        cy.get('input#firstpassword').type('Alunos@2021')
        cy.get('input#secondpassword').type('Alunos@2021')

        // Inputs do tipo button
        cy.get('button#submitbtn').click()

        cy.url().should('contain', 'listagem')



    });
})



