/**
 * Created by ivv179 on 8/21/14.
 */
Ext.define('SA.view.tablet.product.SearchContainer', {
    extend: 'Ext.Container',
    xtype: 'tablet_product_searchcontainer',
    requires : [
        'SA.view.tablet.product.Categories',
        'SA.view.tablet.product.Filter'
    ],
    fullscreen: true,
    config : {
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items : [{
            xtype: 'fieldset',
            width : 300,
            items: [
                {
                    xtype: 'searchfield',
                    label: 'Query',
                    name: 'Search',
                    width : 300,
                    empty : 'code or product name'
                }
            ]
        },
            {
                xtype : 'tablet_product_categories'
            },
            {
                xtype : 'tablet_product_filter'
            }
        ]
    }
});