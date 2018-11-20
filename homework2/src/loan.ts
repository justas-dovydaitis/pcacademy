export default interface Loan {

    ammount: number;    // Paskolos dydis.
    term: number;       // Terminas.
    interest: number;   // Palukanos.
    maxAmmount: number  // Maksimalus paskolos dydis.
    maxTerm: number;    // Maksimalus paskolos terminas.
    calculate(): object;// Funkcija skaiciuojanti dalykus.
}