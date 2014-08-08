/**
 * Created by ivv179 on 8/7/14.
 */
Ext.define('FS.view.dashboard.QuoteList', {
    extend: 'Ext.dataview.List',
    xtype: 'allQuotes',
    config: {
        fullscreen: true,
        itemTpl: '<div style="font-weight: bold;font-size: 16px;text-align: left;color: dodgerblue"> Quote Name: {quoteName}'+
            ' </div><div  style="font-size: 14px;text-align: left;color: lightblue"> Customer Email: {customerEmail}</div> '+
            '<div  style="font-size: 14px;text-align: left;color: lightblue">Quote Status: {quoteStatus}</div>'
    },
    initialize: function () {
        this.callParent(arguments);
        this.add({
            docked: 'top',
            xtype: 'titlebar',
            title: this.getToolbarTitle(),
            items: [
                {align: 'left', text: 'Settings'},
                {align: 'right', text: 'LogOff', handler: function () {
                    // Logoff on server side
                    this.up('main').showLoginForm();
                }}
            ]
        });
        var store =  {
            fields: ['quoteName', 'customerEmail','quoteStatus','quoteNo','quoteKey'],
            data: [ ]
        };
        this.setStore(store);
        this.on('painted', this.loadData, this);
        this.on('itemtap', this.showQuoteDetails, this);
    },
    getToolbarTitle: function () {
        // Override in subclasses
        return 'All Quotes';
    },
    loadData: function () {

        // Implement in subclasses
    },
    showQuoteDetails: function (that, index, target, record, e, eOpts) {
        this.up('main').showQuote(record.get('quoteKey'));
    }
});