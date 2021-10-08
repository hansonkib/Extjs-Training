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
                    minValue: 1,
                    readOnly:true
                },
                {
                    xtype: 'textarea',
                    name:'title',
                    fieldLabel: 'post title',
                },
                // {
                //     xtype: 'textarea',
                //     name:'body',
                //     fieldLabel: 'post body'
                // },
                {
                    xtype: 'htmleditor',
                    name:'body',
                    fieldLabel: 'post body',
                    enableColors: true,
                    enableAlignments: false,
                    renderTo: Ext.getBody()
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'Updated on',
                    name: 'dateUpdated',
                    // format: 'd-m-Y',
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