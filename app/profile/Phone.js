Ext.define('SA.profile.Phone',{
    extend : 'Ext.app.Profile',
    config : {
        views : ['Home'],
        controllers : ['NavController','Login']
    },

    launch : function(){
        Ext.create('SA.view.phone.Home')
    },

    isActive: function() {
        return Ext.os.is('Phone');
    }
})