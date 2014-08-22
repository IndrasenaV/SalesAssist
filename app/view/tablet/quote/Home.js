/**
 * Created by ivv179 on 8/21/14.
 */
Ext.define('SA.view.tablet.quote.Home', {
    extend: 'Ext.Panel',
    xtype: 'tablet_quote_home',
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
        },{
            html : 'Quotes home page'
        }
        ]
    }
});