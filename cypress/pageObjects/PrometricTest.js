class Prometric
{

getStartedButton()
{
return cy.get('[data-testid="getStarted-button"]')
}

getwelcomeText()
{
return cy.get('.title')
}

getLanguageDropDown()
{
return cy.get('div.App div.parent-container div.dropdownContainer div.dropdown.language-dropdown > div.dropdown-btn')
}

getLanguageDropDownBox()
{
return cy.get('div.App div.parent-container div.dropdownContainer div.dropdown.language-dropdown div.dropdown-content.arrow_box > div.dropdown-item.activelanguage')
}

getVerifyWelcomeText()
{
return cy.get('.title')
}

getVerifyIdCheckbox()
{
return cy.get('div.App div.parent-container div.content-maincontainer div.sectionHolder div.verify-div div.checkbox__wrapper:nth-child(3) > span.checkbox-text:nth-child(1)')
}

getEnabledButton()
{
return cy.get('div.App div.parent-container div.content-maincontainer div.sectionHolder div.verify-div div.review:nth-child(4) > div.primary_enabled.button')
}

getMakeAChangeLink()
{
return cy.get('div.App div.parent-container div.content-maincontainer div.sectionHolder div.info-holder div.firstsection > span.makeachange:nth-child(2)')
}

getModalHeader()
{
return cy.get('div.App div.parent-container div.content-maincontainer div.modal div.modal-content > h1.modal-header')
}

}

export default Prometric;