chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if(msg.text === 'GetZadankaData' && msg.data.CisloZadanky) {
        getZadankaData(msg.data.CisloZadanky, function(result) {
            sendResponse(result);
        });
    }
    return true;
});

function getRegistrLoginCookies(callback) {
    const registrUrl = getRegistrUrl();
    chrome.cookies.get({
        url: registrUrl, 
        name: getRegistrLoginCookieName()
    },
    function(cookie) {
        if(!cookie) {
            callback(new URLSearchParams());
        } else {
            var cookieParams = new URLSearchParams(cookie.value);
            callback(cookieParams);
        }
    });
}

function getRegistrCUDOvereniCisloZadankyUrlParams(kodOsoby, heslo, cisloZadanky) {
    var urlParams = new URLSearchParams();

    urlParams.set("PracovnikKodOsoby", kodOsoby);
    urlParams.set("heslo", heslo);
    urlParams.set("Cislo", cisloZadanky);

    return urlParams;
}

function getZadankaData(cisloZadanky, callback) {

    getRegistrLoginCookies(function(cookieParams) {

        var kodOsoby = cookieParams.get("kodOsoby");
        var heslo = cookieParams.get("heslo");

        if(!kodOsoby || !heslo) {
          return;
        }

        getRegistrCUDOvereniCisloZadankyUrl(function(url) {

            var urlParams = getRegistrCUDOvereniCisloZadankyUrlParams(kodOsoby, heslo, cisloZadanky);

            fetch(url + "?" + urlParams.toString(), {
                method: 'get',
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(function (response) {
                if(response.status == 200) {
                    response.json().then(function(json) {
                        callback(json);
                    });
                } else {
                    return;
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        });
    });
}

function getRegistrLoginCookieName() {
    return "MyUniqueKey";
}

function getRegistrLoginCookies(callback) {
    getRegistrUrl(function(registrUrl) {

        chrome.cookies.get({
            url: registrUrl, 
            name: getRegistrLoginCookieName()
        }, function(cookie) {
            if(!cookie) {
                callback(new URLSearchParams());
            } else {
                var cookieParams = new URLSearchParams(cookie.value);
                callback(cookieParams);
            }
        });
    });
}

function getRegistrDomain(callback) {
    callback("eregpublicsecure.ksrzis.cz");
}

function getRegistrUrl(callback) {
    getRegistrDomain(function(registrDomain) {
        callback("https://" + registrDomain);
    });
}

function getRegistrCUDOvereniCisloZadankyUrl(callback) {
    getRegistrUrl(function(registrUrl) {
        callback(registrUrl + "/Registr/CUD/Overeni/Json");
    });
}