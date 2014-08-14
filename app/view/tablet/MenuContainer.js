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
        cls : 'menucontainer',
        items: [{
            xtype : 'segmentedbutton',
            allowMultiple: false,
            layout:'vbox',
            cls : 'menutoggle',
            items: [
                {
                    text: 'Home',
                    pressed : true,
                    action : 'home'
                },
                {
                    text : 'Quote',
                    action : 'quote'
                },
                {
                    text: 'Opportunity',
                    action : 'opportunity'
                },
                {
                    text: 'Products',
                    action : 'product'
                },
                {
                    text: 'Settings',
                    action : 'setting'
                }
            ]
            },
            {
                xtype: 'panel',
                title: 'Recently Viewed Items',
                flex : 1,
                items: [
                    {
                        xtype: 'tablet_recentlyviewed'
                    }
                ]}

        ]
    }
});