/**
 * 
 */

Ext.define('App.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
 
    alias: 'controller.login',
 
    onLoginClick: function () {
    	debugger;
    	 this.store='App.store.loginStore';
    	 
    	 var store = this.getStore(this.store);
    	 
        // Set the localStorage value to true
        localStorage.setItem("TutorialLoggedIn", true);
 
        // Remove Login Window
        this.getView().destroy();
 
        // Add the main view to the viewport
        Ext.widget('app-main');
    }
});