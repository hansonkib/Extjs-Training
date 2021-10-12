Ext.define('TrainingApp.view.formsLayout.HBoxForm',{
    extend: 'Ext.form.Panel',
    xtype: 'form-hboxlayout',
    title: 'HBox Form Panel',
    bodyPadding: '5 5 0',
    width: 600,
    fieldDefaults: {
        labelAlign: 'top',
        msgTarget: 'side'
    },
    defaults: {
        border: false,
        xtype: 'panel',
        flex: 1,
        layout: 'anchor'
    },
    layout: 'hbox',
    items: [
        {
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'First Name',
                    anchor: '-5',
                    name: 'first'
                },
                {
                    xtype:'textfield',
                    fieldLabel: 'Company',
                    anchor: '-5',
                    name: 'company'
                }
            ]
        },
        {
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Last Name',
                    anchor: '100%',
                    name: 'last'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Email',
                    anchor: '100%',
                    name: 'email',
                    vtype: 'email'
                }
            ]
        }
    ],
    buttons: [
        '->',
        {
            text:'save'
        },
        {
            text: 'cancel'
        }
    ]
});