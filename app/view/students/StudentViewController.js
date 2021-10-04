Ext.define('TrainingApp.view.students.StudentsViewController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.studentviewcontroller',
    init: function(){
        var studentView = this.getView();
        var stores = studentView.getStore();
        stores.load();
    },
    onAddClick: function(){
        Ext.create({
            xtype: 'studentform'
        });
    },
    onDetailsClick: function(){
        console.log('details button clicked')
    },
    onRemoveClick: function(){
        console.log('delete button clicked')
    },
    onRefreshClick: function(){
        var me = this,
        grid = me.getView(),
        store = grid.getStore();
     store.reload();
    }
});