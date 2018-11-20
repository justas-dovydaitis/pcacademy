export default class Result {
	allFee: number;
	monthFee: number;
	allAmmount: number;
    monthAmmount: number;
    interest: number;
	constructor(
		allFee: number,
		monthFee: number,
		allAmmount: number,
        monthAmmount: number,
        interest: number
	) {
		this.allAmmount = allAmmount;
		this.allFee = allFee;
		this.monthFee = monthFee;
        this.monthAmmount = monthAmmount;
        this.interest = interest;
	}
}
