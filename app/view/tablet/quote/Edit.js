/**
 * Created by ivv179 on 8/21/14.
 */
Ext.define('SA.view.tablet.quote.Edit', {
    extend: 'Ext.Panel',
    xtype: 'tablet_quote_edit',
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