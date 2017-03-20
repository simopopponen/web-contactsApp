function addContacts() {

    //Create customer object
    contacts = createCustomer();
    //If success then do other things
    if (contacts) {
        contactsArr.push(contacts);
        storeContacts(contactsArr); //Store contatcs to localstorage
        addCustomer(contactsArr); //Add customer to screen
        //getContacts(contactsArr); //Get contatcs from local storage
        document.forms("formi").reset();
    }
    else {
        alert("Createcustomer didn't success!");
        contacts = [];
    }
}

