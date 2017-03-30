/**
 * 
 */
Ext.define('App.store.loginStore',{
	extend:'Ext.data.Store',
	model: 'App.model.loginModel',
    autoLoad : true,
    
	
	
	 proxy: {
	        type: 'ajax',
	        //url of your data. this may be from your server in your real application.
			url : 'data/demoData.json',
	        reader: {
	        	//type of data..ExtJS also support xml format.
	            type: 'json',
	            root: 'data'
	        }
	    },
	    
	    afterRequest: function(req, res) {
	    	debugger;
	          console.log("Ahoy!", req);    
	      }
});