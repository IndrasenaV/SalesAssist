/**
 * Created by ivv179 on 8/21/14.
 */
Ext.define('SA.view.tablet.settings.Main', {
    extend: 'Ext.Container',
    xtype: 'tablet_settings_main',
    config: {
        items: [
            {
                xtype: 'fieldset',
                title: 'My Delegate',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Delegate User Id'
                    } ,
                    {
                        xtype: 'datepickerfield',
                        label: 'From'
                    } ,
                    {
                        xtype: 'datepickerfield',
                        label: 'To'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'My Store',
                items: [{
                    html : 'Store Id : 123232132'
                },
                    {
                       html : '1234 Fictional Street Unit 1234 <br/> Fictional City <br/> USA '
                    }
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [ {
                         xtype: 'spacer'
                    },
                    {
                        xtype : 'button',
                        text : 'Log Out',
                        action : 'logout',
                        ui : 'decline-round'
                    }
                ]
            }

        ]
    }
});