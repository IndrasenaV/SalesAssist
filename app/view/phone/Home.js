Ext.define('SA.view.phone.Home', {
    extend: 'Ext.Container',
    alias: 'widget.phone_home',
    fullscreen: true,
    requires: [
    ],
    config : {
        layout : 'card',
        items : [{
            xtype : 'phone_login'
        }
        ]
    }
});
