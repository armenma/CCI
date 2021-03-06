
'use strict';

var initialTotal = 1825140045.62;

var http = require('https');

var db;

module.exports = function(app) {



  db = app.dataSources.mongodb;

 /* var CryptoCurrenciesModel = app.models.CryptoCurrencies;

  var CryptoCurrenciesIndexModel = app.models.CryptoCurrencyIndexes;*/

  db.autoupdate(app.models, function(err) {

    console.log('TEST');

    process.on('uncaughtException', function (error) {
      console.log(new Date() + 'ERROR STACK: ' + error.stack);
    });

    if (err) console.log('ERROR Automigrate not complete');

    console.log('Automigrate complete');
    console.log(new Date() + 'START DATE');

    /*setInterval(function () {

      try {
        http.get("https://api.coinmarketcap.com/v1/ticker/", function (response) {

          var buffer = "",
            data;

          response.on("data", function (chunk)
          {
            buffer += chunk;
          });

          response.on("end", function (err)
          {
            if (err) console.log(new Date() + 'ERROR Request not complete');

            data = JSON.parse(buffer);
            var savedData = data.splice(0, 50);

            for(var i = 0; i < savedData.length; i++)
            {
              delete data[i].id;
            }
             CryptoCurrenciesModel.destroyAll({}, function (err, result) {

               if (err) console.log(new Date() + 'ERROR CryptoCurrenciesModel not destroyed');

               CryptoCurrenciesModel.create(savedData, function (err, result)
               {
                 if (err) console.log(new Date() + 'ERROR CryptoCurrenciesModel created' + err);

               });
             });


            CalculateAndSaveIndex(CryptoCurrenciesIndexModel, savedData);
          });

        }).on('error', function (err) {
          if (err) console.log(new Date() + 'ERROR Request on error');
        }).end();
      }
      catch (err)
      {
        console.error(new Date() + 'ERROR Connect APi');
      }



    }, 900000);*/

  });
};

function CalculateAndSaveIndex(model, data)
{

  if(Array.isArray(data))
  {
    var total = 0;

    for (var i = 0; i < 50; i++)
    {
      if(data[i].market_cap_usd > 0)
        total += Number(data[i].market_cap_usd);
    }

    total = total / 50;

    var index = {
      value: total * 10 / initialTotal,
      date : new Date().toISOString()
    }

    model.create(index,
    function(err, result)
    {
      if (err) throw err;
      else console.log("INDEX MODEL CREATED SUCCESSFULLY " + JSON.stringify(index));

    });

   /* var t = model.getDataSource().connector.collection("CryptoCurrencyIndexes");

    db.CryptoCurrencyIndexes.aggregate({minutes: { $minute: "$date" }}, function (err, res) {
      console.log("res: " + res);
    });*/
  }

}
