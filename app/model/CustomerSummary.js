/**
 * Created by ivv179 on 8/11/14.
 */
Ext.define('SA.model.CustomerSummary',{
    extend : 'Ext.data.Model',
    config : {
        fields : [
            { name : 'id'},
            { name : 'name'},
            { name : 'email'},
            { name : 'phoneNo'}
        ]
    }
})