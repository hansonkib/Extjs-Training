Ext.define('TrainingApp.view.user.UserViewController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.userviewcontroller',
    // onAddClick: function(){
    //     TrainingApp.util.Util.log("Button clicked")
    // },
    init: function(){
        var userView = this.getView();
        var stores = userView.getStore();
        stores.load();
    },
    onAddnewUser: function(){
        var me = this;
            me.showForm();
    },
    showForm: function(record){
        var window = Ext.create({
            xtype: 'userform'
        });
        if(record){
            var form = window.lookupReference('add-form').getForm();
            form.loadRecord(record)
        }
    },
    onLayoutClick: function(){
        Ext.create({
            xtype: 'borderlayout'
        });
    }
});