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
const POCET_SPATNE_JMENO = "Hlavicka_Spatne_Jmeno";
const POCET_SPATNE_PRIJMENI = "Hlavicka_Spatne_Prijmeni";

const IsLaboratorDavkyDetailUrl = window.location.href.includes("/LaboratorDavky/Detail");

function getSpatnePrijmeniText() {
    var fieldGraphicElement = document.createElement("div");
    fieldGraphicElement.setAttribute("class", "fieldGraphic col-1");

    var labelElement = document.createElement("label");
    labelElement.setAttribute("class", "popisekPole");
    labelElement.setAttribute("for", POCET_SPATNE_PRIJMENI);
    labelElement.innerText = "PocetSpatnePrijmeniPacienta";

    fieldGraphicElement.appendChild(labelElement);

    var divElement = document.createElement("div");
    divElement.setAttribute("class", "textField");
    divElement.setAttribute("id", POCET_SPATNE_PRIJMENI);
    divElement.innerText = "neznámo";

    fieldGraphicElement.appendChild(divElement);

    var divClearElement = document.createElement("div");
    divClearElement.setAttribute("class", "clear");

    fieldGraphicElement.appendChild(divClearElement);

    return fieldGraphicElement;
}

function getSpatneJmenoText() {
    var fieldGraphicElement = document.createElement("div");
    fieldGraphicElement.setAttribute("class", "fieldGraphic col-1");

    var labelElement = document.createElement("label");
    labelElement.setAttribute("class", "popisekPole");
    labelElement.setAttribute("for", POCET_SPATNE_JMENO);
    labelElement.innerText = "PocetSpatneJmenoPacienta";

    fieldGraphicElement.appendChild(labelElement);

    var divElement = document.createElement("div");
    divElement.setAttribute("class", "textField");
    divElement.setAttribute("id", POCET_SPATNE_JMENO);
    divElement.innerText = "neznámo";

    fieldGraphicElement.appendChild(divElement);

    var divClearElement = document.createElement("div");
    divClearElement.setAttribute("class", "clear");

    fieldGraphicElement.appendChild(divClearElement);

    return fieldGraphicElement;
}

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
        Metoda: undefined,
        Jmeno: undefined,
        Prijmeni: undefined,
        Mesto: undefined,
        Psc: undefined
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
            case 'LabUdaje_Jmeno':
                results.Jmeno = labels[i].nextElementSibling.innerHTML.trim();
                break;
            case 'LabUdaje_Prijmeni':
                results.Prijmeni = labels[i].nextElementSibling.innerHTML.trim();
                break;
            case 'LabUdaje_Mesto':
                results.Mesto = labels[i].nextElementSibling.innerHTML.trim();
                break;
            case 'LabUdaje_Psc':
                results.Psc = labels[i].nextElementSibling.innerHTML.trim();
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

function getRegistrISINLaboratorUpravitUrlParams(DatumNarozeni, Stat, CisloZadanky, Jmeno, Prijmeni, RequestVerificationTokenElement) {
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
    if(Jmeno) {
        urlParams.set("LabUdaje.Jmeno", Jmeno);
    }
    if(Prijmeni) {
        urlParams.set("LabUdaje.Prijmeni", Prijmeni);
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

    var results = {
        Cislo: undefined,
        Telefon: undefined,
        Email: undefined,
        KontrolovanyTest: undefined
    };

    var url = getRegistrCUDVyhledaniPacientaUrl();
    var urlParams = getRegistrCUDVyhledaniPacientaUrlParams(zadanka);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if(xhr.readyState === XMLHttpRequest.DONE) {
  
            if(xhr.status == 200) {

                var parser = new DOMParser();
                var responseDocument = parser.parseFromString(xhr.responseText, "text/html");
          
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

                results.Link = xhr.responseURL;
                results.EditLink = xhr.responseURL.replace("Index", "Edit");

                callback(results);
            } else {
                callback(results);
            }
        }
    }
    xhr.send(urlParams.toString());
}

