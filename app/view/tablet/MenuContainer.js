Ext.define('SA.view.tablet.MenuContainer', {
    extend: 'Ext.TabPanel',
    xtype: 'tablet_menu',
    requires: [
        'SA.view.tablet.leftnav.RecentlyViewedCustomers',
        'SA.view.tablet.leftnav.RecentlyViewedProducts',
        'SA.view.tablet.leftnav.RecentlyViewedQuotes'
    ],
    config: {
        items: [
//            {
//                xtype: 'toolbar',
//                docked: 'top',
//                items: [
//                    { xtype: 'segmentedbutton',
//                        items : [{text : 'Quotes'},{text : 'Customers'},{text : 'Products'}]
//                    }
//                ]
//            },
            {
                xtype: 'tablet_recentlyViewedQuotes',
                title : 'Quotes'
            },
            {
                xtype: 'tablet_recentlyViewedProduct',
                title : 'Products'
            },
            {
                xtype: 'tablet_recentlyViewedCustomer',
                title : 'Customers'
            }
        ]
    }
});