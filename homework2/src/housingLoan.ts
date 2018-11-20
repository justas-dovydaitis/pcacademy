import Loan from './loan';
import Result from './result';

// Formules nera tikros. Pats sugalvojau. Sori, tingejau ekonomika mokintis.
export default class HousingLoan implements Loan {
	readonly interest: number = 0.02; // Nurodytos palukanos 20%
	readonly maxTerm: number = 30 * 12; // Maksimalus paskolos terminas.
	readonly childNeeds: number = 125; // Primetu, kad tiek pinigu vaikui reikia islaikyti per menesi.

	// Priskiriu default reiksmes;
	maxAmmount: number = 0;

	sallary: number = 800;
	children: number = 0;
	ammount: number = 35000;
	term: number = 12;

	constructor(
		sallary: number,
		children: number,
		ammount: number,
		term: number,
	) {
		this.sallary = sallary;
		this.children = children;
		this.ammount = ammount;
		this.term = term;
	}
	calculateMaxAmmount() {
		let k: number = 0.4; // Koeficientas, kiek procentu pajamu skiriama paskolai atiduoti.

		if (this.term > this.maxTerm) {
			alert(`Longest term is ${this.maxTerm}`);
			return;
		}

		let allChildNeeds = this.childNeeds * this.children;
		let sallaryAfterChilds = this.sallary - allChildNeeds;
		if (sallaryAfterChilds < 380) {
			alert('Your sallary is too small');
			this.maxAmmount = 0;
			return;
		}
		let maxMonthAmmount = sallaryAfterChilds * k;
		let monthFee = maxMonthAmmount * this.interest;
		maxMonthAmmount += monthFee;
		this.maxAmmount = maxMonthAmmount * this.maxTerm;
	}
	calculate(): Result {
		this.calculateMaxAmmount();
		let result: Result;
		if (this.ammount > this.maxAmmount)
			alert(`Maximum ammount of loan is ${this.maxAmmount}`);
		else if (this.term > this.maxTerm)
			alert(`Longest term is ${this.maxTerm}`);
		else {
			let allFee: number = this.ammount * this.interest * this.term;
			let monthFee: number = allFee / (this.term * 12);
			let allAmmount: number = this.ammount + allFee;
			let monthAmmount: number = allFee / this.term;
			result = new Result(
				Math.round(allFee),
				Math.round(monthFee),
				Math.round(allAmmount),
				Math.round(monthAmmount),
				Math.round(this.interest * 100),
			);
		}
		return result;
	}
}
