Vue-POC on prototüüp veebiraamistiku Vue omaduste uurimiseks

## Hinnang

ja ka mõningane üldistus, sest "uued tehnoloogiad" on sageli vanad ideed uues kuues.

Vue, "the progressive Javascript framework" on tehnoloogia, mis võib abistada sirvikurakenduste (*front-end*) arendamist.

Abivahendid nagu Vue võimaldavad potentsiaalselt sirvikurakendust arendada kiiremini, vähema koodiga ja veakindlamalt.

Kuid see potentsiaal ei teostu iseenesest. Tehnoloogiate nagu Vue kasutamisel tuleb minu arvates arvestada järgmisi tegureid.

Efekti ülehindamine on populaarsuse harjal olevate tehnoloogiate puhul pigem reegel kui erand. Lubadus on reeglina ilusam kui tegelikkus. 
"Using a framework  [Vue] is like [...] having a self-driving car instead of driving the car yourself." – Flavio Copes, The Vue Handbook.

Raamistike puhul peab küsima, mida raamistik optimeerib? Kui tehnoloogia müüb end kui vahendit, millega saab efektiivselt teha suuri, keerukaid veebirakendusi, siis peaks küsima, kas me üldse vajame suurt ja keerukat veebirakendust? Lihtsa veebirakenduse korral võib vahendi võimalik efekt jääda loodetust väiksemaks. Kui tehnoloogia müüb end kui vahendit, millega saab projekti kiiresti alustada, siis peaks küsima, kas fast start on kõige tähtsam edu kriteerium? Arendajale, kes teeb töid erinevatele klientidele, on vahend, millega saab rakenduse esimese lähenduse kiiresti püsti kasulik. Kliendi seisukohast võib selline kiire algus olla problemaatiline, sest vajaduste täielikuks lahendamiseks tuleb minna detailidesse ja siis võib selguda, et esialgne asi kas tuleb ümber teha või on kitsenduseks.

Tehnoloogiate puhul, mis toimivad kihina teise tehnoloogia peal (*lightweight layer over ...*), tuleb küsida, kas tehnoloogia teeb alustehnoloogiate tundmise mittevajalikuks? Veebiraamistike puhul see nii ei ole. Vue ei asenda alustehnoloogiate (HTML, Javascript) väga head tundmist. See on nii paljude tehnoloogiate puhul. Seetõttu tuleb küsida, kas kihtide lisamine kokkuvõttes on tasuv investeering?

Iga tehnoloogia vajab kasutama õppimist. Õppimise aega ja kulu tihti alahinnatakse.

Neid kaalutlusi arvestades uurisin ja katsetasin praegu populaarset veebiraamistikku Vue ning jõudsin järgmistele tulemustele.

Veebirakenduses on kolm tuumtehnoloogiat: HTML (märgendkeel), Javascript (programmeerimiskeel) ja CSS (kujunduskeel).

(Veebirakendusena mõistan siin sirvikus töötavat, inimkasutajaga suhtlevat HTML-rakendust).

Sirvikurakendusi saab põhimõtteliselt teha ka ainult HTML+Javascript+CSS abil (nn *native* e *vanilla* tööviis).

Veebirakenduste tuumtehnoloogiad on 10 aastaga kõvasti arenenud. Seetõttu mitmeid asju, mida varem tehti teekide ja raamistike abil, on tänapäeval võimalik teha native viisil.

Vue ("One framework. Mobile & desktop."), Angular ja React ("A JavaScript library for building user interfaces") on nn 2. põlvkonna veebiraamistikud. 1. põlvkonda võib lugeda jQuery ("The Write Less, Do More, JavaScript Library.") ja - mõnevõrra tinglikult - Bootstrap-i ("Build responsive, mobile-first projects on the web with the world’s most popular front-end component library.").
2. põlvkonna veebiraamistike väärtuspakkumuste läbiv teema on modulaarsuse tugi. Veebirakendused on muutunud keerukamaks. Veebipoe kasutajaliideses võib olla tuhandeid komponente ja mitmeid taustaprotsesse. Seda dünaamilist kooslust on keerukas juhtida. Veebiraamistike suur lubadus ongi keerukate, paljukomponentsete *front-end* rakenduste efektiivsem juhtimine (vigadeta kooskõlas hoidmine).

Selle lubadusega peab siiski olema ettevaatlik.

Mitmestest komponentidest koosneva süsteemi kooskõlas hoidmine nõuab eelkõige distsipliini - arendusdistsipliini ja süsteemset mõtlemist (insenerilähenemist). Ükski töövahend ei loo distsipliini, kui arendajas endas ei ole distsipliini tunnetust. Vahend võib kergendada, kuid eelkõige peaks küsima, kas keerukad, paljukomponentsed rakendused on üldse vajalikud?

Teine ettevaatust nõudev lubadus on deklaratiivne arendusstiil. Paljud raamistikud ja vahendid (nt Gradle, Maven, Jenkins) üritavad protseduurset programmeerimist asendada deklaratiivsega. Protseduurne tähendab samm-sammulisust. Deklaratiivne tähendab, et arendaja kirjeldab tükid (komponendid) ja raamistik või vahend paneb "automaagiliselt" tükkidest kokku toimiva terviku.

