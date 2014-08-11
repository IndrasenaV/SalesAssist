/**
 * Created by ivv179 on 8/11/14.
 */
Ext.define('SA.controller.tablet.MenuController',{
    extend : 'Ext.app.Controller',

   requires : ['SA.model.CustomerSummary','SA.model.ProductSummary','SA.model.QuoteSummary',
       'SA.store.RecentlyViewedCustomers','SA.store.RecentlyViewedQuotes','SA.store.RecentlyViewedProducts',
       ],
    config : {
        models : ['QuoteSummary','CustomerSummary','ProductSummary'],
        stores : ['RecentlyViewedQuotes','RecentlyViewedProducts','RecentlyViewedCustomers'],
        refs : {
            menuView : 'tablet_menu'
        },
        control : {
        }
    }
})