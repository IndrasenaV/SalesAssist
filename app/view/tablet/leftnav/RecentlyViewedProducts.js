/**
 * Created by ivv179 on 8/7/14.
 */
Ext.define('SA.view.tablet.leftnav.RecentlyViewedProducts', {
    extend: 'Ext.dataview.List',
    xtype: 'tablet_recentlyViewedProduct',
    config: {
        store : 'RecentlyViewedProducts',
        itemTpl: '<div style="font-weight: bold;font-size: 16px;text-align: left;color: dodgerblue"> Quote Name: {name}'+
            ' </div><div  style="font-size: 14px;text-align: left;color: lightblue"> Customer Email: {customerEmail}</div> '+
            '<div  style="font-size: 14px;text-align: left;color: lightblue">Quote Status: {status}</div>'
    }
});