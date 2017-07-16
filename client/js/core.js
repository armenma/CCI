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
app.filter('i18n', [function () {

  return function (word) {

    return i18n.Translate(word);
  };

}]);

