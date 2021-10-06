Ext.define('TrainingApp.view.students.StudentsViewController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.studentviewcontroller',
    init: function(){
        var studentView = this.getView();
        var stores = studentView.getStore();
        stores.load();
    },
    onAddClick: function(){
        var me = this;
        me.showForm();
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
            xtype: 'studentform'
        });
        if(record){
            var form = window.lookupReference('add-form').getForm();
            form.loadRecord(record)
        }
    }
    ,
    onRemoveClick: function(){
        //delete button
        var me = this,
            grid = me.getView();
        var records = grid.getSelectionModel().getSelection();
        if(records[0]){
            var record = records[0];
            Ext.Ajax.request({
                url: `http://localhost:3000/students/${record.get('id')}`,
                method: 'DELETE',
                success: function(response, eOpts) {
                    console.log(response);
                    console.log(eOpts);
                },
                failure: function(response, eOpts) {
                    console.log(response);
                    console.log(eOpts);
                }
            });
            Ext.getStore('students').reload();
        }
    },
    onRefreshClick: function(){
        var me = this,
        grid = me.getView(),
        store = grid.getStore();
     store.reload();
    }
});