function calculateNetSalary(basicSalary, benefits){
   const grossSalary= basicSalary + benefits;
   const tax= grossSalary*0.05;
   const NHIF = grossSalary *0.02;
  const NSSF = grossSalary *0.06;
  const allDeductions=('tax'+'NHIF'+'NSSF')
  //it adds all the deductions calculated and categorises them as one
  const netSalary=grossSalary-allDeductions;
 
  return{
    grossSalary,
    tax,
    NHIF,
    NSSF,
    netSalary
//it return all of the things which are calculated
  };
}