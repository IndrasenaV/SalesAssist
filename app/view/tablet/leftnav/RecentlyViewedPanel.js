/**
 * Created by ivv179 on 8/11/14.
 */
Ext.define('SA.view.tablet.leftnav.RecentlyViewedPanel', {
    extend: 'Ext.TabPanel',
    xtype: 'tablet_recentlyviewed',
    requires: [
        'SA.view.tablet.leftnav.RecentlyViewedCustomers',
        'SA.view.tablet.leftnav.RecentlyViewedProducts',
        'SA.view.tablet.leftnav.RecentlyViewedQuotes',
        'SA.view.tablet.leftnav.RecentlyViewedOpportunity'
    ],
    config: {
        height : '100%',
        cls : 'recentlyviewpanel',
        title : 'Recently Viewed Items',
        items: [
            {
                xtype: 'tablet_recentlyViewedQuotes',
                title : 'Quotes'
            },
            {
                xtype: 'tablet_recentlyViewedOpportunity',
                title : 'Opportunity'
            },
            {
                xtype: 'tablet_recentlyViewedProduct',
                title : 'Products'
            }
        ]
    }
});