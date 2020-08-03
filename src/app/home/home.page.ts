import { Component } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	index = 0;
	firstNumber: string = '0';
	secondNumber: string = '0';
	oldString: string;
	currentString: string = '0';
	result: number;
	oldResult: number;
	action: boolean = false;
	actionString: string;
	constructor() {
		document.body.setAttribute('class', 'dark');
	}
	OnClick(event) {
		let systemDark = window.matchMedia('(prefers-color-scheme: dark)');
		systemDark.addListener(this.ColorTest);
		if (event.detail.checked) {
			document.body.setAttribute('class', 'dark');
		} else {
			document.body.setAttribute('class', 'light');
		}
	} //onClick

	ColorTest(systemInitiatedDark) {
		if (systemInitiatedDark.matches) {
			document.body.setAttribute('class', 'dark');
		} else {
			document.body.setAttribute('class', 'light');
		}
	} //colorTest
	CalculationReset() {
		this.firstNumber = '0';
		this.secondNumber = '0';
		this.action = false;
		this.oldString = this.currentString;
		this.oldResult = this.result;
		this.currentString = '0';
	} //CalculationRest
	Result(firstString: string, secondString: string) {
		const num1 = Number(firstString);
		const num2 = Number(secondString);
		if (this.actionString == '/') {
			this.result = num1 / num2;
		} else if (this.actionString == '*') {
			this.result = num1 * num2;
		} else if (this.actionString == '-') {
			this.result = num1 - num2;
		} else {
			this.result = num1 + num2;
		}
		this.CalculationReset();
	} //Result
	Input(value) {
		console.log(value);
		if (this.result != undefined && value != 'ans') {
			this.result = undefined;
		}
		if (value == '/' || value == '*' || value == '+' || value == '-') {
			this.action = true;
			this.actionString = value;
			this.currentString += value;
		} else if (
			value == 'AC' ||
			value == 'del' ||
			value == 'ans' ||
			value == '%' ||
			value == 'res'
		) {
			if (value == 'AC') {
				this.CalculationReset;
				this.currentString = '0';
			}
			if (value == '%') {
				this.Result(this.firstNumber, this.secondNumber);
				this.result = this.result / 100;
			}
			if (value == 'ans') {
				this.currentString = this.result.toString();
				this.firstNumber = this.result.toString();
			}
			if (value == 'res') {
				this.Result(this.firstNumber, this.secondNumber);
			}
		} else {
			this.currentString += value;
			if (this.action == false) {
				this.firstNumber += value;
			} else {
				this.secondNumber += value;
			}
		}
	} //Input
} //HomePage
