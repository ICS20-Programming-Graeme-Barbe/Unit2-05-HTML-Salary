// Created by Graeme
// Created on: March 29 
// JS functions for index.html


// This function calculates the total amount of money and how much taxes you will pay
 'use strict'
function calculate () {
	const TAXE_RATE = (0.1805)
	let hours = parseFloat(document.getElementById('hours').value)
	let rate = parseFloat(document.getElementById('rate').value)
	let total = (hours * rate)
	document.getElementById('total').innerHTML = 'The area is ' + total + ' cm²'
}