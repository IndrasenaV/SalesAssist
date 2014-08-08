/**
 * Created by ivv179 on 8/7/14.
 */
Ext.define('SA.model.QuoteSummary',{
    extend : 'Ext.data.Model',
    config : {
        fields : [
            { name : 'name'},
            { name : 'status'},
            { name : 'custEmail'},
            { name : 'createdDate'}
        ]
    }
})