var headerFieldsetDivElement = document.querySelector("fieldset div");

const POCET_CHYBI_CISLO_PACIENTA = "Hlavicka_Chybejici_Cislo_Pacienta"
const POCET_CHYBI_CERTIFIKAT_NA_PROFILU = "Hlavicka_Chybejici_Certifikat_Na_Profilu";
const POCET_SPATNE_DATUM_NAROZENI = "Hlavicka_Spatne_Datum_Narozeni";
const POCET_SPATNA_STATNI_PRISLUSNOST = "Hlavicka_Spatna_Statni_Prislusnost";
const CONSOLE = "Console";
const POCET_NEBYLO_MOZNE_OVERIT_CERTIFIKAT_NA_PROFILU = "Hlavicka_Nebylo_Mozne_Overit_Certifikat_Na_Profilu";
const POCET_POZITIVNICH = "Hlavicka_Pocet_Pozitivnich";
const POCET_CHYBI_CISLO_ZADANKY = "Hlavicka_Chybejici_Cislo_Zadanky";
const POCET_CHYBI_PRISTUPOVE_UDAJE = "HLavicka_Chybejici_Pristupove_Udaje_Cizinec";

const IsLaboratorDavkyDetailUrl = window.location.href.includes("/LaboratorDavky/Detail");

