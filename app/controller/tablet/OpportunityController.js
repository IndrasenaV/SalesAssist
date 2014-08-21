/**
 * Created by ivv179 on 8/21/14.
 */
Ext.define('SA.controller.tablet.OpportunityController',{
    extend : 'SA.controller.BaseNavController',
    config : {
        refs : {
            mainView : 'tablet_opportunity_main',
            homeView : 'tablet_opportunity_home',
            editView : 'tablet_opportunity_edit'
        },
        control : {
            'tablet_opportunity_home button[action=new]' : {
                tap : 'createNewOpportunity'
            }
        }
    },
    createNewOpportunity : function(){
        var rec = this.getMainView().setActiveItem(this.getEditView());
        this.getEditView().newOpportunity();
    }
});