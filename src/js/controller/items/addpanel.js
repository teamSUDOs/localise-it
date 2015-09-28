app.Controller('items-addpanel', {
    approveKey: function() {
        var translations = app.allTranslations;
        var key          = this.view.obj('keyInput');
        var translation  = this.view.obj('translationInput');

        if(key.val() === '') {
            key.val('').addClass('error');
            key.attr('placeholder', 'Pleas add a key.');
        } else if(translation.val() === '') {
            translation.val('').addClass('error');
            translation.attr('placeholder', 'Pleas add a key.');
        } else if(translations[key.val()] !== undefined) {
            key.val('').addClass('error');
            key.attr('placeholder', 'Key already exists.');
        } else {
            this.__addKey();
        }
    },

    __addKey: function(data, evt, target) {
        var key   = this.view.obj('keyInput');
        var value = this.view.obj('translationInput');
        var self  = this;

        app.apiAdapter.putLocale(key.val(), 'en_gb', value.val(), function(res, msg) {
            console.log('__addKey', res, msg);
            text = "Translation successfully added!";
            self.trigger('showNotification', {text: text, type: 'success', time: 5});
            self.trigger('updateView');
            self.view.closeAddPanel();
        }, function(res, msg) {
            console.error('__addKey', res, msg);
            text = "Translation could not be set: "+msg;
            self.trigger('showNotification', {text: text, type: 'error', time: 5});
        });
    },
});