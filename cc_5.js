console.log("Payroll Processing Toolkit Started");
let employees = [
  {
    name: "Sohil Desai",
    hourlyRate: 22.00,
    hoursWorked: 38
  },
  {
    name: "Olivia Martinez",
    hourlyRate: 18.50,
    hoursWorked: 42
  },
  {
    name: "Ethan Wilson",
    hourlyRate: 25.00,
    hoursWorked: 45
  },
  {
    name: "Sophia Carter",
    hourlyRate: 20.00,
    hoursWorked: 40
  }
];
function calculateBasePay(rate, hours) {
  let regularHours = Math.min(hours, 40);
  return regularHours * rate;
}
function calculateOvertimePay(rate, hours) {
  if (hours > 40) {
    let overtimeHours = hours - 40;
    return overtimeHours * rate * 1.5;
  }

  return 0;
}
function calculateTaxes(grossPay) {
  return grossPay * 0.15;
}
function processPayroll(employee) {
  let basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
  let overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
  let grossPay = basePay + overtimePay;
  let taxes = calculateTaxes(grossPay);
  let netPay = grossPay - taxes;

  return {
    name: employee.name,
    basePay: basePay,
    overtimePay: overtimePay,
    grossPay: grossPay,
    netPay: netPay
  };
}
