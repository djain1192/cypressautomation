
/// <reference types="Cypress" />
import Prometric from "../pageObjects/PrometricTest"
const prometric = new Prometric()


    //#region Welcome Page
    describe('PrometricTestSuite', () => {


    it('Verify Title Of the Page!', () => {
        cy.visit(Cypress.env('Prometricurl'))
        cy.title().should('eq', 'React App')
    }
    )   
    it('Verify Upon inserting valid url user navigate into welcome page', () => {
        cy.visit(Cypress.env('Prometricurl'))
        cy.url().should('include', 'proproctor')
        //cy.url().should('eq', 'https://sr-cx-registration-scheduling-ui-bil.nonprod.proproctor.prometric.com/')

    }
    )

    it('Verify welcome text on the page', () => {
        cy.visit(Cypress.env('Prometricurl'))
        prometric.getwelcomeText().contains('Welcome to Prometric’s secure portal.')
    }
    )

    it('Verify proper URL is display upon navigate into another page', () => {
        cy.visit(Cypress.env('Prometricurl'))
        prometric.getStartedButton().click()
        cy.url().should('include', 'getstarted')
        //cy.url().should('eq', 'https://sr-cx-registration-scheduling-ui-bil.nonprod.proproctor.prometric.com/getstarted')
    }
    )

    it('Verify English is display as language option on welcome page', () => {
        cy.visit(Cypress.env('Prometricurl'))
        prometric.getLanguageDropDown().click()
        prometric.getLanguageDropDownBox().should('have.text', 'English')
    }
    )
    //#endregion Welcome Page

    //#region  Schedule Personal Info Warning

    it('Verify Upon inserting valid url user navigate into verify page', () => {
        const prometric = new Prometric()
        cy.visit(Cypress.env('PrometricVerifyurl'))
        cy.url().should('include', 'verify')
        //cy.url().should('eq', 'https://sr-cx-registration-scheduling-ui-bil.nonprod.proproctor.prometric.com/verify')
    }
    )

    it('Verify welcome text on the page', () => {
        const prometric = new Prometric()
        cy.visit(Cypress.env('PrometricVerifyurl'))
        prometric.getVerifyWelcomeText().contains('Your full name must match what is on your government-issued ID.​')
    }
    )

    it('Verify user check on check-box of I verify that this information matches my ID then navigate into mock page', () => {
        const prometric = new Prometric()
        cy.visit(Cypress.env('PrometricVerifyurl'))
        prometric.getVerifyIdCheckbox().click()
        cy.wait(4000)
        prometric.getEnabledButton().click()
        cy.url().should('include', 'reserve-exam')
        //cy.url().should('eq', 'https://sr-cx-registration-scheduling-ui-bil.nonprod.proproctor.prometric.com/reserve-exam')

    }
    )

    it('Verify user redirect into proper page when click on Make a Change Link', () => {
        const prometric = new Prometric()
        cy.visit(Cypress.env('PrometricVerifyurl'))
        prometric.getMakeAChangeLink().click()
        prometric.getModalHeader().contains('Please contact your test sponsor to update your personal information.')
    }
    )

    it('Verify English is display as language option on verify page', () => {
        cy.visit(Cypress.env('Prometricurl'))
        prometric.getLanguageDropDown().click()
        prometric.getLanguageDropDownBox().should('have.text', 'English')
    }
    )

    //#endregion Schedule Personal Info Warning

})