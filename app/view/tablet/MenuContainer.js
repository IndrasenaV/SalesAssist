Ext.define('SA.view.tablet.MenuContainer', {
    extend: 'Ext.Container',
    xtype: 'tablet_menu',
    requires: [
        'SA.view.tablet.leftnav.RecentlyViewedCustomers',
        'SA.view.tablet.leftnav.RecentlyViewedProducts',
        'SA.view.tablet.leftnav.RecentlyViewedQuotes'
    ],
    config: {
        layout: 'card',
        activeItem: 0,
        height: '100%',
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
                xtype: 'tablet_recentlyViewedQuotes'
            },
            {
                xtype: 'tablet_recentlyViewedProduct'
            },
            {
                xtype: 'tablet_recentlyViewedCustomer'
            }
        ]
    }
});