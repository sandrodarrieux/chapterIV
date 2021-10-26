/// <reference types="cypress" />



describe('', () => {
    it('Quando não houver cadastros, então a listagem deve estar vazia', () => {
        cy.fixture('listagem-sem-itens').then(data =>{

            window.localStorage.setItem('data', JSON.stringify(data))  

        })
        
                
        cy.visit("https://form-agilizei.netlify.app/listagem.html")

        cy.get('table tbody tr').should('have.length', 0)
   
    });

    it('Quando houver uma ou mais cadastros, então a listagem deve estar preenchida', () => {
        cy.fixture('listagem-com-itens').then(data =>{

            window.localStorage.setItem('data', JSON.stringify(data))  

        })
        
                
        cy.visit("https://form-agilizei.netlify.app/listagem.html")

        cy.get('table tbody tr').should('have.length', 12)
   
    });

    
    it('Quando houver uma ou mais cadastros, então a listagem deve trazer o nome de um dos filhos', () => {
        cy.fixture('listagem-com-itens').then(data =>{

            window.localStorage.setItem('data', JSON.stringify(data))  

        })
        
                
        cy.visit("https://form-agilizei.netlify.app/listagem.html")

        cy.get('table tbody tr').should('have.length', 2)

        cy.get('table tbody')
           .children()
           .should('contain',' SANDRO')
   
    });
});
