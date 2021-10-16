Ext.define('TrainingApp.view.user.UserForm', {
    extend: 'Ext.window.Window',
    xtype: 'userform',
    controller: 'userformcontroller',
    // height: 300,
    // width: 900,
    layout: {
        type: 'fit'
    },
    bind: {
        title: '{title}'
    },
    closable: true,
    modal: true,
    autoShow: true,

    items: [{
        xtype: 'form',
        reference: 'add-form',
        bodyPadding: 5,
        jsonSubmit: true,
        defaults: {
            anchor: '100%'
        },
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        //content of the form
        items: [
            {
                xtype: 'fieldset',
                title: 'User Information',
                flex: 1,
                layout: 'anchor',
                defaults: {
                    anchor: '100%',
                    xtype: 'textfield',
                    msgTarget: 'side',
                    labelWidth: 75
                },
                items: [
                    {
                        xtype: 'numberfield',
                        name: 'id',
                        fieldLabel: 'User ID',
                        minValue: 0,
                        readOnly: true,
                    },
                    {
                        xtype: 'textfield',
                        name: 'name',
                        fieldLabel: 'Name'
                    },
                    {
                        xtype: 'textfield',
                        name: 'company.companyName',
                        fieldLabel: 'Company Name'
                    },
                    {
                        xtype: 'textfield',
                        name: 'address.suite',
                        fieldLabel: 'Suite'
                    },
                    {
                        xtype: 'textfield',
                        name: 'address.geo.lat',
                        fieldLabel: 'Lat'
                    },
                ]
            },
            //second fieldset
            {
                xtype: 'fieldset',
                title: 'Photo',
                width: 170,
                items: [
                    {
                        xtype: 'image',
                        height: 150,
                        width: 150,
                    }
                ]
            }
        ],
        buttons: [{
                xtype: 'button',
                text: 'Reset',
                handler: 'onReset'
            },
            {
                xtype: 'button',
                text: 'Save',
                handler: 'onSave'
        //
            }
        ]
    }]
});