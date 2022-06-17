class WebControl
{

getcheckBoxOption1()
{
return cy.get('#checkBoxOption1')
}

getcheckBox()
{
return cy.get('input[type="checkbox"]')
}

getcheckBoxOption2()
{
return cy.get('select').select('option2')
}

getAutoComplete()
{
return cy.get('#autocomplete')
}

getDisplayedTextBox() 
{
return cy.get('#displayed-text')
}

getHideTextBox()
{
return cy.get('#hide-textbox')
}

getshowTextBox()
{
return cy.get('#show-textbox')
}

getRadioButton()
{
return cy.get('[value="radio2"]')
}

getAlertButton(){
return cy.get('#alertbtn')
}

getConfirmButton(){
return cy.get('[value="Confirm"]')
}

getOpenTab(){
return cy.get('#opentab')
}

getMouseHover(){
return cy.get('div.mouse-hover-content')
}

}
export default WebControl;