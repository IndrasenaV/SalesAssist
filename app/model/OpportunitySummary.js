/**
 * Created by ivv179 on 8/21/14.
 */
Ext.define('SA.model.OpportunitySummary',{
    extend : 'Ext.data.Model',
    config : {
        fields : [
            { name : 'name'},
            { name : 'status'},
            { name : 'customerEmail'},
            { name : 'createdDate'},
            { name : 'createdBy'}
        ]
    }
})