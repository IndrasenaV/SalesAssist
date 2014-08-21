/**
 * Created by ivv179 on 8/11/14.
 */
Ext.define('SA.controller.tablet.MenuController',{
    extend : 'Ext.app.Controller',

   requires : ['SA.model.CustomerSummary','SA.model.ProductSummary','SA.model.QuoteSummary',
       'SA.store.RecentlyViewedCustomers','SA.store.RecentlyViewedQuotes','SA.store.RecentlyViewedProducts','SA.store.RecentlyViewedOpportunities'
       ],
    config : {
        models : ['QuoteSummary','CustomerSummary','ProductSummary','OpportunitySummary'],
        stores : ['RecentlyViewedQuotes','RecentlyViewedProducts','RecentlyViewedCustomers','RecentlyViewedOpportunities'],
        refs : {
            menuView : 'tablet_menu'
        },
        control : {
        }
    }
})