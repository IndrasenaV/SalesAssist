Ext.define('SA.view.tablet.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'phone_home',
    config: {
        fullscreen: true,
        layout : {
            type : 'vbox',
            align : 'stretch',
            pack : 'center'
        },
        items: [
            {
                html : '<span class="inset-login-header">Sales Assist Login</span>',
                height : 100
            },
            {
                xtype: 'fieldset',

                items: [
                    {
                        xtype: 'textfield',
                        name: 'userName',
                        label: 'Username*',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        xtype: 'passwordfield',
                        name: 'password',
                        label: 'Password*',
                        inputType: 'password',
                        allowBlank: false,
                        msgTarget: 'side'
                    },{
                        xtype: 'textfield',
                        name: 'sterlingUrl',
                        label: 'Connect To*',
                        allowBlank: false,
                        msgTarget: 'side',
                        value : 'strlrovad02.corp.pvt'
                    },
                    {
                        xtype: 'textfield',
                        name: 'sterlingPort',
                        label: 'Port*',
                        allowBlank: false,
                        msgTarget: 'side',
                        value : '9080'
                    }
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                items: [
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        text: 'Login',
                        action : 'login'
                    }
                ]
            }
        ]
    }
});