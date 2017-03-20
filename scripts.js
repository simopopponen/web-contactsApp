

function addCustomer(userArr) {
        var row = '';
        for (var i = 0; i < userArr.length; i++) {
            row += '<tr>';
            row += '<td>' + userArr[i].firstName + '</td>';
            row += '<td>' + userArr[i].lastName + '</td>';
            row += '<td>' + userArr[i].phoneNumber + '</td>';
            row += '<td> ' + userArr[i].address + ', ' + userArr[i].postalCode + ' ' + userArr[i].city + '</td>';
            row += '</tr>';
        }
        var customersTable = document.getElementById("customerTable");
        customersTable.innerHTML = row;

    }






/*function checkIfExists(fname, lname)
{

        getContacts(contactsArr);

        for (var i = 0; i < contactsArr.length; i++) {
            if (lname === contactsArr[i].lastName) {
                if (fname === contactsArr[i].firstName) {
                    alert("User can be found from localStorage. We will update the data!");
                    localStorage.removeItem(JSON.stringify(contactsArr[i]));
                    console.log(contactsArr[i]);
                    return true;
                }

            }
        }
        return false;
    }
*/

