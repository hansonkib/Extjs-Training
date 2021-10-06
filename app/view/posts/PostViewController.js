Ext.define('TrainingApp.view.posts.PostViewController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.postviewcontroller',
    init: function(){
        var postView = this.getView();
        var stores = postView.getStore();
        stores.load();
    },
    onAddNewPost: function(){
        var me = this;
        me.showForm();
    },
    onDeletePost: function(){
        console.log('Delete post button clicked');
    },
    onDetailsClick: function(){
        var me = this,
        grid = me.getView();
    var records = grid.getSelectionModel().getSelection();
    if(records[0]){
        me.showForm(records[0]);
    }
    },
    showForm: function(record){
        var window = Ext.create({
            xtype: 'postform'
        });
        if(record){
            var form = window.lookupReference('add-post').getForm();
            form.loadRecord(record)
        }
    },
    onRefresh : function(){
        var me = this,
        grid = me.getView(),
        stores = grid.getStore();
        stores.reload();
    }
});