function getPocetChybiPristupoveUdajeText() {
    var fieldGraphicElement = document.createElement("div");
    fieldGraphicElement.setAttribute("class", "fieldGraphic col-1");

    var labelElement = document.createElement("label");
    labelElement.setAttribute("class", "popisekPole");
    labelElement.setAttribute("for", POCET_CHYBI_PRISTUPOVE_UDAJE);
    labelElement.innerText = "PocetChybiPristupoveUdajeCizinec";

    fieldGraphicElement.appendChild(labelElement);

    var divElement = document.createElement("div");
    divElement.setAttribute("class", "textField");
    divElement.setAttribute("id", POCET_CHYBI_PRISTUPOVE_UDAJE);
    divElement.innerText = "neznámo";

    fieldGraphicElement.appendChild(divElement);

    var divClearElement = document.createElement("div");
    divClearElement.setAttribute("class", "clear");

    fieldGraphicElement.appendChild(divClearElement);

    return fieldGraphicElement;
}

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

    var results = {
        CisloPacienta: undefined,
        DatumNarozeni: undefined,
        RodneCislo: undefined,
        ICP: undefined,
        Datum1Odberu: undefined,
        Vysledek: undefined,
        Stat: undefined,
        Metoda: undefined
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
            case 'LabZelena_MetodaUpresneniId':
                results.Metoda = labels[i].nextElementSibling.innerHTML.trim();
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

function getRegistrISINLaboratorUpravitUrlParams(DatumNarozeni, Stat, CisloZadanky, RequestVerificationTokenElement) {
    var urlParams = new URLSearchParams();
    if(DatumNarozeni) {
        urlParams.set("LabUdaje.DatumNarozeni", DatumNarozeni);
    }
    if(Stat) {
        urlParams.set("LabUdaje.Stat", Stat);
    }
    if(CisloZadanky) {
        urlParams.set("LabPripad.CisloZadanky", CisloZadanky);
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

            var results = {
                Cislo: undefined,
                Telefon: undefined,
                Email: undefined,
                KontrolovanyTest: undefined
            };
            
            var labels = responseDocument.getElementsByTagName('label');
            for (var i = 0; i < labels.length; i++) {
                switch(labels[i].htmlFor) {
                    case 'Pacient_CisloPacienta':
                        results.Cislo = labels[i].nextElementSibling.innerText.trim();
                        break;
                    case 'Pacient_Telefon':
                        results.Telefon = labels[i].nextElementSibling.innerText.trim();
                        break;
                    case 'Pacient_Email':
                        results.Email = labels[i].nextElementSibling.innerText.trim();
                        break;
                }
            }

            var certElement = responseDocument.evaluate("//td[contains(., '" + datumTestu + "')]", responseDocument, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
            if(results.Cislo != undefined) { 
                results.KontrolovanyTest = certElement.snapshotLength ? true : false;
            }

            callback(results);
        }
    }
    xhr.send(urlParams.toString());
}


function tryFindProfileWithSpecificCertElement(ZadankaData, datumTestu, callback) {

    var searchVariantJmenoPrijmeniRC = {
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

    existsCertElement(searchVariantJmenoPrijmeniRC, datumTestu, function(results1) {
        if(results1.Cislo) {
            callback(results1);
        } else {
            existsCertElement(searchVariantCizinecJmenoPrijmeniDatumNarozniObcanstvi, datumTestu, function(results2) {
                if(results2.Cislo) {
                    callback(results2);
                } else {
                    existsCertElement(searchVariantJmenoPrijmeniDatumNarozeniMistoNarozeni, datumTestu, function(results3) {
                        if(results3.Cislo) {
                            callback(results3);
                        } else {
                            existsCertElement(searchVariantCizinecCisloPojistence, datumTestu, function(results4) {
                                callback(results4);
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
        var PocetChybiPristupoveUdajeTextElement = document.getElementById(POCET_CHYBI_PRISTUPOVE_UDAJE);
        PocetChybiPristupoveUdajeTextElement.innerText = 0;

        aElement.innerText = "Probíhá načítání vyšetřeních a opravy. Pro úspěšné dokončení nezavírejte tuto stránku. Počet zkontrolovaných vyšetření: " + vysetreniDetailsIndex + "/" + vysetreniDetailsAElements.length + ".";
        alert("Bude probíhat načítání všech vyšetření a také automatické opravy.");

        vysetreniDetailsAElements.forEach(function (element) {

            const LabPripadId = element.href.split("=")[1];

            // only testing purpose
            /*const element = {
                href: "/Registr/ISIN/Laborator/Detail/?id=26790876"
            }
            const LabPripadId = "26790876";*/

            getHtmlLaboratorDetail(element.href, function(html) {
                var laboratorDetailResults = getInfoFromHtmlLaboratorDetail(html);

                chrome.runtime.sendMessage({
                    "text": "GetZadankaData",
                    "data": {
                        "CisloZadanky": laboratorDetailResults.CisloZadanky,
                        "CisloPojistence": laboratorDetailResults.RodneCislo
                    }
                }, function (zadankaData) {
                    if(!zadankaData) {
                        alert("Je potřeba být přihlášený do registru Žadanky Covid-19.");
                    } else {

                        if(
                            laboratorDetailResults.Datum1Odberu &&
                            zadankaData.TestovanyJmeno,
                            zadankaData.TestovanyPrijmeni,
                            zadankaData.TestovanyDatumNarozeniText,
                            zadankaData.TestovanyNarodnostKod
                        ) {

                            // pozitivní recovery certifikáty jsou až 10-tý den (v době psaní kódu)
                            if(laboratorDetailResults.Vysledek.trim() != "Pozitivní") {

                                tryFindProfileWithSpecificCertElement(zadankaData, laboratorDetailResults.Datum1Odberu, function(resultsProfile) {

                                    if(resultsProfile.Cislo) {
                                        if(resultsProfile.KontrolovanyTest == false) {
                                            PocetChybiCertifikatNaProfiluTextElement.innerText = parseInt(PocetChybiCertifikatNaProfiluTextElement.innerText) + 1;
                                            addToConsole("Chybí certifikát na profilu: LabPripadId: " + LabPripadId + ", " + element.href + ", ICP: " + laboratorDetailResults.ICP);
                                        } else if(resultsProfile.KontrolovanyTest == null) {
                                            PocetNebyloMozneOveritCertifikatNaProfiluTextElement.innerText = parseInt(PocetNebyloMozneOveritCertifikatNaProfiluTextElement.innerText) + 1;
                                            addToConsole("Nebylo možné ověřit certifikát na profilu: LabPripadId: " + LabPripadId + ", " + element.href + ", ICP: " + laboratorDetailResults.ICP);
                                        }

                                        if(laboratorDetailResults.Stat.trim() != "CZ - Česko" && (!resultsProfile.Telefon || !resultsProfile.Email)) {
                                            PocetNebyloMozneOveritCertifikatNaProfiluTextElement.innerText = parseInt(PocetNebyloMozneOveritCertifikatNaProfiluTextElement.innerText) + 1;
                                            addToConsole("Chybí přístupové údaje na profilu: LabPripadId: " + LabPripadId + ", " + element.href + ", Profil e-mail: " + resultsProfile.Email + ", Profil telefon: " + resultsProfile.Telefon + ", ICP: " + laboratorDetailResults.ICP + ".");
                                        }
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
                            addToConsole("Chybí certifikát na profilu: LabPripadId: " + LabPripadId + ", " + element.href + ", ICP: " + laboratorDetailResults.ICP);

                            // end condition here, because is slowest request (last finished)
                            vysetreniDetailsIndex++;
                            aElement.innerText = "Probíhá načítání vyšetřeních a opravy. Pro úspěšné dokončení nezavírejte tuto stránku. Počet zkontrolovaných vyšetření: " + vysetreniDetailsIndex + "/" + vysetreniDetailsAElements.length + ".";

                            if(vysetreniDetailsIndex == vysetreniDetailsAElements.length) {
                                aElement.innerText = "Znovu načti a oprav";
                                alert("Načítání dokončeno.");
                            }
                        }

                        if(!(parseInt(laboratorDetailResults.CisloZadanky) > 0)) {
                            PocetChybiCisloZadankyTextElement.innerText = parseInt(PocetChybiCisloZadankyTextElement.innerText) + 1;

                            var Datum1OdberuDate = datumOdberuVysetreniToDate(laboratorDetailResults.Datum1Odberu)
                            var Datum1PotvrzeniOdberuDate = new Date(zadankaData.PotvrzeniOdberu[0].DatumPotvrzeni);

                            if(
                                zadankaData.Cislo &&
                                zadankaData.TypTestuKod == "PCR" &&
                                zadankaData.PotvrzeniOdberu[0] &&
                                Datum1PotvrzeniOdberuDate.getDate() == Datum1OdberuDate.getDate() &&
                                Datum1PotvrzeniOdberuDate.getMonth() == Datum1OdberuDate.getMonth() &&
                                Datum1PotvrzeniOdberuDate.getFullYear() == Datum1OdberuDate.getFullYear()
                            ) {
                                editVysetreni(laboratorDetailResults.EditLink, null, null, zadankaData.Cislo, function(result) {
                                    if(result) {
                                        addToConsole("Chybí číslo žádanky: LabPripadId: " + LabPripadId + ", " + element.href + ", Vysetreni: " + laboratorDetailResults.CisloZadanky + ", Zadanka: " + zadankaData.Cislo + ", ICP: " + laboratorDetailResults.ICP + ", Oprava: úspěšná.");
                                    } else {
                                        addToConsole("Chybí číslo žádanky: LabPripadId: " + LabPripadId + ", " + element.href + ", Vysetreni: " + laboratorDetailResults.CisloZadanky + ", Zadanka: " + zadankaData.Cislo + ", ICP: " + laboratorDetailResults.ICP + ", Oprava: neúspěšná.");
                                    }
                                });
                            } else {
                                addToConsole("Chybí číslo žádanky: LabPripadId: " + LabPripadId + ", " + element.href + ", ICP: " + laboratorDetailResults.ICP);
                            }
                        }

                        if(laboratorDetailResults.Stat.split("-")[0].trim() != zadankaData.TestovanyNarodnostKod) {

                            PocetSpatnaStatniPrislusnostTextElement.innerText = parseInt(PocetSpatnaStatniPrislusnostTextElement.innerText) + 1;

                            editVysetreni(laboratorDetailResults.EditLink, null, zadankaData.TestovanyNarodnostKod, null, function(result) {
                                if(result) {
                                    addToConsole("Špatná státní příslušnost: LabPripadId: " + LabPripadId + ", " + element.href + ", Vysetreni: " + laboratorDetailResults.Stat.split("-")[0].trim() + ", Zadanka: " + zadankaData.TestovanyNarodnostKod + ", ICP: " + laboratorDetailResults.ICP + ", Oprava: úspěšná.");
                                } else {
                                    addToConsole("Špatná státní příslušnost: LabPripadId: " + LabPripadId + ", " + element.href + ", Vysetreni: " + laboratorDetailResults.Stat.split("-")[0].trim() + ", Zadanka: " + zadankaData.TestovanyNarodnostKod + ", ICP: " + laboratorDetailResults.ICP + ", Oprava: neúspěšná.");
                                }
                            });
                        }

                        if(laboratorDetailResults.DatumNarozeni.replaceAll(" ", "") != zadankaData.TestovanyDatumNarozeniText) {

                            PocetSpatneDatumNarozeniPacientaTextElement.innerText = parseInt(PocetSpatneDatumNarozeniPacientaTextElement.innerText) + 1;

                            editVysetreni(laboratorDetailResults.EditLink, zadankaData.TestovanyDatumNarozeniText, null, null, function(result) {
                                if(result) {
                                    addToConsole("Špatné datum narození: LabPripadId: " + LabPripadId + ", " + element.href + ", Vysetreni: " + laboratorDetailResults.DatumNarozeni.replaceAll(" ", "") + ", Zadanka: " + zadankaData.TestovanyDatumNarozeniText.replaceAll(" ", "") + ", ICP: " + laboratorDetailResults.ICP + ", Oprava: úspěšná.");
                                } else {
                                    addToConsole("Špatné datum narození: LabPripadId: " + LabPripadId + ", " + element.href + ", Vysetreni: " + laboratorDetailResults.DatumNarozeni.replaceAll(" ", "") + ", Zadanka: " + zadankaData.TestovanyDatumNarozeniText.replaceAll(" ", "") + ", ICP: " + laboratorDetailResults.ICP + ", Oprava: neúspěšná.");
                                }
                            });
                        }
                    }
                });

                if(!laboratorDetailResults.CisloPacienta) {
                    PocetChybiCisloPacientaTextElement.innerText = parseInt(PocetChybiCisloPacientaTextElement.innerText) + 1;
                    addToConsole("Chybí číslo pacienta: LabPripadId: " + LabPripadId + ", " + element.href + ", ICP: " + laboratorDetailResults.ICP);
                }
            });
        });
    });

    fieldGraphicElement.appendChild(aElement);

    return fieldGraphicElement;
}

function datumOdberuVysetreniToDate(Datum1Odberu) {
    var Datum1Odberu = Datum1Odberu.split(" ");
    var day = Datum1Odberu[0];
    var month = Datum1Odberu[1];
    var year = Datum1Odberu[2];
    return new Date(year, month - 1, day);
}

function editVysetreni(url, DatumNarozeni, Stat, CisloZadanky, callback) {
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
                    CisloZadanky,
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
                    callback(false);
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
    var fieldGraphicPocetPozitivnichTextElement = getPocetPozitivnichText();
    headerFieldsetDivElement.appendChild(fieldGraphicPocetPozitivnichTextElement);
    var fieldGraphicPocetChybiPristupoveUdajeTextElement = getPocetChybiPristupoveUdajeText();
    headerFieldsetDivElement.appendChild(fieldGraphicPocetChybiPristupoveUdajeTextElement); 
    var fieldGraphicPocetChybiCisloPacientaButtonElement = getPocetChybiCisloPacientaButton();
    headerFieldsetDivElement.appendChild(fieldGraphicPocetChybiCisloPacientaButtonElement);
    var fieldGraphicConsoleElement = getConsole();
    headerFieldsetDivElement.appendChild(fieldGraphicConsoleElement);
}