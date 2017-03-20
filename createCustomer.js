var contactsArr = [];
var contacts = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address:'',
    postalcode:'',
    city: ''
}

function createCustomer() {
    //Create customer object
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var postalCode = document.getElementById("postalCode").value;

    return {
        firstName: fname,
        lastName: lname,
        phoneNumber: phone,
        city: city,
        postalCode: postalCode,
        address: address
    }

}