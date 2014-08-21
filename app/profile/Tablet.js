Ext.define('SA.profile.Tablet',{
    extend : 'Ext.app.Profile',
    requires : [
        'SA.view.tablet.Home',
        'SA.controller.tablet.NavController',
        'SA.controller.tablet.LoginController',
        'SA.controller.tablet.MenuController',
        'SA.controller.tablet.LeftNavController',
        'SA.controller.tablet.OpportunityController'
    ],
    config : {
        views : ['Home'],
        controllers : ['NavController','LoginController','MenuController','LeftNavController','OpportunityController']
    },

    requires : [
    ],

    launch : function(){
        Ext.create('SA.view.tablet.Home')
    },
    isActive: function() {
       // return Ext.os.is('Tablet');
        return true; // Always get this profile for tablet development
    }
})