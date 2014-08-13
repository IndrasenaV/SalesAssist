Ext.define('SA.view.tablet.MenuContainer', {
    extend: 'Ext.Container',
    xtype: 'tablet_menu',
    requires: [
        'SA.view.tablet.leftnav.RecentlyViewedPanel'
    ],
    config: {
        layout: {
            type: 'vbox',
            // pack : 'center',
            align: 'stretch'
        },
        items: [
            {
                html: 'Home'
            },
            {
                html: 'Quotes'
            },
            {
                html: 'Opportunity'
            },
            {
                html: 'Products'
            },
            {
                xtype: 'panel',
                title: 'Recently Viewed Items',
                height: '100%',
                items: [
                    {
                        xtype: 'tablet_recentlyviewed'
                    }
                ]}

        ]
    }
});