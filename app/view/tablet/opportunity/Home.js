/**
 * Created by ivv179 on 8/21/14.
 */
Ext.define('SA.view.tablet.opportunity.Home', {
    extend: 'Ext.Panel',
    xtype: 'tablet_opportunity_home',
    config : {
        items : [{
            xtype: 'toolbar',
            docked: 'top',
            items: [
                {
                    xtype: 'button',
                    text: 'New',
                    action : 'new'
                }
            ]
        }
        ]
    }
});