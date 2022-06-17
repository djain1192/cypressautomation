// <reference types="Cypress" />
import ApiTest from "../pageObjects/ApiTest"
const apiTest = new ApiTest

//#region ApiTest

describe('Api Test Suite', function() 
{
 
it('My Api Test case',function() {
 
    cy.visit(Cypress.env('ApiTestURL'))
 
    cy.intercept({
        method : 'GET',
        url : Cypress.env('RSAPI')
    },
 
     {
         statusCode : 200,
         body : [{
                "book_name": "RestAssured with Java",
                "isbn": "RSU",
                "aisle": "2301"    }]
          
     }).as('bookretrievals')
     apiTest.primaryButton().click()
     cy.wait('@bookretrievals').should(({request,response})=>
     {
         cy.get('tr').should('have.length',response.body.length+1)
     })
     cy.get('p').should('have.text','Oops only 1 Book available')
 
     //length of the response array = rows of the table
 
//#endregion ApiTest 
})
})
 
 
 
 
 