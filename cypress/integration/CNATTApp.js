
/// <reference types="Cypress" />
import CNATTApp from "../pageObjects/CNATTApp"
const cnatt = new CNATTApp


    //#region CNATT
    describe('CNATTAppTestSuite', () => {

     before('Login function', () => {
        cy.visit(Cypress.env('CNATTURL'))
        cy.wait(5000)
        cnatt.fillEmail()
        cnatt.fillPassword()
        cnatt.getSubmitButton().click()
        cy.title().should('be.equal','Cnatt App')
        cy.screenshot('Capturing the screenshot after Successful login');
    }
    )

    it('Verify User is able to navigate into location page with valid user', {tags:'regression'}, () => {
        cnatt.getWeatherEvent().click()
        cnatt.getrReschedule().click()
        cnatt.getNextButton().click()
        cy.url().should('include', 'location')
        //cy.url().should('eq', 'https://sr-cx-cnatt-ui-dev.nonprod.proproctor.prometric.com/location')
    }
    )

    it('Verify User is able to select location from option and navigate into impact dates page', () => {
        cnatt.getLocationTextBox()
        cnatt.getLocationAutoSuggestion().click()
        cnatt.getLocationNextButton().click()
        cy.url().should('include', 'impact-dates')
        //cy.url().should('eq', 'https://sr-cx-cnatt-ui-dev.nonprod.proproctor.prometric.com/impact-dates')

    }
    )

    it('Verify after select cancellation & reschedule date range user able to navigate into create-csv page', () => {
        cnatt.getDisplacementCalendarTextBox().click({force: true})
        cnatt.getRescheduleStartDate().click({force: true})
        cnatt.getRescheduleEndDate().click({force: true})
        cnatt.getOutside()
        cnatt.getScrollDown()
        cnatt.getImpactDatesNextButton().click()
        cnatt.getCreateCSVHeader().contains('Prometric-Initiated Displacement Form')
    }
    )


    it('Verify after select proper option on create csv page user is able to navigate into csv preview page', () => {
        cnatt.getScrollDown()
        cnatt.getCreateCSVNextButton().click()
        cnatt.getCSVPreviewHeader().contains('Please review CSV: ')
    })


    it('Verify User is able to navigate into Download csv page', () => {
        cnatt.getScrollDown()
        cnatt.getCSVPreviewNextButton().click()
        cnatt.getDownloadCSVHeader().contains('Your .csv file is ready to download')
    })


    it('Verify file is downloaded successfully', () => {
        cnatt.getScrollDown()
        cnatt.getDownloadCSVButton().click()
        cy.readFile(Cypress.config("fileServerFolder") + "/cypress/downloads/06.28.2022_Boston, MA_weather_reschedule.csv")


    })

    //#endregion CNATT

})


