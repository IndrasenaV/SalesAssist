/**
 * Created by ivv179 on 8/21/14.
 */
Ext.define('SA.store.ProductSearch', {
    extend : 'Ext.data.Store',
    config : {
        model: 'SA.model.ProductSummary',
        proxy: {
            type: 'ajax',
            url : AJAX_URL+'productsearch.json',
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