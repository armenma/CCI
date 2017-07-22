"use strict";

(function () {

  "use strict";

  var elementOnloadDirective = function () {

    return {

      restrict: "A",

      scope: {

        callback: "&ngOnload"

      },

      link: function (scope, element, attrs) {


        element.one("load", function (_) {

          var contentLocation = element.length > 0 && element[0].contentWindow ? element[0].contentWindow.location : undefined;



          scope.callback({

            contentLocation: contentLocation

          });

        });

      }

    };

  };

  elementOnloadDirective.$inject = [];

  elementOnloadDirective.directiveName = "ngOnload";



  angular.module("ngOnload", []).directive(elementOnloadDirective.directiveName, elementOnloadDirective);

})();
