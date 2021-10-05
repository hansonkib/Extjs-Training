Ext.define('TrainingApp.view.posts.PostViewController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.postviewcontroller',
    init: function(){
        var postView = this.getView();
        var stores = postView.getStore();
        stores.load();
    },
    onAddNewPost: function(){
        Ext.create({
            xtype: 'postform'
        });
    },
    onDeletePost: function(){
        console.log('Delete post button clicked');
    },
    onDetailsClick: function(){
        console.log('Details button clicked');
    },
    onRefresh : function(){
        var me = this,
        grid = me.getView(),
        stores = grid.getStore();
        stores.reload();
    }
});