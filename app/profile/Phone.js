Ext.define('SA.profile.Phone',{
    extend : 'Ext.app.Profile',
    requires : [
        'SA.view.phone.Home',
        'SA.controller.phone.NavController',
        'SA.controller.phone.LoginController'
    ],
    config : {
        views : ['Home'],
        controllers : ['NavController','LoginController']
    },

    launch : function(){
        Ext.create('SA.view.phone.Home')
    },

    isActive: function() {
       // Comment for now return Ext.os.is('Phone');
        return false; // Change to true for phone development
    }
})