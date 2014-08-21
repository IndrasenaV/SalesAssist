/**
 * Created by ivv179 on 8/11/14.
 */
Ext.define('SA.view.tablet.opportunity.Main', {
    extend: 'Ext.Panel',
    xtype: 'tablet_opportunity_main',
    fullscreen: true,
    requires : [
        'SA.view.tablet.opportunity.Home',
        'SA.view.tablet.opportunity.Edit'
    ],
    config : {
        layout : {
            type : 'card'
        },
        activeItem : 0,
        items : [{
            xtype : 'tablet_opportunity_home'
        },
        {
            xtype : 'tablet_opportunity_edit'
        }
        ]
    }
});