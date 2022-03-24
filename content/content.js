var headerFieldsetDivElement = document.querySelector("fieldset div");

const POCET_CHYBI_CISLO_PACIENTA = "Hlavicka_Chybejici_Cislo_Pacienta"
const POCET_CHYBI_CERTIFIKAT_NA_PROFILU = "Hlavicka_Chybejici_Certifikat_Na_Profilu";
const POCET_SPATNE_DATUM_NAROZENI = "Hlavicka_Spatne_Datum_Narozeni";
const POCET_SPATNA_STATNI_PRISLUSNOST = "Hlavicka_Spatna_Statni_Prislusnost";
const CONSOLE = "Console";
const POCET_NEBYLO_MOZNE_OVERIT_CERTIFIKAT_NA_PROFILU = "Hlavicka_Nebylo_Mozne_Overit_Certifikat_Na_Profilu";
const POCET_POZITIVNICH = "Hlavicka_Pocet_Pozitivnich";
const POCET_CHYBI_CISLO_ZADANKY = "Hlavicka_Chybejici_Cislo_Zadanky";

const IsLaboratorDavkyDetailUrl = window.location.href.includes("/LaboratorDavky/Detail");

function getPocetChybiCisloZadankyText() {
    var fieldGraphicElement = document.createElement("div");
    fieldGraphicElement.setAttribute("class", "fieldGraphic col-1");

    var labelElement = document.createElement("label");
    labelElement.setAttribute("class", "popisekPole");
    labelElement.setAttribute("for", POCET_CHYBI_CISLO_ZADANKY);
    labelElement.innerText = "PocetChybiCisloZadanky";

    fieldGraphicElement.appendChild(labelElement);

    var divElement = document.createElement("div");
    divElement.setAttribute("class", "textField");
    divElement.setAttribute("id", POCET_CHYBI_CISLO_ZADANKY);
    divElement.innerText = "neznámo";

    fieldGraphicElement.appendChild(divElement);

    var divClearElement = document.createElement("div");
    divClearElement.setAttribute("class", "clear");

    fieldGraphicElement.appendChild(divClearElement);

    return fieldGraphicElement;
}

function getPocetSpatnaStatniPrislusnostText() {
    var fieldGraphicElement = document.createElement("div");
    fieldGraphicElement.setAttribute("class", "fieldGraphic col-1");

    var labelElement = document.createElement("label");
    labelElement.setAttribute("class", "popisekPole");
    labelElement.setAttribute("for", POCET_SPATNA_STATNI_PRISLUSNOST);
    labelElement.innerText = "PocetSpatnaStatniPrislusnostPacienta";

    fieldGraphicElement.appendChild(labelElement);

    var divElement = document.createElement("div");
    divElement.setAttribute("class", "textField");
    divElement.setAttribute("id", POCET_SPATNA_STATNI_PRISLUSNOST);
    divElement.innerText = "neznámo";

    fieldGraphicElement.appendChild(divElement);

    var divClearElement = document.createElement("div");
    divClearElement.setAttribute("class", "clear");

    fieldGraphicElement.appendChild(divClearElement);

    return fieldGraphicElement;
}

function getPocetPozitivnichText() {
    var fieldGraphicElement = document.createElement("div");
    fieldGraphicElement.setAttribute("class", "fieldGraphic col-1");

    var labelElement = document.createElement("label");
    labelElement.setAttribute("class", "popisekPole");
    labelElement.setAttribute("for", POCET_POZITIVNICH);
    labelElement.innerText = "PocetPozitivnich";

    fieldGraphicElement.appendChild(labelElement);

    var divElement = document.createElement("div");
    divElement.setAttribute("class", "textField");
    divElement.setAttribute("id", POCET_POZITIVNICH);
    divElement.innerText = "neznámo";

    fieldGraphicElement.appendChild(divElement);

    var divClearElement = document.createElement("div");
    divClearElement.setAttribute("class", "clear");

    fieldGraphicElement.appendChild(divClearElement);

    return fieldGraphicElement;
}

