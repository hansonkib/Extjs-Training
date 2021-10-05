Ext.define('TrainingApp.view.posts.PostForm',{
    extend: 'Ext.window.Window',
    xtype: 'postform',
    width: 500,
    controller: 'postformcontroller',
    shadow:true,
    modal: true,
    title: 'Posts form',
    autoShow: true,
    items: [
        {
            xtype: 'form',
            reference: 'add-post',
            jsonSubmit: true,
            defaults:{
                anchor:'100%'
            },
            items: [
                {
                    xtype: 'numberfield',
                    name:'userId',
                    fieldLabel: 'User Id',
                    minValue: 1
                },
                {
                    xtype: 'numberfield',
                    name:'id',
                    fieldLabel: 'post id',
                    minValue: 1
                },
                {
                    xtype: 'textfield',
                    name:'title',
                    fieldLabel: 'post title',
                },
                {
                    xtype: 'textfield',
                    name:'body',
                    fieldLabel: 'post body'
                }
            ],
            buttons:[
                {
                    xtype: 'button',
                    text:'save',
                    handler: 'onSave'
                },
                {
                    xtype: 'button',
                    text: 'reset',
                    handler: 'onReset'
                }
            ]
        }
    ]
})