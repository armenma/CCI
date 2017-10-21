var urlParams = parseUrl(location.toString().substr(location.toString().indexOf('?')));

document.getElementById("paidValue").innerHTML = urlParams.paid;

function parseUrl(url)
{
  var params = {}, p;

  url = decodeURI(url).replace('?', '');

  p = url.split('&');

  for (var i = 0; i < p.length; i++) {

    var s = p[i].split('=');

    params[s[0]] = s[1];
  }

  return params;
}