function getPocetNebyloMozneOveritCertifikatNaProfiluText() {
    var fieldGraphicElement = document.createElement("div");
    fieldGraphicElement.setAttribute("class", "fieldGraphic col-1");

    var labelElement = document.createElement("label");
    labelElement.setAttribute("class", "popisekPole");
    labelElement.setAttribute("for", POCET_NEBYLO_MOZNE_OVERIT_CERTIFIKAT_NA_PROFILU);
    labelElement.innerText = "PocetNebyloMozneOveritCertifikatNaProfilu";

    fieldGraphicElement.appendChild(labelElement);

    var divElement = document.createElement("div");
    divElement.setAttribute("class", "textField");
    divElement.setAttribute("id", POCET_NEBYLO_MOZNE_OVERIT_CERTIFIKAT_NA_PROFILU);
    divElement.innerText = "neznámo";

    fieldGraphicElement.appendChild(divElement);

    var divClearElement = document.createElement("div");
    divClearElement.setAttribute("class", "clear");

    fieldGraphicElement.appendChild(divClearElement);

    return fieldGraphicElement;
}

function getPocetChybiCertifikatNaProfiluText() {
    var fieldGraphicElement = document.createElement("div");
    fieldGraphicElement.setAttribute("class", "fieldGraphic col-1");

    var labelElement = document.createElement("label");
    labelElement.setAttribute("class", "popisekPole");
    labelElement.setAttribute("for", POCET_CHYBI_CERTIFIKAT_NA_PROFILU);
    labelElement.innerText = "PocetChybiCertifikatNaProfilu";

    fieldGraphicElement.appendChild(labelElement);

    var divElement = document.createElement("div");
    divElement.setAttribute("class", "textField");
    divElement.setAttribute("id", POCET_CHYBI_CERTIFIKAT_NA_PROFILU);
    divElement.innerText = "neznámo";

    fieldGraphicElement.appendChild(divElement);

    var divClearElement = document.createElement("div");
    divClearElement.setAttribute("class", "clear");

    fieldGraphicElement.appendChild(divClearElement);

    return fieldGraphicElement;
}

function getPocetChybiCisloPacientaText() {
    var fieldGraphicElement = document.createElement("div");
    fieldGraphicElement.setAttribute("class", "fieldGraphic col-1");

    var labelElement = document.createElement("label");
    labelElement.setAttribute("class", "popisekPole");
    labelElement.setAttribute("for", POCET_CHYBI_CISLO_PACIENTA);
    labelElement.innerText = "PocetChybiCisloPacienta";

    fieldGraphicElement.appendChild(labelElement);

    var divElement = document.createElement("div");
    divElement.setAttribute("class", "textField");
    divElement.setAttribute("id", POCET_CHYBI_CISLO_PACIENTA);
    divElement.innerText = "neznámo";

    fieldGraphicElement.appendChild(divElement);

    var divClearElement = document.createElement("div");
    divClearElement.setAttribute("class", "clear");

    fieldGraphicElement.appendChild(divClearElement);

    return fieldGraphicElement;
}

function getPocetSpatneDatumNarozeniText() {
    var fieldGraphicElement = document.createElement("div");
    fieldGraphicElement.setAttribute("class", "fieldGraphic col-1");

    var labelElement = document.createElement("label");
    labelElement.setAttribute("class", "popisekPole");
    labelElement.setAttribute("for", POCET_SPATNE_DATUM_NAROZENI);
    labelElement.innerText = "PocetSpatneDatumNarozeniPacienta";

    fieldGraphicElement.appendChild(labelElement);

    var divElement = document.createElement("div");
    divElement.setAttribute("class", "textField");
    divElement.setAttribute("id", POCET_SPATNE_DATUM_NAROZENI);
    divElement.innerText = "neznámo";

    fieldGraphicElement.appendChild(divElement);

    var divClearElement = document.createElement("div");
    divClearElement.setAttribute("class", "clear");

    fieldGraphicElement.appendChild(divClearElement);

    return fieldGraphicElement;
}

