/**
 * Created by ivv179 on 8/21/14.
 */
Ext.define('SA.view.tablet.leftnav.RecentlyViewedOpportunity', {
    extend: 'Ext.dataview.List',
    cls : 'item',
    xtype: 'tablet_recentlyViewedOpportunity',
    config: {
        plugins: [
            {
                xclass: 'Ext.plugin.PullRefresh',
                pullText: 'Pull down for recently viewed opportunities'
            }
        ],
        store : 'RecentlyViewedOpportunities',
        itemTpl: '<div class="title"> {name}'+ '</div>'+
            '<div class="description"> {status} , {customerEmail} </div> '
    }
});