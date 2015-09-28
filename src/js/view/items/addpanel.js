app.view('items-addpanel', {
    events: [
        {
            action: 'approveKey',
            type: 'click',
            selector: '#approve-add-key-button'
        }, 
        {
            action: 'approveLoclae',
            type: 'click',
            selector: '#approve-add-locale-button'
        }, 
        {
            action: 'closeAddPanel',
            type: 'click',
            selector: '#add-panel-cancel-button'
        }, 

        {
            type: 'openAddPanel',
            action:'openAddPanel'
        }
    ],

    keyInput: '#add-key-input',
    translationInput: '#add-translation-input',
    localeInput: '#add-locale-input',
    addKeyPanel: '#add-key-panel',
    addLocalePanel: '#add-locale-panel',

    openAddPanel: function(obj) {
        this.type = obj.type;
        this.obj('addKeyPanel').addClass('hidden');
        this.obj('addLocalePanel').addClass('hidden');

        if(obj.type == 'key') {
            this.obj('root').addClass('open');
            this.obj('addKeyPanel').removeClass('hidden');
        } else if(obj.type == 'locale') {
            this.obj('root').addClass('open');
            this.obj('addLocalePanel').removeClass('hidden');
        }
    },

    closeAddPanel: function(obj) {
        this.obj('root').removeClass('open');
        this.obj('addKeyPanel').addClass('hidden');
        this.obj('addLocalePanel').addClass('hidden');
        this.obj('keyInput').val('');
        this.obj('translationInput').val('');
        this.obj('localeInput').val('');
    }

});