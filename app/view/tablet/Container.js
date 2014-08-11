/**
 * Created by ivv179 on 8/8/14.
 */
Ext.define('SA.view.tablet.Container', {
    extend: 'Ext.Container',
    xtype: 'tablet_container',
    requires: [
        'SA.view.tablet.MenuContainer',
        'SA.view.tablet.WorkContainer'
    ],
    config : {
        layout : {
            type : 'hbox',
            // pack : 'center',
            align : 'stretch'
        },
        fullscreen : true,
        activeItem : 1,
        width : '100%',
        height : '100%',
        items : [{
            xtype : 'tablet_menu',
            width : 300
        },
            {
                xtype : 'tablet_work',
                flex : 1
            }
        ]
    }
});