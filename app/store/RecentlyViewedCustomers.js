/**
 * Created by ivv179 on 8/11/14.
 */
Ext.define('SA.store.RecentlyViewedCustomers', {
    extend : 'Ext.data.Store',
    config : {
        model: 'SA.model.CustomerSummary',
        proxy: {
            type: 'ajax',
            url : AJAX_URL+'recentlyviewedcustomer.json',
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