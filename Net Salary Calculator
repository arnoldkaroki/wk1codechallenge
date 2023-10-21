// Declare all the variables using a single let statement
let totalTaxes, payeAmount, NHIF, netSalary, taxMessage, nssfDeductions;

// Define and initialize gross salary
let grossSalary = 20000;

// Define the taxCalculator function
function taxCalculator() {
    // Define a nested function for calculating paye
    function calculatePaye(grossSalary) {
        if (grossSalary <= 24000) {
            return grossSalary * 0.01;
        } else if (grossSalary <= 32333) {
            return grossSalary * 0.25;
        } else if (grossSalary <= 500000) {
            return grossSalary * 0.30;
        } else if (grossSalary < 800000) {
            return grossSalary * 0.325;
        } else {
            return grossSalary * 0.35;
        }
    }

    // Define a nested function for calculating NHIF deductions
    function calculateNHIF(grossSalary) {
        // ... (your nhifCalculator logic here)
    }

    // Define a nested function for calculating NSSF deductions
    function calculateNSSF(grossSalary) {
        return grossSalary * 0.06;
    }

    // Calculate paye, NHIF, and NSSF deductions
    payeAmount = calculatePaye(grossSalary);
    NHIF = calculateNHIF(grossSalary);
    nssfDeductions = calculateNSSF(grossSalary);

    // Calculate total taxes and net salary
    totalTaxes = payeAmount + NHIF + nssfDeductions;
    netSalary = grossSalary - totalTaxes;

    // Return a formatted message with the calculated values
    return `Hello, your gross salary is ${grossSalary}, NHIF is ${NHIF}, your paye is ${payeAmount} and your nssf deduction is ${nssfDeductions}. Hence your total taxation is ${totalTaxes} and your Net salary is ${netSalary}`;
}

// Call the taxCalculator function and store the result in the taxMessage variable
taxMessage = taxCalculator();

// Log the formatted message to the console
console.log(taxMessage);
// you can play around with the values for gross salary to get different answers
