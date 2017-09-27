/**
 * Created by armen on 7/16/2017.
 */
var i18n = {

  Translations: {},

  Add: function (words) {

    for (var key in words) {

      this.Translations[key] = words[key];
    }
  },

  Translate: function (word) {

    return this.Translations[word] || word;
  }
};
var language = localStorage.getItem('language');

if (!language)language = 'EN';

app.filter('i18n', [function () {

  return function (word) {

    return i18n.Translate(word);
  };

}]);
app.factory('coreFactory', function () {

  var f = {

    Language: language,

    Run: function () {

      $.ajax({
        "url": 'js/i18n/' + language + '.json',
        async: false,
        success: function (systemJson) {

          i18n.Add(systemJson);
        }
      });
    },

    SetLanguage: function (lang) {

      localStorage.setItem('language', lang);
    }

  };

  return f;
});

