/// <reference types="Cypress" />
 
describe('Api Security Test Suite', function() 
{
//#region Api Security 
it('Api Security Test case',function() {
 
    cy.visit(Cypress.env('ApiTestURL'))
    cy.intercept('GET',('https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'),
    (req)=>
    {
    req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
 
    req.continue((res)=>
    {
       // expect(res.statusCode).to.equal(403)
    })
 }
 ).as("dummyUrl")
 
 cy.get("button[class='btn btn-primary']").click()
 cy.wait('@dummyUrl')
 
})
//#endregion Api Security 
})
 
 
 
 
 
 
