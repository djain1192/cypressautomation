
/// <reference types="Cypress" />
import HomePage from '../pageObjects/TestFramework'
const homePage = new HomePage()

  //#region beforeEach 

describe('TestFrameworkTestSuite', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('POCurl'))
    // root-level hook
    // runs once before all tests
    cy.fixture('example').then(function (data) {
      this.data = data
    })
  })
  //#endregion beforeEach

  //#region TestFramework

  it('Verify user is able to redirect into site', () => {
    cy.url().should('eq', 'https://rahulshettyacademy.com/angularpractice/')
  }
  )

  it('Verify user is able to submit the form', function () {
    homePage.getEditBox().type(this.data.name)
    homePage.getGender().select(this.data.gender)
    homePage.getTwoWayDataBinding().should('have.value', this.data.name)
    homePage.getEntrepreneaur().should('be.disabled')
    Cypress.config('defaultCommandTimeout', 8000)
    homePage.getSubmitButton().click()
    homePage.getSubmitFormMessage().contains('Success! The Form has been submitted successfully!.')
  }
  )

  it('Verify user is able to redirect into shopping tab', () => {
    homePage.getShopTab().click()
    cy.url().should('include', 'shop')
    //cy.url().should('eq', 'https://rahulshettyacademy.com/angularpractice/shop')
  }
  )

  it('Verify user is able to navigate into check-out page successfully', () => {
    homePage.getShopTab().click()
    homePage.getAddToCart1().click()
    homePage.getAddToCart2().click()
    homePage.getCheckout().click()
  }
  )

  it('Verify user is able to place order successfully', () => {
    homePage.getShopTab().click()
    homePage.getAddToCart1().click()
    homePage.getAddToCart2().click()
    homePage.getCheckout().click()
    homePage.getCheckoutButton().click()
    homePage.getCountryTextBox().type('India')
    homePage.getSuggestionOption().click()
    homePage.getAgreeCheckBox().click()
    homePage.getPurchasedButton().click()
    homePage.getOrderSuccessfullMessage().contains('Success! Thank you! Your order will be delivered in next few weeks :-).')
  }
  )

  //#endregion TestFramework       

})

 