/**
 * 
 */
Ext.define('App.view.main.MainController', {
   
	 extend: 'Ext.app.ViewController',
	
 
    alias: 'controller.main',
 
    onClickButton: function () {
    	debugger;
    	
    	
        // Remove the localStorage key/value
        localStorage.removeItem('TutorialLoggedIn');
 
        // Remove Main View
        this.getView().destroy();
 
        // Add the Login Window
        Ext.widget('login');
        
       
    },

afterRequest: function(req, res) {
    console.log("Ahoy!", req);    
}
});