Automaagia peale lootma jäämine võib osutuda piiranguks. Deklaratiivne stiil on kasutusel ka Vues. Veebiliides jagatakse tükkideks. Kuigi internetis on tohutult arvamusi, et kõik see on imelihtne, ei ole arusaamine, kuidas tükid üksteisega suhtlevad, siiski nii lihtne midagi, vaid vajab tugevat jõupingutust. Vue tööpõhimõtte mõistmiseks on vaja aru saada, millistele ideedele on Vue rajatud ja kuidas Vue on ehitatud. Alles siis saab Vued efektiivselt kasutada.

Lihtsat asja saab  muidugi ka deklaratiivse automaagia abil, ilma sügavama mõistmiseta teha.

Vue on rajatud sündmusepõhisusele (*event-driven*). Sündmuse publitseerimine, sündmuse kuulamine ja sellele reageerimine. Reageerivus (*reactivity*). Sündmuste siin (*event bus*). Sündmuste "ajaloo" tagasi- ja edasikerimine (*event sourcing*). Flux ("Application Architecture for Building User Interfaces"). Elm. Keskne olekujuhtimine (*centralized state management*). Kogu selle ideoloogia õppimine ja omaksvõtmine nõuab omajagu aega.

Ideoloogia on defineeritav kui koherentne, tugevalt kooskõlaline (oma maailmanägemise piires!) - ja sellisena sageli ka paljudele atraktiivne ideede kogum. Harilikult tuumidee + ümbrus.

Vue-l on ka oma tugev ideoloogia: reageerivus (*reactivity*) + deklaratiivselt kirjeldatav komponentsus.

Vue tuumikuks on komponentide deklaratiivse kirjeldamise ja reageeriva, sündmustepõhimise sidumise lingvistilised vahendid - komponendi olek (*data*), direktiivid, templiidid, meetodid, omadused (*props*) - ja taustal töötav täitursüsteem (jälgijad (*watchers*)).

Vue ümbruse (*ecosystem*) moodustavad rida lisavõimalusi, sh:

- ühefailikomponendid (*single fail components*)
- Vue CLI (“standard tooling for Vue.js development”). "Tasuta" tuleb kaasa rida vahendeid, nt:
  - pakendamissüsteem Webpack ("bundle your assets")
  - multikompilaator Babel ("Use next generation JavaScript, today.")
- silumisvahend Vue.js devtools ("Chrome devtools extension for debugging Vue.js applications")
- Vue Router ("the official router for Vue.js")
- Vuex ("a state management pattern + library for Vue.js applications") 
- Vuetify ("Vue.js Material Component Framework")
- jne.

Siin kaks tähelepanekut.

Sa ei vaja ökosüsteemi kõiki osi.

*Bro*-kultuur. Kasulik on aru saada, kuidas see ökosüsteem, omamoodi paisuv universum ise areneb. Tegu on tasuta, vabavaralise tarkvaraga, mida tüüpiliselt arendavad 20-30-tes mehed. Tasuta s.t sotsiaalse tunnustuse motivaatorite aetuna, laikide ja GitHub-i tärnide eest. Seal on inimesi, kes arvavad, et kui on keel, siis peab olema ka kompilaator, käsureautiliit (CLI), keelespetsiifiline testimisvahendite komplekt jne. Kas vajad oma projektis kõike seda?

Tehnoloogiaportfelli vaade. ThoughtWorks mudel ADOPT-TRIAL-ASSESS-HOLD. Hindan, et kui soov on Vue-d kasutada, siis lihtsama veebirakenduse puhul piisab alustuseks:

- Vue tuumikust (ilma ühefailikomponentideta) - ADOPT
- Vue.js devtools - ADOPT
- kaaluda Vuex-i, kuid tõenäoliselt saab olekuhalduse lahendada ka native Javascripti ja arendusdistsipliini abil. - ASSESS
- uurida Flux-i ja event sourcing-t, aga eelkõige põhimõtte tasandil. -ASSESS

Ülejäänud - HOLD.

## Kasutuslood

Prototüübis on kavas teostada järgmised (väljamõeldud) kasutuslood.

UC-1 Valimiste etapi avamine/sulgemine. Kasutaja saab teha järgmisse etappi viiva toimingu:

- Kuuluta valimised välja
- Ava kandidaatide ülesseadmine
- Sule kandidaatide ülesseadmine
- Ava hääletamine
- Sule hääletamine
- Avalda tulemused
- Tühista valimised

Etappide vahel on kindlad lubatud järgnevused. Rakendus kuvab käimasoleva etapi nimetuse.

UC-2 Kandidaadi ülesseadmine. Kasutaja saab üles seada kandidaadi, sisestades kandidaadi ees- ja perekonnanime, isikukoodi ja e-posti aadressi. Eeldus on, et kandidaatide ülesseadmise etapp on käimas. Rakendus kuvab ülesseatud kandidaadid.

UC-3 Hääletamine. Kasutaja anda hääle, sisestades kandidaadi numbri. Eeldus on, et hääletamise etapp on käimas.

UC-4 Tulemuste avaldamine. Rakendus kuvab palju kandidaadid hääli said.

Praegu on teostatud kasutuslood UC-1 ja UC-2.

## Kasutamine

Ava sirvikus: 

`https://e-gov.github.io/Vue-POC/index.html`


Priit Parmakson, 12.04.2019
