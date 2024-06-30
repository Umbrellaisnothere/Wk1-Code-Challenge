    //netSalaryCalculator
function netSalaryCalculator() {

    // The prompt of the basic salary and the benefits
    prompt = require ('prompt-sync')();
    let basicSalary = parseFloat(prompt("Please Enter a valid Basic Salary:"));

    let benefits = parseFloat(prompt("Key in benefits:"));

    if (isNaN (basicSalary), isNaN(benefits) || (basicSalary)<= 0,(benefits) <=0) {
        console.log(`Entries must be a number and the basic salary should be >= 0`);
    }

    return;
}    
    
    // paye
function paye (taxableIncome) {
    const paye = 0;
    if (taxableIncome <= 24000) {
        paye = taxableIncome * 0.10;
} else if (taxableIncome <= 32333) {
        paye = 2400 + (taxableIncome - 24000) * 0.25;
} else if (taxableIncome <= 500000) {
    paye = 4403.25 + (taxableIncome -32333) * 0.30;
}  else if (taxableIncome <= 800000) {
    paye = 144783.35 + (taxableIncome - 500000) * 0.325;
} else{
    paye = 242083.25 + (taxableIncome - 800000) * 0.35;
}
return paye;
}  

// gross salary
   const grossSalary = basicSalary + benefits;
   

    //nhif

    let nhif = 0;

    if(grossSalary <= 5999) nhif = 150;
else if (grossSalary <= 7999) nhif = 300;

else if (grossSalary <= 11999) nhif = 400;

else if (grossSalary <= 14999) nhif = 500;

else if (grossSalary <= 19999) nhif = 600;

else if (grossSalary <= 24999) nhif = 750;

else if (grossSalary <= 29999) nhif = 850;

else if (grossSalary <= 34999) nhif = 900;

else if (grossSalary <= 39999) nhif = 950;

else if (grossSalary <= 44999) nhif = 1000;

else if (grossSalary <= 49999) nhif = 1100;

else if (grossSalary <= 59999) nhif = 1200;

else if (grossSalary <= 69999) nhif = 1300;

else if (grossSalary <= 79999) nhif = 1400;

else if (grossSalary <= 89999) nhif = 1500;

else if (grossSalary <= 99999) nhif = 1600;

else nhif = 1700;



       //NSSF
       const tier1Limit = 7000;
       const tier2Limit = 36000;
       const nssfRate = 0.06;

        let nssf;

if ( grossSalary <= tier1Limit) {
    nssf = grossSalary * nssfRate;
}  else if (grossSalary <= tier2Limit) {
    nssf = tier1Limit * nssfRate + (grossSalary - tier1Limit) * nssfRate;
}  else {
    nssf = tier1Limit * nssfRate + (tier2Limit - tier1Limit) *nssfRate;
}

       
    // deductions
    const nhifDeduction = grossSalary * nhifRate;
    const nssfDeduction = grossSalary * nssfRate;
    

    // net salary
    const netSalary = grossSalary - paye - nhif - nssf;

    
    // Output results
    console.log(`Paye(Tax): ${paye}`);
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`nhif: ${nhif}`);
    console.log(`nssf: ${nssf}`);
    console.log(`net Salary: ${netSalary}`);