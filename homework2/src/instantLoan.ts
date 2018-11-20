import Loan from './loan';

class InstantLoan implements Loan {
	readonly interest = 0.2; // Nurodytos palukanos 20%
	readonly maxAmmount = 5000; // Maksimalus paskolos dydis
	readonly maxTerm = 24; // Maksimalus paskolos terminas

	ammount: number;
	term: number;

	calculate() {
	    let result: object = {};
	    if (this.ammount > this.maxAmmount)
	        alert(`Maximum ammount of loan is ${this.maxAmmount}`);
	    else if (this.term > this.maxTerm)
	        alert(`Longest term is ${this.maxTerm}`);
	    else {
	        let allFee: number = this.ammount * this.interest;
	        let monthFee: number = allFee / this.interest;
	        let allAmmount: number = this.ammount + allFee;
	        let monthAmmount: number = allFee / this.term;
	        result = {
	            allFee: allFee,
	            monthFee: monthFee,
	            allAmmount: allAmmount,
	            monthAmmount: monthAmmount,
	        };
	    }
	    return result;
	}
}
