/**
 * Created by ivv179 on 8/7/14.
 */
Ext.define('SA.view.tablet.leftnav.RecentlyViewedQuotes', {
    extend: 'Ext.dataview.List',
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
        itemTpl: '<div class="recentlyvieweditem"><div class="header" style="font-weight: bold;font-size: 16px;text-align: left;color: dodgerblue"> {name}'+
            ' </div><div class="shortDesc" style="font-size: 14px;text-align: left;color: lightblue"> Customer Email: {customerEmail}</div> '+
            '<div class="status" style="font-size: 14px;text-align: left;color: lightblue"> Status: {status}</div></div>'
    }
});