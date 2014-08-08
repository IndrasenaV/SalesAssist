/**
 * Created by ivv179 on 8/7/14.
 */
Ext.create('SA.store.RecentlyViewedQuotes', {
    extend : 'Ext.data.Store',
    model: 'QuoteSummary',
    proxy: {
        type: 'ajax',
        url : AJAX_URL+'recentlyviewedquote.json',
        reader: 'json'
    },
    autoLoad: true
});