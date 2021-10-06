Ext.define('TrainingApp.view.comments.CommentsViewController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.commentsviewcontroller',
    init: function(){
        var commentsView = this.getView();
        var stores = commentsView.getStore();
        stores.load();

    },
    onAddnew: function(){
        var me = this;
        me.showForm();
    },
    onViewDetails: function(){
        var me = this,
        grid = me.getView();
    var records = grid.getSelectionModel().getSelection();
    if(records[0]){
        me.showForm(records[0]);
    }
    },
    showForm: function(record){
        var window = Ext.create({
            xtype: 'commentform',
        });
        if(record){
            var form = window.lookupReference('add-comment').getForm();
            form.loadRecord(record)
        }
    },
    onDeleteComment: function(){
        console.log('delete clicked')
    },
    onRefresh: function(){
        var me = this,
        grid = me.getView(),
        stores = grid.getStore();
        stores.reload();
    }
});