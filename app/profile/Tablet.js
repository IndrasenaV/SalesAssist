Ext.define('SA.profile.Tablet',{
    extend : 'Ext.app.Profile',
    config : {
        views : ['Home'],
        controllers : ['NavController','LoginController']
    },

    launch : function(){
        Ext.create('SA.view.tablet.Home')
    },
    isActive: function() {
        return Ext.os.is('Tablet');
    }
})