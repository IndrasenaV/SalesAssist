/**
 * Created by ivv179 on 8/11/14.
 */
Ext.define('SA.view.tablet.product.Main', {
    extend: 'Ext.Container',
    xtype: 'tablet_product_main',
    requires : [
        'SA.view.tablet.product.SearchContainer',
        'SA.view.tablet.product.List'
    ],
    fullscreen: true,
    config : {
        layout : {
            type : 'hbox',
            align : 'stretch'
        },
        defaults : {
            flex : 1,
            padding : 10
        },
        items : [{
                    xtype : 'tablet_product_searchcontainer'
            },{
            xtype : 'tablet_product_list'
        }
        ]
    }
});