/**
 * Created by ivv179 on 8/11/14.
 */
Ext.define('SA.view.tablet.quote.Main', {
    extend: 'Ext.Panel',
    xtype: 'tablet_quote_main',
    requires: [
        'SA.view.tablet.quote.Home',
        'SA.view.tablet.quote.Edit'
    ],
    config: {
        layout: {
            type: 'card'
        },
        activeItem: 0,
        items: [
            {
                xtype: 'tablet_quote_home'
            },
            {
                xtype: 'tablet_quote_edit'
            }
        ]
    }
});