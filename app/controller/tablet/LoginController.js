/**
 * Created by ivv179 on 8/5/14.
 */
Ext.define('SA.controller.tablet.LoginController',{
    extend : 'SA.controller.LoginController',
    config : {
        refs : {
            loginView : 'tablet_login'
        },
        control : {
            'tablet_login button[action=login]' : {
                tap : 'loginTablet'
            }
        }
    },
    loginTablet : function(){
        var rec = this.getLoginView().getValues();
        this.login(rec.username,rec.password);
    },
    loginSuccess : function(){
        alert('Success');
    }
});