function getConsole() {
    var fieldGraphicElement = document.createElement("div");
    fieldGraphicElement.setAttribute("class", "fieldGraphic col-6");

    var textareaElement = document.createElement("textarea");
    textareaElement.setAttribute("class", "textField");
    textareaElement.setAttribute("id", CONSOLE);

    fieldGraphicElement.appendChild(textareaElement);

    return fieldGraphicElement;
}

function getInfoFromHtmlLaboratorDetail(html) {
    var parser = new DOMParser();
    var responseDocument = parser.parseFromString(html,"text/html");

    var results = {};

    var results = {
        CisloPacienta: undefined,
        DatumNarozeni: undefined,
        RodneCislo: undefined,
        CisloPojistence: undefined,
        ICP: undefined,
        Datum1Odberu: undefined,
        Vysledek: undefined,
        Stat: undefined
    };

    var labels = responseDocument.getElementsByTagName('label');
    for (var i = 0; i < labels.length; i++) {
        switch(labels[i].htmlFor) {
            case 'LabPripad_LabUdaje_Aifo':
                results.CisloPacienta = labels[i].nextElementSibling.innerText.trim();
                break;
            case 'LabUdaje_DatumNarozeni':
                results.DatumNarozeni = labels[i].nextElementSibling.innerHTML.trim();
                break;
            case 'LabPripad_CisloZadanky':
                results.CisloZadanky = labels[i].nextElementSibling.innerHTML.trim();
                break;
            case 'LabPripad_ICP_zadatel':
                results.ICP = labels[i].nextElementSibling.innerHTML.trim();
                break;
            case 'LabZelena_DATUM1ODBERU':
                results.Datum1Odberu = labels[i].nextElementSibling.innerHTML.trim();
                break;
            case 'LabZelena_VYSLEDEKINTERID':
                results.Vysledek = labels[i].nextElementSibling.innerHTML.trim();
                break;
            case 'LabUdaje_Stat':
                results.Stat = labels[i].nextElementSibling.innerHTML.trim();
                break;
            case 'LabUdaje_RodneCislo':
                results.RodneCislo = labels[i].nextElementSibling.innerHTML.trim();
                break;
        }
    }

    var editLinkElement = responseDocument.querySelector("[href*='Registr/ISIN/Laborator/Upravit']");
    results.EditLink = editLinkElement.href;

    return results;
}

function getHtmlLaboratorDetail(url, callback) {

    fetch(url, {
        method: 'get'
    })
    .then(function(response) {
        if (response.status == 200) {
            response.text().then(function(text) {
                callback(text);
            });
        } else {
            return;
        }
    })
    .catch(function (error) {
        console.log(error);
    });
}

function getRegistrISINLaboratorUpravitUrlParams(DatumNarozeni, Stat, RequestVerificationTokenElement) {
    var urlParams = new URLSearchParams();
    if(DatumNarozeni) {
        urlParams.set("LabUdaje.DatumNarozeni", DatumNarozeni);
    }
    if(Stat) {
        urlParams.set("LabUdaje.Stat", Stat);
    }
    urlParams.set("__RequestVerificationToken", RequestVerificationTokenElement);
    return urlParams;
}

function addToConsole(text) {
    var ConsoleElement = document.getElementById(CONSOLE);
    ConsoleElement.value += text + '\r\n';
}

function getEregRegistrDomain() {
    return "ereg.ksrzis.cz";
}

function getEregRegistrUrl() {
    return "https://" + getEregRegistrDomain();
}

function getRegistrCUDVyhledaniPacientaUrl() {
    return getEregRegistrUrl() + "/Registr/CUDZadanky/VyhledaniPacienta";
}

