Ext.define('SA.profile.Phone',{
    extend : 'Ext.app.Profile',
    config : {
        views : ['Home'],
        controllers : ['Navigation']
    },

    launch : function(){
        Ext.create('SA.view.phone.Home')
    }
})