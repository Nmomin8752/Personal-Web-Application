var fName = document.getElementById('first_name');
    var lName = document.getElementById('last_name');
    var email = document.getElementById('email');
    var address = document.getElementById('address');
    var phone = document.getElementById('phone');
    var task = document.getElementById('task');
    
    
    function addApplicant(){
    
        let applicant = "First Name: "+fName.value + "\n"+ "Last Name: " + lName.value + "\n"+ "Email: " + email.value + "\n" + "Address: " + address.value + "\n" + "Mobile: " + phone.value + "\n"+ "\n";
        
        if(localStorage.getItem("tasks") == null) {
            localStorage.setItem("tasks", applicant);
        } else {
            let storedItem = localStorage.getItem("tasks") + applicant;
            localStorage.setItem("tasks", storedItem);
        }
        updateTasks();
    }
    function updateTasks() {
        task.value = localStorage.getItem("tasks");
    }
    updateTasks();
    submit.onclick = addApplicant;
    
    
function goBack() {
  window.history.go(-2);
}