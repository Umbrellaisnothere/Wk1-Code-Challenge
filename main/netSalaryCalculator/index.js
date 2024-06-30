function netSalaryCalculator(basicSalary, benefits) {
    // Tax rates and deductions
    
    const taxRate = 0.15;
    const nhifRate = 0.05;
    const nssfRate = 0.1;
    
    // gross salary
    const grossSalary = basicSalary + benefits;
    
    // deductions
    const payee = grossSalary * taxRate;
    const nhifDeduction = grossSalary * nhifRate;
    const nssfDeduction = grossSalary * nssfRate;
    
    // net salary
    const netSalary = grossSalary - payee - nhifDeduction - nssfDeduction;
    
    // Output results
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`Payee (Tax): ${payee}`);
    console.log(`NHIF Deduction: ${nhifDeduction}`);
    console.log(`NSSF Deduction: ${nssfDeduction}`);
    console.log(`Net Salary: ${netSalary}`);
}
