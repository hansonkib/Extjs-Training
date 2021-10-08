Ext.define('TrainingApp.view.students.StudentForm',{
    extend: 'Ext.window.Window',
    xtype: 'studentform',
    width:520,
    controller: 'studentformcontroller',
    shadow: true,
    modal: true,
    title: 'Students Form',
    autoShow:true, // to autoshow the modal once it is created
    items: [
        {
            xtype: 'form',
            reference: 'add-form',
            jsonSubmit:true,
            defaults: {
                anchor: '100%'
            },
            items: [
                {
                    xtype: 'numberfield',
                    name:'id',
                    fieldLabel: 'Student Id',
                    minValue:0,
                    readOnly:true
                },
                {
                    xtype: 'textfield',
                    name:'name',
                    fieldLabel: 'Student name'

                },
                {
                    xtype: 'textfield',
                    name:'regNo',
                    fieldLabel: 'Registration number'
                },
                {
                    xtype: 'textfield',
                    name:'county',
                    fieldLabel: 'County'
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'Updated on',
                    name: 'priceLastChange',
                    format: 'd, m, Y',
                },
                {
                    xtype: 'htmleditor',
                    name:'about',
                    enableColors: false,
                    enableAlignments: false,
                    renderTo: Ext.getBody()
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
                    text: 'refresh',
                    handler: 'onRefresh'
                }
            ]
        }
    ]
})