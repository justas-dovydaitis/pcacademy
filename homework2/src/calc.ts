import HousingLoan from './housingLoan';
import Result from './result';

// Gauna inputo value
function getNumValue(id: string): number {
	let element = <HTMLInputElement>document.getElementById(id);
	return Number(element.value);
}
function getDiv(id: string) {
	let element = <HTMLElement>document.getElementById(id);
	return element;
}
function calculateHousing(): void {
	let income: number = getNumValue('income');
	let children: number = getNumValue('children');
	let ammount: number = getNumValue('wantedLoan');
	let term: number = getNumValue('wantedTerm');

	let loan: HousingLoan = new HousingLoan(income, children, ammount, term);
	loan.calculateMaxAmmount();
	let result: Result = loan.calculate();
	getDiv('sum').innerHTML = String(result.allAmmount);
	getDiv('payment').innerHTML = String(result.monthAmmount);
	getDiv('interest').innerHTML = String(result.interest) + '%';
	getDiv('monthFee').innerHTML = String(result.monthFee);
}
(<HTMLButtonElement>(
	document.getElementById('calculate')
)).onclick = calculateHousing;
