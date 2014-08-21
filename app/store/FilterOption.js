/**
 * Created by ivv179 on 8/21/14.
 */
Ext.define('SA.store.ProductSearch', {
    extend : 'Ext.data.Store',
    config : {
        model: 'SA.model.FilterOption',
        proxy: {
            type: 'ajax',
            url : AJAX_URL+'filteroptions.json',
            reader: {
                type : 'json',
                idProperty : 'name',
                totalProperty : 'total',
                rootProperty : 'results'
            }
        },
        autoLoad: true
    }
});