function getRegistrCUDVyhledaniPacientaUrlParams(zadanka) {
    var urlParams = new URLSearchParams();
    urlParams.set("DuvodVyhledani", "VyhledatPacienta");
    urlParams.set("TypVyhledani", zadanka.StatniPrislusnost == "CZ" ? "JmenoPrijmeniRC" : zadanka.TypVyhledani ? zadanka.TypVyhledani : "CizinecJmenoPrijmeniDatumNarozniObcanstvi");
    if(zadanka.TypVyhledani != "CizinecCisloPojistence") {
        urlParams.set("Jmeno", zadanka.Jmeno);
        urlParams.set("Prijmeni", zadanka.Prijmeni);
    }
    if(zadanka.CisloPojistence && zadanka.TypVyhledani && zadanka.TypVyhledani == "CizinecCisloPojistence") {
        urlParams.set("CisloPojistence", zadanka.CisloPojistence);
    }
    if(zadanka.StatniPrislusnost == "CZ") {
      urlParams.set("RodneCislo", zadanka.CisloPojistence);
    } else {
        if(zadanka.TypVyhledani != "CizinecCisloPojistence") {
            urlParams.set("DatumNarozeni", zadanka.DatumNarozeni);

            urlParams.set("ZemeKod", zadanka.StatniPrislusnost);
        }
    }
    urlParams.set("_submit", "None");
    return urlParams;
}

function existsCertElement(zadanka, datumTestu, callback) {

    var url = getRegistrCUDVyhledaniPacientaUrl();
    var urlParams = getRegistrCUDVyhledaniPacientaUrlParams(zadanka);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status == 200) {
  
            var parser = new DOMParser();
            var responseDocument = parser.parseFromString(xhr.responseText, "text/html");

            var results = {};

            var results = {
                Cislo: undefined
            };
            
            var labels = responseDocument.getElementsByTagName('label');
            for (var i = 0; i < labels.length; i++) {
            switch(labels[i].htmlFor) {
                case 'Pacient_CisloPacienta':
                    results.Cislo = labels[i].nextElementSibling.innerText.trim();
                    break;
                }
            }

            var certElement = responseDocument.evaluate("//td[contains(., '" + datumTestu + "')]", responseDocument, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

            callback(results.Cislo != undefined ? (certElement.snapshotLength ? true : false) : null);
        }
    }
    xhr.send(urlParams.toString());
}


function tryFindProfileWithSpecificCertElement(ZadankaData, datumTestu, callback) {

    var searchVariantJmenoPrijmeniDatumNarozeni = {
        Jmeno: ZadankaData.TestovanyJmeno,
        Prijmeni: ZadankaData.TestovanyPrijmeni,
        CisloPojistence: ZadankaData.TestovanyCisloPojistence,
        StatniPrislusnost: ZadankaData.TestovanyNarodnostKod,
        TypVyhledani: "JmenoPrijmeniRC"
    };

    var searchVariantJmenoPrijmeniDatumNarozeniMistoNarozeni = {
        Jmeno: ZadankaData.TestovanyJmeno,
        Prijmeni: ZadankaData.TestovanyPrijmeni,
        DatumNarozeni: ZadankaData.TestovanyDatumNarozeniText,
        StatniPrislusnost: ZadankaData.TestovanyNarodnostKod,
        CisloPojistence: ZadankaData.TestovanyCisloPojistence,
        TypVyhledani: "JmenoPrijmeniDatumNarozeniMistoNarozeni"
    };

    var searchVariantCizinecJmenoPrijmeniDatumNarozniObcanstvi = {
        Jmeno: ZadankaData.TestovanyJmeno,
        Prijmeni: ZadankaData.TestovanyPrijmeni,
        DatumNarozeni: ZadankaData.TestovanyDatumNarozeniText,
        StatniPrislusnost: ZadankaData.TestovanyNarodnostKod,
        TypVyhledani: "CizinecJmenoPrijmeniDatumNarozniObcanstvi"
    };

    var searchVariantCizinecCisloPojistence = {
        Jmeno: ZadankaData.TestovanyJmeno,
        Prijmeni: ZadankaData.TestovanyPrijmeni,
        DatumNarozeni: ZadankaData.TestovanyDatumNarozeniText,
        StatniPrislusnost: ZadankaData.TestovanyNarodnostKod,
        CisloPojistence: ZadankaData.TestovanyCisloPojistence,
        TypVyhledani: "CizinecCisloPojistence"
    };

    existsCertElement(searchVariantJmenoPrijmeniDatumNarozeni, datumTestu, function(result1) {
        if(result1) {
            callback(true);
        } else {
            existsCertElement(searchVariantCizinecJmenoPrijmeniDatumNarozniObcanstvi, datumTestu, function(result2) {
                if(result2) {
                    callback(true);
                } else {
                    existsCertElement(searchVariantJmenoPrijmeniDatumNarozeniMistoNarozeni, datumTestu, function(result3) {
                        if(result3) {
                            callback(true);
                        } else {
                            existsCertElement(searchVariantCizinecCisloPojistence, datumTestu, function(result4) {
                                callback(result4);
                            });
                        }
                    });
                }
            });
        }
    });
}

