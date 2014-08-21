/**
 * Created by ivv179 on 8/7/14.
 */
Ext.define('SA.view.tablet.leftnav.RecentlyViewedCustomers', {
    extend: 'Ext.dataview.List',
    cls : 'item',
    xtype: 'tablet_recentlyViewedCustomer',
    config: {
        plugins: [
            {
                xclass: 'Ext.plugin.PullRefresh',
                pullText: 'Pull down for recently viewed customers'
            }
        ],
        store : 'RecentlyViewedCustomers',
        itemTpl:'<div class="title"> {name}'+ '</div>'+
            '<div class="description"> {phoneNo} , {email} </div> '
    }
});