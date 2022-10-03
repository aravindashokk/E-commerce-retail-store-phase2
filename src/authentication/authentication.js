// navigate to different pages based on user type
function login(element) {
    let userType = element.value;
    localStorage.setItem('userType', userType);
    if (userType === 'Super Admin' || userType === 'admin') {
        window.location.href = '../Super Admin/Super Admin.html';
    }
    else if (userType === 'School Admin') {
        window.location.href = '../School Admin/School Admin.html'; }
    else if (userType === 'user') {
        window.location.href = '../Users/users.html';
    } else if (userType === 'visitor') {
        window.location.href = '../Visitor/visitor.html'
    }
}

function resetPassword(){
    window.alert("Password has been sent to your email.");
}