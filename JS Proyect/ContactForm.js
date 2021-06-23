//Get submit form
let submitButton = document.getElementById('submit');

//Create event listener to all
submitButton.addEventListener("click", (e) =>{
    e.preventDefault()

    //get form values
    let name = document.getElementById('name').value
    let company = document.getElementById('company').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let message = document.getElementById('message').value

    //Save form data to firebase
    db.doc().set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    }).then( () => {
        console.log("Data saved")
    }).catch( (error) => {
        console.log(error)
    })

    //alert
    alert("Your form has been submit successfully")
})

