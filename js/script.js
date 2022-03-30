// Created by Graeme
// Created on: March 29 
// JS functions for index.html


// This function calculates the total amount of money and how much taxes you will pay
 'use strict'
function calculate () {
	const TAX_RATE = 0.1805
	let hours = parseFloat(document.getElementById('hours').value)
	let rate = parseFloat(document.getElementById('rate').value)
	let total = (hours * rate)
	let tax = (total * TAX_RATE)
	let home_pay = (total - tax)
	document.getElementById('total').innerHTML = 'Your salary would be $' + total.toFixed(2) + ' without taxes' 
	document.getElementById('tax').innerHTML = 'The government will take $' + tax.toFixed(2)
	document.getElementById('home_pay').innerHTML = 'You will take home $' + home_pay.toFixed(2)
}