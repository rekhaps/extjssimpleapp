/**
 * 
 */
Ext.define('App.model.loginModel', {
	extend : 'Ext.data.Model',
	
	
	init:function()
	{
		console.log("model");	
	},


fields : [{
	name : 'name', //this property will indicate your data field property   
	mapping : 'name' //this property will indicate dataIdex in grid.
},{
	name : 'rollNo',
	mapping : 'rollNo'
}]
});