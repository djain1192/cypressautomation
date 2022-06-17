

class CNATTApp
{  
    fillEmail() 
    {
    const field = cy.get('#userNameInput')
    field.clear()
    field.type('BILPROINT\\darshit.jain')
    return this
    }

    fillPassword() 
    {
    const field = cy.get('#passwordInput')
    field.clear()
    field.type('Prometric1')
    return this
    }
    
    getSubmitButton()
    {
    return cy.get('#submitButton')
    }
    
    getWeatherEvent()
    {
    return cy.get('div:nth-child(3) div.App div.home_container div.custom-radio:nth-child(2) > label.icon-weather:nth-child(2)')
    }
    
    getrReschedule()
    {
    return cy.get('div.App div.home_container div.action_radio.mt20:nth-child(5) div.action_div:nth-child(1) > label.action_label')
    }
    
    getNextButton()
    {
    return cy.get('.button')
    }

    getLocationTextBox()
    {
    return cy.get('#input').type('Boston')
    }

    getLocationAutoSuggestion()
    {
    return cy.get('div.App div.main_container div.content_block div.select_location_wrapper div.select_location div.location_form div.fields div.ac_input_wrapper:nth-child(1) div.ac_options_container > div.ac_option:nth-child(3)')
    }

    getLocationNextButton()
    {
    return cy.get('[data-testid="home-next-button"]')
    }

    getDisplacementCalendarTextBox()
    {
    return cy.get('[placeholder="Displacement date range"]')
    }

    getRescheduleStartDate()
    {
    return cy.get('[data-date-value="1655231400000"]')
    }

    getRescheduleEndDate()
    {
    return cy.get('[data-date-value="1655231400000"]')
    }

    getOutside()
    {
    return cy.get('body').click(0, 0)
    }

    getScrollDown()
    {
    return cy.scrollTo('bottom')
    }

    getImpactDatesNextButton()
    {
    return cy.get('[data-testid="impact-date-next-button"]')
    }

    getCreateCSVHeader()
    {
    return cy.get(' .header_text')
    }

    getCreateCSVNextButton()
    {
    return cy.get('[data-testid="next-button"]')
    }

    getCSVPreviewHeader()
    {
    return cy.get('div.App div.main_container div.content_block div.csv_preview div.main-date-underline > h3.date_header')
    }

    getCSVPreviewNextButton()
    {
    return cy.get('.button_text')
    }

    getDownloadCSVHeader()
    { 
    return cy.get('.file_header')
    }

    getDownloadCSVButton()
    {
    return cy.get('.button_text')
    }
    }

    export default CNATTApp;