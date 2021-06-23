//add admin cloud functions
const adminForm = document.querySelector('.admin-actions');
adminForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const adminEmail = document.querySelector('#admin-email').value;
    const addAdminRole = functions.httpsCallable('addAdminRole');
    addAdminRole({ email: adminEmail }).then(result => {
        console.log(result)
    });
});

//listen for auth status changes
auth.onAuthStateChanged(user => {
    //console.log(user); //para un testeo puntual con el inspeccionar
    if(user){ //si el usuario está logeado, que se le muestre el contenido
        //console.log('user logged in: ', user); //para un testeo puntual con el inspeccionar
        user.getIdTokenResult().then(idTokenResult => {
            user.admin = idTokenResult.claims.admin;
            setupUI(user);
        })
        //db.collection('guides').get().then(snapshot => { esto lo vamos a cambiar para que se use la database-realtime
        db.collection('guides').onSnapshot(snapshot => {
            setupGuides(snapshot.docs);
            //setupUI(user); ahora lo colocamos arriba para la función del admin
        }, err => {
            console.log(err.message)
        });
    }else{
        //console.log('user logged out: '); //para un testeo puntual con el inspeccionar
        setupUI();
        setupGuides([]);
    }
});

//create new guide
const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', (e) => {
    e.preventDefault();

    db.collection('guides').add({
        title: createForm['title'].value,
        content: createForm['content'].value
    }).then(() => {
        //close the modal and reset form
        const modal = document.querySelector('#modal-create');
        M.Modal.getInstance(modal).close();
        createForm.reset();
    }).catch(err => {
        console.log(err.message);
    })
})

//Sign Up
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {

    e.preventDefault(); //evita que se refresque la página al instante de introducir el user y el pass y darle a SignUp

    //get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    //console.log(email, password); //para un testeo puntual con el inspeccionar

    //sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        return db.collection('users').doc(cred.user.uid).set({
            bio: signupForm['signup-bio'].value
        });
        //console.log(cred.user); //para un testeo puntual con el inspeccionar
    }).then(() => {
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
        signupForm.querySelector('.error').innerHTML = '';
    }).catch(err => {
        signupForm.querySelector('.error').innerHTML = err.message;
    });
});

//Log Out
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    
    e.preventDefault();
    auth.signOut();//.then(() => {
        //console.log('user signed out'); //para un testeo puntual con el inspeccionar
    //});
});

//Log In
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        //console.log(cred.user) //para un testeo puntual con el inspeccionar
        //close the login modal and reset the form 
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
        loginForm.querySelector('.error').innerHTML = '';
    }).catch(err => {
        loginForm.querySelector('.error').innerHTML = err.message;
    });
});