const copyManagerText = () =>{
    const managerBtnEl = document.querySelector('#manager-btn');
    //text content
    const managerName = document.querySelector('#manager-name');
    const managerId = document.querySelector('#manager-id');
    const managerEmail = document.querySelector('#manager-email');
    const managerOfficeNumber = document.querySelector('#manager-office-number');

    managerBtnEl.addEventListener("click", () =>{
        const managerText = `Name: ${managerName.innerText}\nRole: Manager\nId: ${managerId.innerText}\nEmail: ${managerEmail.innerText}\n Office number: ${managerOfficeNumber.innerText}`
        // managerText.select();
        navigator.clipboard.writeText(valueof(managerText));
    });
};  copyManagerText();

const copyEmployeeText = () =>{
    const employeeBtnEl = document.querySelector('#employee-btn');
    //text content
    const employeeName = document.querySelector('#employee-name');
    const employeeId = document.querySelector('#employee-id');
    const employeeEmail = document.querySelector('#employee-email');
    
    employeeBtnEl.addEventListener("click", () =>{
        const employeeText = `Name: ${employeeName.innerText}\nRole: Employee\nId: ${employeeId.innerText}\nEmail: ${employeeEmail.innerText}`
        // employeeText.select();
        navigator.clipboard.writeText(valueof(employeeText));
    });
};  copyEmployeeText();


const copyEngineerText = () =>{
    const engineerBtnEl = document.querySelector('#engineer-btn');

    const engineerName = document.querySelector('#engineer-name');
    const engineerId = document.querySelector('#engineer-id');
    const engineerEmail = document.querySelector('#engineer-email');
    const engineerGithub = document.querySelector('#engineer-github');

    engineerBtnEl.addEventListener("click", () =>{
        const engineerText = `Name: ${engineerName.innerText}\nRole: Engineer\nId: ${engineerId.innerText}\nEmail: ${engineerEmail.innerText}\nGithub: ${engineerGithub.innerText}`
        // engineerText.select();
        navigator.clipboard.writeText(valueof(engineerText));
    });
};  copyEngineerText();


const copyInternText = () =>{
    const internBtnEl = document.querySelector('#intern-btn');

    const internName = document.querySelector('#intern-name');
    const internId = document.querySelector('#intern-id');
    const internEmail = document.querySelector('#intern-email');
    const internSchool = document.querySelector('#intern-school');

    internBtnEl.addEventListener("click", () =>{
        const internText = `Name: ${internName.innerText}\nRole: Intern\nId: ${internId.innerText}\nEmail: ${internEmail.innerText}\nSchool: ${internSchool.innerText}`
        // internText.select();
        navigator.clipboard.writeText(valueof(internText));
    });
};  copyInternText();