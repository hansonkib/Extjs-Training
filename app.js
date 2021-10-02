/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'TrainingApp.Application',

    name: 'TrainingApp',

    requires: [
        // This will automatically load all classes in the TrainingApp namespace
        // so that application classes do not need to require each other.
        'TrainingApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'TrainingApp.view.main.Main'
});
