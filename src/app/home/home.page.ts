import { Component } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	lastInputs: string = '';
	dataInputs: string = '';
	currentNumber: string = '';
	actions = [];
	allNumbers = [];
	actionIndex = 0;
	result = 0;
	lastResult = 0;
	ansActive = false;
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
	ResrtAll() {
		this.dataInputs = '';
		this.currentNumber = '';
		this.actions = [];
		this.allNumbers = [];
		this.actionIndex = 0;
		this.ansActive = false;
	}
	InsertCurrentNumber() {
		this.allNumbers.push(Number(this.currentNumber));
		this.currentNumber = '';
	} //InsertCurrentNumber
	CalculateResult(num: number, act: string) {
		if (act == '+') {
			this.result += num;
		} else if (act == '-') {
			this.result -= num;
		} else if (act == '/') {
			this.result /= num;
		} else {
			this.result *= num;
		}
	} //CalculateResult
	Input(value) {
		console.log(value);
		this.result = 0;
		this.actionIndex++;
		if (value == '/' || value == '*' || value == '+' || value == '-') {
			if (this.ansActive == true) {
				this.actions.push(value);
				this.ansActive = false;
			} else {
				this.InsertCurrentNumber();
				this.actions.push(value);
			}
			this.dataInputs += value;
		} else if (value == 'AC') {
			this.ResrtAll();
		} else if (value == 'res') {
			this.InsertCurrentNumber();
			console.log(this.allNumbers, this.actions);
			let ln = this.actions.length;
			for (let i = 0; i < ln; i++) {
				if (i == 0) {
					this.result = this.allNumbers[i];
				}
				let num = this.allNumbers[i + 1];
				let act = this.actions[i];
				this.CalculateResult(num, act);
			} //for
			this.lastInputs = this.dataInputs;
			this.lastResult = this.result;
			this.ResrtAll();
		} else if (value == 'ans') {
			console.log('YES');
			this.dataInputs = this.lastResult.toString();
			this.allNumbers.push(this.lastResult);
			this.ansActive = true;
		} else {
			this.dataInputs += value;
			this.currentNumber += value;
		}
	} //Input
} //HomePage
