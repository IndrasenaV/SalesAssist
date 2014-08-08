/**
 * Created by ivv179 on 8/4/14.
 */
Ext.define('SA.view.tablet.Home', {
    extend: 'Ext.Container',
    xtype: 'tablet_home',
    fullscreen: true,
    requires: [
    ],
    config : {
        layout : 'card',
        items : [{
            xtype : 'tablet_login'
        }
        ]
    }
});
