/**
 * Created by ivv179 on 8/11/14.
 */
Ext.define('SA.store.RecentlyViewedProducts', {
    extend : 'Ext.data.Store',
    config : {
        model: 'SA.model.ProductSummary',
        proxy: {
            type: 'ajax',
            url : AJAX_URL+'recentlyviewedproduct.json',
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