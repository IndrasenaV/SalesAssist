Ext.define('SA.controller.tablet.NavController',{
    extend : 'SA.controller.BaseNavController',
    config : {
        refs : {
            homeView : 'tablet_home',
            centerView :  'tablet_work'
        },
        control : {
            'tablet_login' : {
                loginSuccess : 'afterLoginSuccess'
            }
        }
    },
    afterLoginSuccess : function(){
        this.getHomeView().setActiveItem(1);
    },
    showProductCatalog : function(args){
        var view = this.getCenterView();
        view.setActiveItem(view.down('tablet_product_main'));
    },
    showQuoteScreen : function(args){
        var view = this.getCenterView();
        view.setActiveItem(view.down('tablet_quote_main'));
    },
    showOppotunityScreen : function(args){
        var view = this.getCenterView();
        view.setActiveItem(view.down('tablet_opportunity_main'));
    },
    showSettingScreen : function(args){
        var view = this.getCenterView();
        view.setActiveItem(view.down('tablet_settings_main'));
    },
    showDashboardScreen : function(args){
        var view = this.getCenterView();
        view.setActiveItem(view.down('tablet_dashboard_main'));
    }
})