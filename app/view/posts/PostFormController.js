Ext.define('TrainingApp.view.posts.PostFormController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.postformcontroller',
    onReset: function(){
        var me = this,
        window = me.getView(),
        form = window.lookupReference('add-post');
        form.reset();

    },
    onSave: function name() {
        var me = this,
        window = me.getView(),
        form = window.lookupReference('add-post');
        if (form.isValid()) {
            form.submit({
                url:'http://localhost:3000/posts',
                success: function(form, action) {
                    Ext.Msg.alert('Success', action.result.msg);
                },
                failure: function(form, action) {
                    if (action.response.status === 201) {
                        Ext.Msg.alert('Success', "Saved successfully");
                    } else {
                        switch (action.failureType) {
                            case Ext.form.action.Action.CLIENT_INVALID:
                                Ext.Msg.alert(
                                    'Failure',
                                    'Form fields may not be submitted with invalid values'
                                );
                                break;
                            case Ext.form.action.Action.CONNECT_FAILURE:
                                Ext.Msg.alert('Failure', 'Ajax communication failed');
                                break;
                            case Ext.form.action.Action.SERVER_INVALID:
                                Ext.Msg.alert('Failure', action.result.msg);
                        }
                    }
    
                }
            });
        } else {
            alert('Not valid')
        }
    }
})