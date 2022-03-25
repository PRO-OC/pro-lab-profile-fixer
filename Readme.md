# PRO LAB Profile fixer

Rozšíření do prohlížeče přidává do ISIN možnost kontrolu všech vyšetření, report nalezených nesrovnalostí a jejich částečnou automatickou opravu.

![Preview](preview/nahled.png)

## Zásady ochrany osobních údajů

Osobní informace pacientů podmíněné přihlášením do modulu [Pacienti COVID-19](https://ereg.ksrzis.cz/Registr/CUDZadanky/VyhledaniPacienta) a webové aplikace [Žádanky testů COVID-19](https://eregpublicsecure.ksrzis.cz/Registr/CUD/Overeni) jsou použity pouze pro přidání nových funkcí zmíněných níže. Přidané funkce využívají již stávajících funkcí obou systémů. **Žádná data nejsou jakkoliv zpracovávána ani přeposílána mimo tyto systémy.**

# Použití

- je nutné být přihlášen do modulu Covid-19 s rolí Vakcinace (kvůli datům z profilu)
- je nutné být přihlášen do registru Žádanky Covid-19 (kvůli datům ze žádanky)

# Reportuje a zároveň automaticky provádí opravu

- neshoda datumu narození na žádance a ve vyšetření (řešení: vložení datumu narození do vyšetření ze žádanky)
- neshoda státní příslušnosti na žádance a ve vyšetření (řešení: vložení státní příslušnosti do vyšetření ze žádanky)
- neshoda jména a přijmení (typickým důvodem zkracování při zasílání dávky) (řešení: vložení jména a příjmení do vyšetření ze žádanky)
- ve vyšetření chybí / je zadaná 0 místo čísla žádanky (řešení: dohledá podle uvedeného čísla pojištěnce žádanku a pokud odpovídá typ testu a stejný den prvního odběru vzorku, vloží číslo žádanky do vyšetření)

# Pouze reportuje

- chybějící přístupové údaje (telefon, email) na profilu cizince
- ve vyšetření chybí číslo pacienta (automatické opravy zmíněné výše mohou toto opravit, automatické dohledání profilu pacienta chvilku trvá)
- chybí certifikát na profilu (automatické opravy zmíněné výše mohou toto opravit, automatické generování certifikátu na profil pacienta chvilku trvá)
- nebylo možné ověřit certifikát na profilu (typicky, protože existuje více profilů a tím pádem se nepodařilo otevřít ani jeden, protože systém žádá o upřesnění zadaných údajů)
- počet vyšetření s pozitivním výsledkem (neověřuje se pro ně certifikát na profilu, protože certifikát z testu se pro pozitivní vyšetření negeneruje, generuje se po x dnech pouze certifikát o prodělané nemoci)