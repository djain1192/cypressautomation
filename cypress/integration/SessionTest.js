// /// <reference types="cypress" />
// import SessionTest from "../pageObjects/SessionTest"
// const session = new SessionTest

// //const neatCSV = require('neat-csv')


// let productName

// //#region session
// describe('JWT Session', () => {

//     it('is logged in through local storage', async () => {

//         cy.LoginAPI().then(function() {
//             //cy.visit(Cypress.env('SessionTestURL'))
//             cy.visit("https://rahulshettyacademy.com/client",

//                 {
//                     onBeforeLoad: function (window) {

//                         window.localStorage.setItem('token', Cypress.env('token'))

//                     }
//                 })
//         })

//         cy.get(".card-body b").eq(1).then(function (ele) {

//             productName = ele.text();

//         })
//         cy.get(".card-body button:last-of-type").eq(1).click();
//         session.getCart().click();
//         session.getCheckOut().click();
//         // session.getCountryTextBox().type("i")
//         // session.getCountryTextBox().type("n")
//         // session.getCountryTextBox().type("d")
//         // session.getCountryTextBox().type("i")
//         // session.getCountryTextBox().type("a")
//         //cy.on('uncaught:exception', (err, runnable) => { return false; });
//         session.getCountryTextBox().type("Ind")

//         cy.get('.ta-results button').each(($e1, index, $list) => {

//             if ($e1.text() === " India") {
//                 cy.wrap($e1).forceClick()()

//             }

//         })

//         session.getSubmitButton().click()

//     })

//     //#endregion session

// })

