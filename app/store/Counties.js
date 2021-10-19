Ext.define('TrainingApp.store.Counties', {
    extend: 'Ext.data.Store',
    alias: 'store.counties',
    storeId: 'counties',
    model: 'TrainingApp.model.County',
    data: {
        rows: [
            [1, "Mombasa", "Mombasa"],
            [2, "Kwale", "Kwale"],
            [3, "Kilifi", "Kilifi"]
        ]
    },
    proxy: {
        type: 'memory',
        // url: '/user',
        reader: {
            type: 'json',
            rootProperty: 'rows',
        }
    }

});