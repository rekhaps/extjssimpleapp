Ext.define('App.Application', {
    extend: 'Ext.app.Application',
 
    name: 'App',
    
 
  

    modals: ['App.model.loginModel'],
    stores: ['App.store.loginStore'],
    controllers: ['App.controller.loginController'],
    views: [
        'App.view.login.Login',
        'App.view.main.Main'
    ],
 
 
    launch: function () {
        var supportsLocalStorage = Ext.supports.LocalStorage,
            loggedIn;
 
        if (!supportsLocalStorage) {
 
            // Alert the user if the browser does not support localStorage
            Ext.Msg.alert('Your Browser Does Not Support Local Storage');
            return;
        }
 
        // Check to see the current value of the localStorage key
        loggedIn = localStorage.getItem("TutorialLoggedIn");
 
        //This ternary operator determines the value of the TutorialLoggedIn key.
        //If TutorialLoggedIn isn't true, we display the login window,
        //otherwise, we display the main view
        Ext.widget(loggedIn ? 'app-main' : 'login');
    }
});