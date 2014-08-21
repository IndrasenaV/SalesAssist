/**
 * Created by ivv179 on 8/8/14.
 */
Ext.define('SA.view.tablet.WorkContainer', {
    extend: 'Ext.Container',
    xtype: 'tablet_work',
    requires: [
        'SA.view.tablet.product.Main',
        'SA.view.tablet.opportunity.Main',
        'SA.view.tablet.quote.Main',
        'SA.view.tablet.dashboard.Main',
        'SA.view.tablet.settings.Main'
    ],
    config : {
        layout : 'card',
        items : [
            {
                xtype : 'tablet_dashboard_main'
            },
            {
               xtype : 'tablet_product_main'
            },
            {
                xtype : 'tablet_opportunity_main'
            },
            {
                xtype : 'tablet_quote_main'
            },
            {
                xtype : 'tablet_settings_main'
            }]
    }
});