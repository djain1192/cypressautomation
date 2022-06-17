/// <reference types="Cypress" />
import WebControl from '../pageObjects/TestWebControlUI'
const webControl = new WebControl()
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

//#region TestWebControlUI 

describe('TestWebControlUI', function() {

it('Handling Web Control UI',function() {
 
    //Check boxes
    cy.visit(Cypress.env('TestWebControlURL'))
    webControl.getcheckBoxOption1().check().should('be.checked').and('have.value','option1')
    webControl.getcheckBoxOption1().uncheck().should('not.be.checked')
    webControl.getcheckBox().check(['option2','option3'])
 
    //Static Dropdown
    webControl.getcheckBoxOption2().should('have.value','option2')
     
    //Dynamic dropdowns
    webControl.getAutoComplete().type('ind')
     
    cy.get('.ui-menu-item div').each(($e1, index, $list) => {
     
        if($e1.text()==="India")
        {
            $e1.click()
        }
     
    })
    //autocomplete
    webControl.getAutoComplete().should('have.value','India')
    //visible invisible
    webControl.getDisplayedTextBox().should('be.visible')
    webControl.getHideTextBox().click()
    webControl.getDisplayedTextBox().should('not.be.visible')
    webControl.getshowTextBox().click()
    webControl.getDisplayedTextBox().should('be.visible')
     
    //radio buttons
    webControl.getRadioButton().check().should('be.checked')
   
    })


it('Hadnling Alert & Child Tab',function() {
 
//Check boxes
cy.visit(Cypress.env('TestWebControlURL'))
webControl.getAlertButton().click()
webControl.getConfirmButton().click()
cy.on('window:alert',(str)=>
{
    //Mocha
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})
 
cy.on('window:confirm',(str)=>
{
    //Mocha
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})
 

webControl.getOpenTab().invoke('removeAttr','target').click() 
cy.url().should('include','rahulshettyacademy')
cy.go('back')
 
})

it('Mouse Hover & Force Click',function() {
 
    cy.visit(Cypress.env('TestWebControlURL'))
    webControl.getMouseHover().invoke('show')
    cy.contains('Top').click({ force : true })
    cy.url().should('include', 'top')
    })

it('IFrameTest', () => {

        cy.visit(Cypress.env('TestWebControlURL'))
        cy.frameLoaded("#courses-iframe")
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        //cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)
    }
    )  
//#endregion TestWebControlUI 

})


