/**
 * Created by ivv179 on 8/7/14.
 */
Ext.define('SA.view.tablet.leftnav.RecentlyViewedQuotes', {
    extend: 'Ext.dataview.List',
    cls : 'item',
    requires : ['Ext.plugin.PullRefresh'],
    xtype: 'tablet_recentlyViewedQuotes',
    config: {
        store : 'RecentlyViewedQuotes',
        plugins: [
            {
                xclass: 'Ext.plugin.PullRefresh',
                pullText: 'Pull down for recently modified quotes'
            }
        ],
        itemTpl: '<div class="title"> {name}'+ '</div>'+
            '<div class="description"> {status} , {customerEmail} </div> '
    }
});