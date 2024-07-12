const { Console } = require("console");
const readline= require ("readline");
   const rl = readline.createInterface ({
     input: process.stdin,
     output: process.stdout
   });
   //The Readline module makes it easier to input and read the output given by the user
function studentsGrade(marks){
    let grade;
    if (marks > 79) {
          grade='A';
    }else if (marks>=60){
         grade='B';
    }else if (marks >=50){
         grade='C';
    }else if (marks>=40){
         grade= 'D';
    }else{
         grade='E';
    }
    return (grade);
    //it assigns the grades according to the marks entered
}
rl.question('Enter the student mark (0-100)', (mark)=>{
    const Grade = studentGrade(parseInt(mark));
    console.log(`The student grade is: ${grade}`);
    rl.close();
}
);
//it calls a function and displays the grade