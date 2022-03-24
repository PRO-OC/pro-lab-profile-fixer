# PRO LAB Profile fixer

Rozšíření do prohlížeče přidává do ISIN možnost kontrolu všech vyšetření, report nalezených nesrovnalostí a jejich částečnou automatickou opravu.

![Preview](preview/nahled.png)

## Zásady ochrany osobních údajů

Osobní informace pacientů podmíněné přihlášením do modulu [Pacienti COVID-19](https://ereg.ksrzis.cz/Registr/CUDZadanky/VyhledaniPacienta) a webové aplikace [Žádanky testů COVID-19](https://eregpublicsecure.ksrzis.cz/Registr/CUD/Overeni) jsou použity pouze pro přidání nových funkcí zmíněných níže. Přidané funkce využívají již stávajících funkcí obou systémů. **Žádná data nejsou jakkoliv zpracovávána ani přeposílána mimo tyto systémy.**

# Použití

- je nutné být přihlášen do modulu Covid-19 s rolí Vakcinace
- je nutné být přihlášen do registru Žádanky Covid-19

# Reportuje a zároveň automaticky provádí opravu

- neshoda datumu narození na žádance a ve vyšetření (řešení: vložení datumu narození do vyšetření ze žádanky)
- neshoda státní příslušnosti na žádance a ve vyšetření (řešení: vložení státní příslušnosti do vyšetření ze žádance)

# Pouze reportuje

- ve vyšetření chybí číslo pacienta
- ve vyšetření chybí číslo žádanky
- chybí certifikát na profilu (automatické opravy zmíněné výše můžou toto opravit, generování certifikátu chvilku trvá)
- nebylo možné ověřit certifikát na profilu (typicky, protože existuje více profilů a tím pádem se nepodařilo otevřít ani jeden, protože systém žádá o upřesnění zadaných údajů)
- počet vyšetření s pozitivním výsledkem (neověřuje se pro ně certifikát na profilu, protože certifikát z testu se pro pozitivní vyšetření negeneruje, generuje se po x dnech pouze certifikát o prodělané nemoci)