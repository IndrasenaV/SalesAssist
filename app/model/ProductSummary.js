/**
 * Created by ivv179 on 8/11/14.
 */
Ext.define('SA.model.ProductSummary',{
    extend : 'Ext.data.Model',
    config : {
        fields : [
            { name : 'id'},
            { name : 'name'},
            { name : 'shortDescription'},
            { name : 'price'},
            { name : 'currency'}
        ]
    }
})