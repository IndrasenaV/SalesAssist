/**
 * Created by indra on 8/7/14.
 */
Ext.define('SA.controller.tablet.LeftNavController',{
    extend : 'SA.controller.tablet.NavController',
    config : {
        refs : {
            menu : 'tablet_menu'
        },
        control : {
            'tablet_menu segmentedbutton' : {
                toggle : 'menuItemChange'
            }
        }
    },
    menuItemChange : function(sb,button,isPressed,eOpts){
        var me = this;
        if( isPressed ){
            switch( button.action){
               case 'home' : me.showDashboardScreen(); break;
               case  'product' : me.showProductCatalog();break;
                case 'opportunity' : me.showOppotunityScreen();break;
                case 'quote' : me.showQuoteScreen(); break;
                case 'settings' : me.showSettingScreen();break;
            }
        }
    }
});