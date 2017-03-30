Ext.define("App.view.login.Login", {
    extend: 'Ext.window.Window',
    xtype: 'login',
 
    requires: [
        'App.view.login.LoginController',
        'Ext.form.Panel'
    ],
 
    controller: 'login',
    bodyPadding: 10,
    title: 'Login Window',
    closable: false,
    autoShow: true,
  
    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Username',
            bodyStyle: 'margin: 10px;',
            allowBlank: false,
            margin: "10 0 0 0",
            span:'padding:1000px'
        },
        {  xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false,
            margin: "10 0 0 0"
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Enter any non-blank password'
        }],
        buttons: [{
            text: 'Login',
            formBind: true,
            listeners: {
                click: 'onLoginClick'
            }
        }]
    }
});