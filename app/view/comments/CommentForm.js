Ext.define('TrainingApp.view.comments.CommentForm',{
extend: 'Ext.window.Window',
xtype: 'commentform',
controller: 'commentformcontroller',
shadow: true,
width:500,
modal:true,
autoShow:true,
title:'Comments form',
items: [
    { 
        xtype: 'form',
        jsonSubmit: true,
        reference: 'add-comment',
        defaults: {
            anchor: '100%'
        },
        items: [
            { 
                xtype: 'numberfield',
                name:'postId',
                fieldLabel: 'post id'
            },
            { 
                xtype: 'numberfield',
                name:'id',
                fieldLabel: 'Comment id',
                readOnly:true
            },
            {
                xtype: 'textfield',
                name:'name',
                fieldLabel: 'your Name'
            },
            {
                xtype: 'textfield',
                name:'email',
                fieldLabel: 'email address'
            },
            {
                xtype: 'textarea',
                name:'body',
                fieldLabel: 'comment body'
            },
            {
                xtype: 'datefield',
                fieldLabel: 'Updated on',
                name: 'dateUpdated',
                formatter: 'date("m/d/Y")',
            }
        ],
        buttons: [
            {
                xtype: 'button',
                text: 'Save',
                handler: 'onSave'
            },
            {
                xtype: 'button',
                text: 'Reset',
                handler: 'onReset'
            }
        ]
    }
]
});