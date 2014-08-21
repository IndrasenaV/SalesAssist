/**
 * Created by ivv179 on 8/21/14.
 */
Ext.define('SA.view.tablet.opportunity.Edit', {
    extend: 'Ext.Panel',
    xtype: 'tablet_opportunity_edit',
    config : {
        layout : {
            type : 'vbox',
            align : 'stretch'
        },
        items : [{
            xtype: 'toolbar',
            docked: 'top',
            items: [
                {
                    xtype: 'button',
                    text: 'Save',
                    action : 'save'
                },
                {
                    xtype: 'button',
                    text: 'Edit',
                    action : 'edit'
                }
            ]
        },{
            xtype : 'container',
            layout : 'hbox',
            defaults : {flex : 1},
            items : [
                {
                    xtype : 'fieldset',
                    defaults : {
                        xtype : 'textfield'
                    },
                    items : [
                        {
                            label: 'Opportunity Name',
                            name: 'opportunityName'
                        },
                        {
                            label: 'Opportunity Value',
                            name: 'opportunityValue',
                            xtype : 'numberfield'
                        },
                        {
                            label: 'Opportunity Value',
                            name: 'opportunityValue',
                            xtype : 'numberfield'
                        },
                        {
                            label: 'Success %',
                            name: 'successpercent',
                            xtype : 'numberfield'
                        },
                        {
                            label: 'Anticipation Date',
                            name: 'anticipationDate',
                            xtype : 'datepickerfield'
                        }
                    ]
                },
                {
                    xtype : 'fieldset',
                    defaults : {
                        xtype : 'textfield'
                    },
                    items : [
                        {
                            label: 'Opportunity Id',
                            name: 'opportunityId'
                        },
                        {
                            label: 'Owner Id',
                            name: 'ownerId'
                        },
                        {
                            label: 'Status',
                            name: 'status'
                        },
                        {
                            label: 'Lead Origin',
                            name: 'successpercent'
                        },
                        {
                            label: 'Created Date',
                            name: 'createdDate'
                        }
                    ]
                }
            ]
        },{
            xtype : 'container',
            layout : {
                type : 'hbox',
                align : 'stretch'
            },
            defaults : {
                flex : 1
            },
            items : [
                { xtype : 'fieldset'},
                { xtype : 'fieldset'}
            ]
        },{
            xtype : 'container',
            html : 'All Quotes'
        }
        ]
    },
    newOpportunity : function(){

    },
    loadOpportunity : function(){

    },
    editOpportunity : function(){

    }
});