/**
 * Created by ivv179 on 8/21/14.
 */
Ext.define('SA.store.RecentlyViewedOpportunities', {
    extend : 'Ext.data.Store',
    config : {
        model: 'SA.model.OpportunitySummary',
        proxy: {
            type: 'ajax',
            url : AJAX_URL+'recentlyviewedopportunity.json',
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