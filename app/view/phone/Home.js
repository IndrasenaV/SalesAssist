Ext.define('SA.view.phone.Home', {
    extend: 'Ext.Container',
    xtype: 'phone_home',
    fullscreen: true,
    requires: [
        'SA.view.phone.Login'
    ],
    config : {
        layout : 'card',
        fullscreen : true,
        activeItem : 1,
        width : '100%',
        height : '100%',
        items : [{
            xtype : 'phone_login'
          //  html : 'Started app'
        }
        ]
    }
});