function getPocetChybiCisloPacientaButton() {

    var fieldGraphicElement = document.createElement("div");
    fieldGraphicElement.setAttribute("class", "fieldGraphic col-1");

    var labelElement = document.createElement("label");
    labelElement.setAttribute("class", "popisekPole");
    labelElement.innerText = "Akce";

    fieldGraphicElement.appendChild(labelElement);

    var aElement = document.createElement("a");
    aElement.setAttribute("class", "button-action ui-button ui-corner-all ui-widget");
    aElement.setAttribute("role", "button");
    aElement.innerText = "Načti a oprav";
    aElement.addEventListener('click', function() {

        var vysetreniDetailsIndex = 0;

        var vysetreniDetailsAElements = document.querySelectorAll("[href*='Registr/ISIN/Laborator/Detail']");

        var PocetSpatneDatumNarozeniPacientaTextElement = document.getElementById(POCET_SPATNE_DATUM_NAROZENI);
        PocetSpatneDatumNarozeniPacientaTextElement.innerText = 0;
        var PocetSpatnaStatniPrislusnostTextElement = document.getElementById(POCET_SPATNA_STATNI_PRISLUSNOST);
        PocetSpatnaStatniPrislusnostTextElement.innerText = 0;
        var PocetChybiCisloPacientaTextElement = document.getElementById(POCET_CHYBI_CISLO_PACIENTA);
        PocetChybiCisloPacientaTextElement.innerText = 0;
        var PocetChybiCertifikatNaProfiluTextElement = document.getElementById(POCET_CHYBI_CERTIFIKAT_NA_PROFILU);
        PocetChybiCertifikatNaProfiluTextElement.innerText = 0;
        var PocetNebyloMozneOveritCertifikatNaProfiluTextElement = document.getElementById(POCET_NEBYLO_MOZNE_OVERIT_CERTIFIKAT_NA_PROFILU);
        PocetNebyloMozneOveritCertifikatNaProfiluTextElement.innerText = 0;
        var PocetPozitivnichTextElement = document.getElementById(POCET_POZITIVNICH);
        PocetPozitivnichTextElement.innerText = 0;
        var PocetChybiCisloZadankyTextElement = document.getElementById(POCET_CHYBI_CISLO_ZADANKY);
        PocetChybiCisloZadankyTextElement.innerText = 0;

        aElement.innerText = "Probíhá načítání vyšetřeních a opravy. Pro úspěšné dokončení nezavírejte tuto stránku. Počet zkontrolovaných vyšetření: " + vysetreniDetailsIndex + "/" + vysetreniDetailsAElements.length + ".";
        alert("Bude probíhat načítání všech vyšetření a také automatické opravy.");

        vysetreniDetailsAElements.forEach(function (element) {

            const LabPripadId = element.href.split("=")[1];

            // only testing purpose
            /*const element = {
                href: "/Registr/ISIN/Laborator/Detail/?id=26736356"
            }
            const LabPripadId = "26736356";*/

            getHtmlLaboratorDetail(element.href, function(html) {
                var results = getInfoFromHtmlLaboratorDetail(html);

                chrome.runtime.sendMessage({
                    "text": "GetZadankaData",
                    "data": {
                        "CisloZadanky": results.CisloZadanky,
                        "CisloPojistence": results.RodneCislo
                    }
                }, function (zadankaData) {
                    if(!zadankaData) {
                        alert("Je potřeba být přihlášený do registru Žadanky Covid-19.");
                    } else {

                        if(
                            results.Datum1Odberu &&
                            zadankaData.TestovanyJmeno,
                            zadankaData.TestovanyPrijmeni,
                            zadankaData.TestovanyDatumNarozeniText,
                            zadankaData.TestovanyNarodnostKod
                        ) {
        
                            // pozitivní recovery certifikáty jsou až 10-tý den (v době psaní kódu)
                            if(results.Vysledek.trim() != "Pozitivní") {
        
                                tryFindProfileWithSpecificCertElement(zadankaData, results.Datum1Odberu, function(isCertOnProfile) {
                                    if(isCertOnProfile == false) {
                                        PocetChybiCertifikatNaProfiluTextElement.innerText = parseInt(PocetChybiCertifikatNaProfiluTextElement.innerText) + 1;
                                        addToConsole("Chybí certifikát na profilu: LabPripadId: " + LabPripadId + "," + element.href + ", ICP: " + results.ICP);
                                    } else if(isCertOnProfile == null) {
                                        PocetNebyloMozneOveritCertifikatNaProfiluTextElement.innerText = parseInt(PocetNebyloMozneOveritCertifikatNaProfiluTextElement.innerText) + 1;
                                        addToConsole("Nebylo možné ověřit certifikát na profilu: LabPripadId: " + LabPripadId + "," + element.href + ", ICP: " + results.ICP);
                                    }

                                    // end condition here, because is slowest request (last finished)
                                    vysetreniDetailsIndex++;
                                    aElement.innerText = "Probíhá načítání vyšetřeních a opravy. Pro úspěšné dokončení nezavírejte tuto stránku. Počet zkontrolovaných vyšetření: " + vysetreniDetailsIndex + "/" + vysetreniDetailsAElements.length + ".";

                                    if(vysetreniDetailsIndex == vysetreniDetailsAElements.length) {
                                        aElement.innerText = "Znovu načti a oprav";
                                        alert("Načítání dokončeno.");
                                    }
                                });
                            } else {
                                PocetPozitivnichTextElement.innerText = parseInt(PocetPozitivnichTextElement.innerText) + 1;

                                // end condition here, because is slowest request (last finished)
                                vysetreniDetailsIndex++;
                                aElement.innerText = "Probíhá načítání vyšetřeních a opravy. Pro úspěšné dokončení nezavírejte tuto stránku. Počet zkontrolovaných vyšetření: " + vysetreniDetailsIndex + "/" + vysetreniDetailsAElements.length + ".";

                                if(vysetreniDetailsIndex == vysetreniDetailsAElements.length) {
                                    aElement.innerText = "Znovu načti a oprav";
                                    alert("Načítání dokončeno.");
                                }
                            }
                        } else {
                            PocetChybiCertifikatNaProfiluTextElement.innerText = parseInt(PocetChybiCertifikatNaProfiluTextElement.innerText) + 1;
                            addToConsole("Chybí certifikát na profilu: LabPripadId: " + LabPripadId + "," + element.href + ", ICP: " + results.ICP);

                            // end condition here, because is slowest request (last finished)
                            vysetreniDetailsIndex++;
                            aElement.innerText = "Probíhá načítání vyšetřeních a opravy. Pro úspěšné dokončení nezavírejte tuto stránku. Počet zkontrolovaných vyšetření: " + vysetreniDetailsIndex + "/" + vysetreniDetailsAElements.length + ".";

                            if(vysetreniDetailsIndex == vysetreniDetailsAElements.length) {
                                aElement.innerText = "Znovu načti a oprav";
                                alert("Načítání dokončeno.");
                            }
                        }

                        if(!(parseInt(results.CisloZadanky) > 0)) {
                            PocetChybiCisloZadankyTextElement.innerText = parseInt(PocetChybiCisloZadankyTextElement.innerText) + 1;
                            addToConsole("Chybí číslo žádanky: LabPripadId: " + LabPripadId + "," + element.href + ", ICP: " + results.ICP);
                        }

                        if(results.Stat.split("-")[0].trim() != zadankaData.TestovanyNarodnostKod) {

                            PocetSpatnaStatniPrislusnostTextElement.innerText = parseInt(PocetSpatnaStatniPrislusnostTextElement.innerText) + 1;

                            editVysetreni(results.EditLink, null, zadankaData.TestovanyNarodnostKod, function(result) {
                                if(result) {
                                    addToConsole("Špatná státní příslušnost: LabPripadId: " + LabPripadId + "," + element.href + ", Vysetreni: " + results.Stat.split("-")[0].trim() + ", Zadanka: " + zadankaData.TestovanyNarodnostKod + ", ICP: " + results.ICP + ", Oprava: úspěšná.");
                                } else {
                                    addToConsole("Špatná státní příslušnost: LabPripadId: " + LabPripadId + "," + element.href + ", Vysetreni: " + results.Stat.split("-")[0].trim() + ", Zadanka: " + zadankaData.TestovanyNarodnostKod + ", ICP: " + results.ICP + ", Oprava: neúspěšná.");
                                }
                            });
                        }

                        if(results.DatumNarozeni.replaceAll(" ", "") != zadankaData.TestovanyDatumNarozeniText) {

                            PocetSpatneDatumNarozeniPacientaTextElement.innerText = parseInt(PocetSpatneDatumNarozeniPacientaTextElement.innerText) + 1;

                            editVysetreni(results.EditLink, zadankaData.TestovanyDatumNarozeniText, null, function(result) {
                                if(result) {
                                    addToConsole("Špatné datum narození: LabPripadId: " + LabPripadId + "," + element.href + ", Vysetreni: " + results.DatumNarozeni.replaceAll(" ", "") + ", Zadanka: " + zadankaData.TestovanyDatumNarozeniText.replaceAll(" ", "") + ", ICP: " + results.ICP + ", Oprava: úspěšná.");
                                } else {
                                    addToConsole("Špatné datum narození: LabPripadId: " + LabPripadId + "," + element.href + ", Vysetreni: " + results.DatumNarozeni.replaceAll(" ", "") + ", Zadanka: " + zadankaData.TestovanyDatumNarozeniText.replaceAll(" ", "") + ", ICP: " + results.ICP + ", Oprava: neúspěšná.");
                                }
                            });
                        }
                    }
                });

                if(!results.CisloPacienta) {
                    PocetChybiCisloPacientaTextElement.innerText = parseInt(PocetChybiCisloPacientaTextElement.innerText) + 1;
                    addToConsole("Chybí číslo pacienta: LabPripadId: " + LabPripadId + "," + element.href + ", ICP: " + results.ICP);
                }
            });
        });
    });

    fieldGraphicElement.appendChild(aElement);

    return fieldGraphicElement;
}

