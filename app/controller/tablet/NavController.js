Ext.define('SA.controller.tablet.NavController',{
    extend : 'SA.controller.BaseNavController',
    config : {
        refs : {
            homeView : 'tablet_home'
        },
        control : {
            'tablet_login' : {
                loginSuccess : 'afterLoginSuccess'
            }
        }
    },
    afterLoginSuccess : function(){
        this.getHomeView().setActiveItem(1);
    }
})