function tryFindProfileWithSpecificCertElement(ZadankaData, datumTestu, callback) {

    var searchVariantJmenoPrijmeniRC = {
        Jmeno: ZadankaData.TestovanyJmeno,
        Prijmeni: ZadankaData.TestovanyPrijmeni,
        CisloPojistence: ZadankaData.TestovanyCisloPojistence,
        StatniPrislusnost: "CZ",
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

    // Na prioritách záleží:
    //  1. Zkusit, zda není čech
    //  2. Zkusit najít podle 1 údaje, číslo pojištěnce
    //  3. a 4. Zkusit teprve pak pomocí datumu narození a státní příslušnosti

    var Results = {
        //Profiles: [],
        EmailFromOtherProfile: undefined,
        TelefonFromOtherProfile: undefined,
        ProfileKontrolovanyTest: undefined
    };
    existsCertElement(searchVariantJmenoPrijmeniRC, datumTestu, function(results1) {
        if(results1.KontrolovanyTest) {
            Results.ProfileKontrolovanyTest = results1;
        }
        if(results1.Email) {
            Results.EmailFromOtherProfile = results1.Email;
        }
        if(results1.Telefon) {
            Results.TelefonFromOtherProfile = results1.Telefon;
        }
        //Results.Profiles.push(results1);
        existsCertElement(searchVariantCizinecCisloPojistence, datumTestu, function(results2) {
            if(results2.KontrolovanyTest) {
                Results.ProfileKontrolovanyTest = results2;
            }
            if(results2.Email) {
                Results.EmailFromOtherProfile = results2.Email;
            }
            if(results2.Telefon) {
                TelefonFromOtherProfile = results2.Telefon;
            }
            //Results.Profiles.push(results2);
            existsCertElement(searchVariantJmenoPrijmeniDatumNarozeniMistoNarozeni, datumTestu, function(results3) {
                if(results3.KontrolovanyTest) {
                    Results.ProfileKontrolovanyTest = results3;
                }
                if(results3.Email) {
                    Results.EmailFromOtherProfile = results3.Email;
                }
                if(results3.Telefon) {
                    TelefonFromOtherProfile = results3.Telefon;
                }
                //Results.Profiles.push(results3);
                existsCertElement(searchVariantCizinecJmenoPrijmeniDatumNarozniObcanstvi, datumTestu, function(results4) {
                    if(results4.KontrolovanyTest) {
                        Results.ProfileKontrolovanyTest = results4;
                    }
                    //Results.Profiles.push(results4);
                    if(results4.Email) {
                        Results.EmailFromOtherProfile = results4.Email;
                    }
                    if(results4.Telefon) {
                        Results.TelefonFromOtherProfile = results4.Telefon;
                    }

                    /*Results.Profiles = Results.Profiles.filter((obj, index, arr) => {
                       return arr.map(mapObj => mapObj.Cislo).indexOf(obj.Cislo) === index;
                    });*/

                    callback(Results);
                });
            });
        });
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
        var PocetSpatneJmenoPacientaTextElement = document.getElementById(POCET_SPATNE_JMENO);
        PocetSpatneJmenoPacientaTextElement.innerText = 0;
        var PocetSpatnePrijmeniPacientaTextElement = document.getElementById(POCET_SPATNE_PRIJMENI);
        PocetSpatnePrijmeniPacientaTextElement.innerText = 0;

        aElement.innerText = "Probíhá načítání vyšetřeních a opravy. Pro úspěšné dokončení nezavírejte tuto stránku. Počet zkontrolovaných vyšetření: " + vysetreniDetailsIndex + "/" + vysetreniDetailsAElements.length + ".";
        alert("Bude probíhat načítání všech vyšetření a také automatické opravy.");

        vysetreniDetailsAElements.forEach(function (element) {

            const LabPripadId = element.href.split("=")[1];

            // only testing purpose
            /*const element = {
                href: "/Registr/ISIN/Laborator/Detail/?id=26837571"
            }
            const LabPripadId = "26837571";*/

            // Fixme upravovat státní příslušnost na profilu:
            //
            // labId: 26790758 (má evidentně Ruskou i Českou státní příslušnost - kontrola prošla)
            // mohl bych státní příslušnost ze žádanky / z vyšetření upravit i na profilu, pokud je tam jiná, ale v tom případě, že na profilu je česká a ověření z RoB neprojde a nebo tam česká není, a ověření z RoB projde
            // https://ereg.ksrzis.cz/Registr/CUDZadanky/Zadanka/ZtotozniRob?testovanyJmeno=xxx&testovanyPrijmeni=yyy&testovanyCisloPojistence=XX&datumNarozeni=YY&stat=CZ

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
                            tryFindProfileWithSpecificCertElement(zadankaData, laboratorDetailResults.Datum1Odberu, function(results) {

                                var resultsProfile = results.ProfileKontrolovanyTest;

                                if(resultsProfile && resultsProfile.Cislo) {
                                    if(resultsProfile.KontrolovanyTest == false) {
                                        PocetChybiCertifikatNaProfiluTextElement.innerText = parseInt(PocetChybiCertifikatNaProfiluTextElement.innerText) + 1;
                                        addToConsole("Chybí certifikát na profilu: LabPripadId: " + LabPripadId + ", " + element.href + ", ICP: " + laboratorDetailResults.ICP);
                                    } else if(resultsProfile.KontrolovanyTest == null) {
                                        PocetNebyloMozneOveritCertifikatNaProfiluTextElement.innerText = parseInt(PocetNebyloMozneOveritCertifikatNaProfiluTextElement.innerText) + 1;
                                        addToConsole("Nebylo možné ověřit certifikát na profilu: LabPripadId: " + LabPripadId + ", " + element.href + ", ICP: " + laboratorDetailResults.ICP);
                                    }

                                    if(laboratorDetailResults.Stat.trim() != "CZ - Česko" && (!resultsProfile.Telefon || !resultsProfile.Email)) {

                                        PocetChybiPristupoveUdajeTextElement.innerText = parseInt(PocetChybiPristupoveUdajeTextElement.innerText) + 1;

                                        if(!resultsProfile.Email) {

                                            var PojistovnaKod = zadankaData ? zadankaData.TestovanyZdravotniPojistovnaKod : "300";
                                            var Mesto = zadankaData ? zadankaData.TestovanyMesto : laboratorDetailResults.Mesto && laboratorDetailResults.Mesto.trim() != "Bydliště mimo území ČR" ? laboratorDetailResults.Mesto : "Praha 2";
                                            var Psc = zadankaData ? zadankaData.TestovanyPsc : laboratorDetailResults.Psc && parseInt(laboratorDetailResults.Psc) != 99999 ? laboratorDetailResults.Psc : "Praha 2";

                                            if(results.EmailFromOtherProfile && results.EmailFromOtherProfile != undefined) {
                                                editProfile(
                                                    resultsProfile.EditLink,
                                                    null,
                                                    results.EmailFromOtherProfile,
                                                    PojistovnaKod,
                                                    Mesto,
                                                    Psc,
                                                    function() {
                                                        addToConsole("Chybí přístupové údaje na profilu: LabPripadId: " + LabPripadId + ", " + element.href + ", Profil e-mail: " + resultsProfile.Email + ", Jiný profil e-mail: " + results.EmailFromOtherProfile + ", ICP: " + laboratorDetailResults.ICP + ", Oprava: úspěšná.");
                                                    },
                                                    function() {
                                                        addToConsole("Chybí přístupové údaje na profilu: LabPripadId: " + LabPripadId + ", " + element.href + ", Profil e-mail: " + resultsProfile.Email + ", Jiný profil e-mail: " + results.EmailFromOtherProfile + ", ICP: " + laboratorDetailResults.ICP + ", Oprava: neúspěšná.");
                                                    }
                                                );
                                            } else {
                                                addToConsole("Chybí přístupové údaje na profilu: LabPripadId: " + LabPripadId + ", " + element.href + ", Profil e-mail: " + resultsProfile.Email + ", ICP: " + laboratorDetailResults.ICP + ".");
                                            }
                                        }

                                        if(!resultsProfile.Telefon) {

                                            if(results.TelefonFromOtherProfile && results.TelefonFromOtherProfile != undefined) {
                                                editProfile(
                                                    resultsProfile.EditLink,
                                                    results.TelefonFromOtherProfile,
                                                    null,
                                                    PojistovnaKod,
                                                    Mesto,
                                                    Psc,
                                                    function() {
                                                        addToConsole("Chybí přístupové údaje na profilu: LabPripadId: " + LabPripadId + ", " + element.href + ", Profil telefon: " + resultsProfile.Telefon + ", Jiný profil telefon: " + results.TelefonFromOtherProfile + ", ICP: " + laboratorDetailResults.ICP + ", Oprava: úspěšná.");
                                                    },
                                                    function() {
                                                        addToConsole("Chybí přístupové údaje na profilu: LabPripadId: " + LabPripadId + ", " + element.href + ", Profil telefon: " + resultsProfile.Telefon + ", Jiný profil telefon: " + results.TelefonFromOtherProfile + ", ICP: " + laboratorDetailResults.ICP + ", Oprava: neúspěšná.");
                                                    }
                                                );
                                            } else {
                                                addToConsole("Chybí přístupové údaje na profilu: LabPripadId: " + LabPripadId + ", " + element.href + ", Profil telefon: " + resultsProfile.TelefonFromOtherProfile + ", ICP: " + laboratorDetailResults.ICP + ".");
                                            }
                                        }
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
                            if(
                                zadankaData.Cislo &&
                                zadankaData.TypTestuKod == "PCR" &&
                                zadankaData.PotvrzeniOdberu[0] &&
                                (new Date(zadankaData.PotvrzeniOdberu[0].DatumPotvrzeni)) == Datum1OdberuDate.getDate() &&
                                (new Date(zadankaData.PotvrzeniOdberu[0].DatumPotvrzeni)) == Datum1OdberuDate.getMonth() &&
                                (new Date(zadankaData.PotvrzeniOdberu[0].DatumPotvrzeni)) == Datum1OdberuDate.getFullYear()
                            ) {
                                editVysetreni(laboratorDetailResults.EditLink, null, null, zadankaData.Cislo, null, null, function(result) {
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

                        if(
                            zadankaData.TestovanyNarodnostKod &&
                            laboratorDetailResults.Stat.split("-")[0].trim() != zadankaData.TestovanyNarodnostKod
                        ) {

                            PocetSpatnaStatniPrislusnostTextElement.innerText = parseInt(PocetSpatnaStatniPrislusnostTextElement.innerText) + 1;

                            editVysetreni(laboratorDetailResults.EditLink, null, zadankaData.TestovanyNarodnostKod, null, null, null, function(result) {
                                if(result) {
                                    addToConsole("Špatná státní příslušnost: LabPripadId: " + LabPripadId + ", " + element.href + ", Vysetreni: " + laboratorDetailResults.Stat.split("-")[0].trim() + ", Zadanka: " + zadankaData.TestovanyNarodnostKod + ", ICP: " + laboratorDetailResults.ICP + ", Oprava: úspěšná.");
                                } else {
                                    addToConsole("Špatná státní příslušnost: LabPripadId: " + LabPripadId + ", " + element.href + ", Vysetreni: " + laboratorDetailResults.Stat.split("-")[0].trim() + ", Zadanka: " + zadankaData.TestovanyNarodnostKod + ", ICP: " + laboratorDetailResults.ICP + ", Oprava: neúspěšná.");
                                }
                            });
                        }

                        if(
                            zadankaData.TestovanyDatumNarozeniText &&
                            laboratorDetailResults.DatumNarozeni.replaceAll(" ", "") != zadankaData.TestovanyDatumNarozeniText
                        ) {

                            PocetSpatneDatumNarozeniPacientaTextElement.innerText = parseInt(PocetSpatneDatumNarozeniPacientaTextElement.innerText) + 1;

                            editVysetreni(laboratorDetailResults.EditLink, zadankaData.TestovanyDatumNarozeniText, null, null, null, null, function(result) {
                                if(result) {
                                    addToConsole("Špatné datum narození: LabPripadId: " + LabPripadId + ", " + element.href + ", Vysetreni: " + laboratorDetailResults.DatumNarozeni.replaceAll(" ", "") + ", Zadanka: " + zadankaData.TestovanyDatumNarozeniText.replaceAll(" ", "") + ", ICP: " + laboratorDetailResults.ICP + ", Oprava: úspěšná.");
                                } else {
                                    addToConsole("Špatné datum narození: LabPripadId: " + LabPripadId + ", " + element.href + ", Vysetreni: " + laboratorDetailResults.DatumNarozeni.replaceAll(" ", "") + ", Zadanka: " + zadankaData.TestovanyDatumNarozeniText.replaceAll(" ", "") + ", ICP: " + laboratorDetailResults.ICP + ", Oprava: neúspěšná.");
                                }
                            });
                        }

                        if(
                            zadankaData.TestovanyJmeno && 
                            (
                                !laboratorDetailResults.Jmeno ||
                                (laboratorDetailResults.Jmeno.trim().toUpperCase() != zadankaData.TestovanyJmeno.toUpperCase())
                            )
                        ) {

                            PocetSpatneJmenoPacientaTextElement.innerText = parseInt(PocetSpatneJmenoPacientaTextElement.innerText) + 1;

                            editVysetreni(laboratorDetailResults.EditLink, null, null, null, zadankaData.TestovanyJmeno, null, function(result) {
                                if(result) {
                                    addToConsole("Špatné jméno: LabPripadId: " + LabPripadId + ", " + element.href + ", Vysetreni: " + laboratorDetailResults.Jmeno.trim() + ", Zadanka: " + zadankaData.TestovanyJmeno + ", ICP: " + laboratorDetailResults.ICP + ", Oprava: úspěšná.");
                                } else {
                                    addToConsole("Špatné jméno: LabPripadId: " + LabPripadId + ", " + element.href + ", Vysetreni: " + laboratorDetailResults.Jmeno.trim() + ", Zadanka: " + zadankaData.TestovanyJmeno + ", ICP: " + laboratorDetailResults.ICP + ", Oprava: neúspěšná.");
                                }
                            });
                        }

                        if(
                            zadankaData.TestovanyPrijmeni &&
                            (
                                !laboratorDetailResults.Prijmeni ||
                                laboratorDetailResults.Prijmeni.trim().toUpperCase() != zadankaData.TestovanyPrijmeni.toUpperCase())
                            ) {

                            PocetSpatnePrijmeniPacientaTextElement.innerText = parseInt(PocetSpatnePrijmeniPacientaTextElement.innerText) + 1;

                            editVysetreni(laboratorDetailResults.EditLink, null, null, null, null, zadankaData.TestovanyPrijmeni, function(result) {
                                if(result) {
                                    addToConsole("Špatné přijmení: LabPripadId: " + LabPripadId + ", " + element.href + ", Vysetreni: " + laboratorDetailResults.Prijmeni.trim() + ", Zadanka: " + zadankaData.TestovanyPrijmeni + ", ICP: " + laboratorDetailResults.ICP + ", Oprava: úspěšná.");
                                } else {
                                    addToConsole("Špatné přijmení: LabPripadId: " + LabPripadId + ", " + element.href + ", Vysetreni: " + laboratorDetailResults.Prijmeni.trim() + ", Zadanka: " + zadankaData.TestovanyPrijmeni + ", ICP: " + laboratorDetailResults.ICP + ", Oprava: neúspěšná.");
                                }
                            });
                        }

                        if(laboratorDetailResults.Vysledek.trim() == "Pozitivní") {
                            PocetPozitivnichTextElement.innerText = parseInt(PocetPozitivnichTextElement.innerText) + 1;
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

function getRegistrCUDZadankyPacientDetailEditUrlParams(Telefon, Email, ZdravotniPojistovnaKod, Mesto, Psc) {
    var urlParams = new URLSearchParams();
    if(Telefon) {
        urlParams.set("Pacient.Telefon", Telefon);
    }
    if(Email) {
        urlParams.set("Pacient.Email", Email);
    }
    urlParams.set("Pacient.ZdravotniPojistovnaKod", ZdravotniPojistovnaKod);
    urlParams.set("Mesto", Mesto);
    urlParams.set("Psc", Psc);
    return urlParams;
}

function editProfile(url, Telefon, Email, ZdravotniPojistovnaKod, Mesto, Psc, onSuccess, onError) {

    var urlParams = getRegistrCUDZadankyPacientDetailEditUrlParams(
        Telefon,
        Email,
        ZdravotniPojistovnaKod, 
        Mesto, 
        Psc
    );

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if(xhr.readyState === XMLHttpRequest.DONE) {
            if(xhr.status == 200) {
                onSuccess();   
            } else {
                onError();
            }
        }
    }
    xhr.send(urlParams.toString());
}

function datumOdberuVysetreniToDate(Datum1Odberu) {
    var Datum1Odberu = Datum1Odberu.split(" ");
    var day = Datum1Odberu[0];
    var month = Datum1Odberu[1];
    var year = Datum1Odberu[2];
    return new Date(year, month - 1, day);
}

function editVysetreni(url, DatumNarozeni, Stat, CisloZadanky, Jmeno, Prijmeni, callback) {
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
                    Jmeno,
                    Prijmeni,
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

if(headerFieldsetDivElement && IsLaboratorDavkyDetailUrl) {

    var fieldGraphicPocetChybiCisloPacientaTextElement = getPocetChybiCisloPacientaText();
    headerFieldsetDivElement.appendChild(fieldGraphicPocetChybiCisloPacientaTextElement);
    var fieldGraphicPocetChybiCisloZadankyElement = getPocetChybiCisloZadankyText();
    headerFieldsetDivElement.appendChild(fieldGraphicPocetChybiCisloZadankyElement);
    var fieldGraphicPocetSpatneDatumNarozeniTextElement = getPocetSpatneDatumNarozeniText();
    headerFieldsetDivElement.appendChild(fieldGraphicPocetSpatneDatumNarozeniTextElement);
    var fieldGraphicPocetSpatneJmenoTextElement = getSpatneJmenoText();
    headerFieldsetDivElement.appendChild(fieldGraphicPocetSpatneJmenoTextElement);
    var fieldGraphicPocetSpatnePrijmeniTextElement = getSpatnePrijmeniText();
    headerFieldsetDivElement.appendChild(fieldGraphicPocetSpatnePrijmeniTextElement);
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