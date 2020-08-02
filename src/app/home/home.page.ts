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
	result: Number;
	actions = ['1', '+', '2'];
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
	Input(value) {
		console.log(value);
		if (value == 'AC') {
			this.index = 0;
		}
		if (value == 'del') {
			if (this.index != 0) {
				this.index -= 1;
			}
		}
		if (value == 'percent') {
			if (this.index == 0) {
				this.actions[1] = '%';
				this.index += 1;
			}
		}
		if (value == 'div') {
			if (this.index == 0) {
				this.actions[1] = '/';
				this.index += 1;
			}
		}
		if (value == 'mul') {
			if (this.index == 0) {
				this.actions[1] = '*';
				this.index += 1;
			}
		}
		if (value == 'min') {
			if (this.index == 0) {
				this.actions[1] = '-';
				this.index += 1;
			}
		}
		if (value == 'plu') {
			if (this.index == 0) {
				this.actions[1] = '+';
				this.index += 1;
			}
		}
		if (value == 'ans') {
			this.firstNumber = this.result.toString();
			this.index += 1;
			this.result = 0;
		}
		if (value == 'res') {
			console.log(this.firstNumber + ' ' + this.secondNumber);
			if (this.actions[1] == '+') {
				this.result = Number(this.firstNumber) + Number(this.secondNumber);
			}
			if (this.actions[1] == '-') {
				this.result = Number(this.firstNumber) - Number(this.secondNumber);
			}
			if (this.actions[1] == '/') {
				this.result = Number(this.firstNumber) / Number(this.secondNumber);
			}
			if (this.actions[1] == '*') {
				this.result = Number(this.firstNumber) * Number(this.secondNumber);
			}
			console.log(this.result);
			this.firstNumber = '0';
			this.secondNumber = '0';
			this.index = 0;
		}
		/*---------------------------numbers-----------------------------------*/
		if (value == '.') {
			if (this.index == 0) {
				this.firstNumber += value;
			} else {
				this.secondNumber += value;
			}
		}
		if (value == '1') {
			if (this.index == 0) {
				this.firstNumber += value;
			} else {
				this.secondNumber += value;
			}
		}
		if (value == '2') {
			if (this.index == 0) {
				this.firstNumber += value;
			} else {
				this.secondNumber += value;
			}
		}
		if (value == '3') {
			if (this.index == 0) {
				this.firstNumber += value;
			} else {
				this.secondNumber += value;
			}
		}
		if (value == '4') {
			if (this.index == 0) {
				this.firstNumber += value;
			} else {
				this.secondNumber += value;
			}
		}
		if (value == '5') {
			if (this.index == 0) {
				this.firstNumber += value;
			} else {
				this.secondNumber += value;
			}
		}
		if (value == '6') {
			if (this.index == 0) {
				this.firstNumber += value;
			} else {
				this.secondNumber += value;
			}
		}
		if (value == '7') {
			if (this.index == 0) {
				this.firstNumber += value;
			} else {
				this.secondNumber += value;
			}
		}
		if (value == '8') {
			if (this.index == 0) {
				this.firstNumber += value;
			} else {
				this.secondNumber += value;
			}
		}
		if (value == '9') {
			if (this.index == 0) {
				this.firstNumber += value;
			} else {
				this.secondNumber += value;
			}
		}
		if (value == '0') {
			if (this.index == 0) {
				this.firstNumber += value;
			} else {
				this.secondNumber += value;
			}
		}
	} //Input
} //HomePage
