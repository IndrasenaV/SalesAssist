/**
 * Created by ivv179 on 8/5/14.
 */
Ext.define('SA.controller.phone.LoginController',{
    extend : 'SA.controller.LoginController',
    config : {
        refs : {
            loginView : 'phone_login'
        },
        control : {
            'phone_login button[action=login]' : {
                tap : 'loginPhone'
            }
        }
    },
    loginPhone : function(){
        var rec = this.getLoginView().getValues();
        this.login(rec.username,rec.password);
    },
    loginSuccess : function(){
        alert('Success');
    }
});