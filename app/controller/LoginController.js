/**
 * Created by indra on 8/7/14.
 */
Ext.define('SA.controller.LoginController',{
    extend : 'Ext.app.Controller',
    login : function(username,password){
        var me = this;
        Ext.Ajax.request({
            url : AJAX_URL+'login.json',
            params : {
                username : username,
                password : password
            },
            success : function(response){
                var result = Ext.decode(response.responseText);
                if( result.status){
                    me.loginSuccess();
                }else{
                    if( result.errorMsg ){
                       Ext.Msg.alert('Login Failed', result.errorMsg);
                    }else{
                       Ext.Msg.alert('Login Failed','Server error');
                    }
                }

            }
        });
    }
});