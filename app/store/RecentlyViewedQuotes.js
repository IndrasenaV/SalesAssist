/**
 * Created by ivv179 on 8/7/14.
 */
Ext.define('SA.store.RecentlyViewedQuotes', {
    extend : 'Ext.data.Store',
    config : {
        model: 'SA.model.QuoteSummary',
        proxy: {
            type: 'ajax',
            url : AJAX_URL+'recentlyviewedquote.json',
            reader: {
                type : 'json',
                idProperty : 'id',
                totalProperty : 'total',
                rootProperty : 'results'
            }
        },
        autoLoad: true
    }

});