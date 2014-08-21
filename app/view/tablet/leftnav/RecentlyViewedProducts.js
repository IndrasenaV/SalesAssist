/**
 * Created by ivv179 on 8/7/14.
 */
Ext.define('SA.view.tablet.leftnav.RecentlyViewedProducts', {
    extend: 'Ext.dataview.List',
    cls : 'item',
    xtype: 'tablet_recentlyViewedProduct',
    config: {
        store : 'RecentlyViewedProducts',
        plugins: [
            {
                xclass: 'Ext.plugin.PullRefresh',
                pullText: 'Pull down for recently viewed products'
            }
        ],
        itemTpl: '<div class="title"> {name}'+ '</div>'+
            '<div class="description"> {shortDescription} , {currencyStr} {price} </div> '
    }
});