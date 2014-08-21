/**
 * Created by indra on 8/7/14.
 */
Ext.define('SA.controller.tablet.LeftNavController', {
    extend: 'SA.controller.tablet.NavController',
    config: {
        refs: {
            menu: 'tablet_menu',
            recentlyViewedItems: 'tablet_recentlyviewed'
        },
        control: {
            'tablet_menu segmentedbutton': {
                toggle: 'menuItemChange'
            }
        }
    },
    menuItemChange: function (sb, button, isPressed, eOpts) {
        var me = this;
        if (isPressed) {
            switch (button.action) {
                case 'home' :
                    me.showDashboardScreen();
                    break;
                case  'product' :
                    me.showProductCatalog();
                    me.getRecentlyViewedItems().setActiveItem(me.getRecentlyViewedItems().down('tablet_recentlyViewedProduct'));
                    break;
                case 'opportunity' :
                    me.showOppotunityScreen();
                    me.getRecentlyViewedItems().setActiveItem(me.getRecentlyViewedItems().down('tablet_recentlyViewedOpportunity'));
                    break;
                case 'quote' :
                    me.showQuoteScreen();
                    me.getRecentlyViewedItems().setActiveItem(me.getRecentlyViewedItems().down('tablet_recentlyViewedQuotes'));
                    break;
                case 'settings' :
                    me.showSettingScreen();
                    break;
            }
        }
    }
});