function editVysetreni(url, DatumNarozeni, Stat, callback) {
    fetch(url, {
        method: 'get'
    })
    .then(function(response) {
        if (response.status == 200) {
            response.text().then(function(text) {
                var parser = new DOMParser();
                var responseDocument = parser.parseFromString(text, "text/html");
                var requestVerificationTokenElement = responseDocument.querySelector("[name*='RequestVerificationToken']");

                if(!requestVerificationTokenElement) {
                    callback(false);
                }
                var urlParams = getRegistrISINLaboratorUpravitUrlParams(
                    DatumNarozeni,
                    Stat,
                    requestVerificationTokenElement.value
                );
                fetch(url + "?" + urlParams.toString(), {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: urlParams.toString()
                })
                .then(function (response) {
                    if(response.status == 200) {
                        callback(true);
                    } else {
                        callback(false);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
            });
        } else {
            return;
        }
    })
    .catch(function (error) {
        console.log(error);
    });
}

function isFoundCertificateOnProfile(ZadankaData, CisloPacienta, KoloOprav) {

    return new Promise(function (resolve, reject) {
        tryToFindProfile(ZadankaData, function(Profiles) {
            if(Profiles.length == 1 && Profiles[0].Cislo == CisloPacienta) {
                tryToEditForeignProfile(index, ZadankaData, Profiles[0], KoloOprav, function() {
                    resolve(false);
                });
            } else if (Profiles.length > 0) {
                tryToSloucitForeignProfilesToAnotherOne(index, ZadankaData, CisloPacienta, Profiles, KoloOprav).then(
                    function(AlesponJedenSloucenUspesne) {
                        if(AlesponJedenSloucenUspesne) {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    }
                );
            } 
            // Varianty kdy to sem může skočit: 
            //     1) Pacient je poprvé na testu a ještě nebyl založený profil
            //     2) Bylo nalezeno více pacientů a UI vyhledání žádá o upřesnění zadaných údajů
            else {
                resolve(false);
            }
        });
    });
}

if(headerFieldsetDivElement && IsLaboratorDavkyDetailUrl) {

    var fieldGraphicPocetChybiCisloPacientaTextElement = getPocetChybiCisloPacientaText();
    headerFieldsetDivElement.appendChild(fieldGraphicPocetChybiCisloPacientaTextElement);
    var fieldGraphicPocetChybiCisloZadankyElement = getPocetChybiCisloZadankyText();
    headerFieldsetDivElement.appendChild(fieldGraphicPocetChybiCisloZadankyElement);
    var fieldGraphicPocetSpatneDatumNarozeniTextElement = getPocetSpatneDatumNarozeniText();
    headerFieldsetDivElement.appendChild(fieldGraphicPocetSpatneDatumNarozeniTextElement);
    var fieldGraphicPocetSpatnaStatniPrislusnostTextElement = getPocetSpatnaStatniPrislusnostText();
    headerFieldsetDivElement.appendChild(fieldGraphicPocetSpatnaStatniPrislusnostTextElement);
    var fieldGraphicPocetChybiCertifikatNaProfiluTextElement = getPocetChybiCertifikatNaProfiluText();
    headerFieldsetDivElement.appendChild(fieldGraphicPocetChybiCertifikatNaProfiluTextElement);
    var fieldGraphicNebyloMozneOveritCertifikatNaProfiluTextElement = getPocetNebyloMozneOveritCertifikatNaProfiluText();
    headerFieldsetDivElement.appendChild(fieldGraphicNebyloMozneOveritCertifikatNaProfiluTextElement);
    var fieldGraphicPocetPozitivnichElement = getPocetPozitivnichText();
    headerFieldsetDivElement.appendChild(fieldGraphicPocetPozitivnichElement);
    var fieldGraphicPocetChybiCisloPacientaButtonElement = getPocetChybiCisloPacientaButton();
    headerFieldsetDivElement.appendChild(fieldGraphicPocetChybiCisloPacientaButtonElement);
    var fieldGraphicConsoleElement = getConsole();
    headerFieldsetDivElement.appendChild(fieldGraphicConsoleElement);
}