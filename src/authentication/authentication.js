// navigate to different pages based on user type
function login(element) {
    let userType = element.value;
    localStorage.setItem('userType', userType);
    if (userType === 'Super Admin' || userType === 'admin') {
        window.location.href = '../Super Admin/Super Admin.html';
    }
    else if (userType === 'School Admin') {
        window.location.href = '../School Admin/School Admin.html'; }
    else if (userType === 'Student') {
        window.location.href = '../Student/Student.html';
    } else if (userType === 'BusinessOwner') {
        window.location.href = '../BusinessOwner/BusinessOwner.html';
    }
}

function resetPassword(){
    window.alert("Password has been sent to your email.");
}