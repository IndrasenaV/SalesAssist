/**
 * Created by ivv179 on 8/4/14.
 */
Ext.define('SA.view.tablet.Home', {
    extend: 'Ext.Container',
    xtype: 'tablet_home',
    fullscreen: true,
    requires: [
        'SA.view.tablet.Login',
        'SA.view.tablet.Container'
    ],
    config : {
        layout : 'card',
        fullscreen : true,
        activeItem : 0,
        width : '100%',
        height : '100%',
        items : [{
            xtype : 'tablet_login'
        },{
            xtype : 'tablet_container'
        }
        ]
    }
});
