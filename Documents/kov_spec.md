# Követelmény specifikációk

## 1.1 Jelenlegi helyzet

A ***StudyUp*** mint ötlet úgy vetődött fel, hogy belegondoltunk abba, hogy mikor még mi voltunk kisebbek, és általános iskolában vagy gimnáziumban tanultunk,
sokszor azon kaptuk magunkat, hogy nincsen, ami motiválna a tanulásra minket. Ez egy általános probléma a diákok körében, és sok esetben ez a motiválatlanság az oka, hogy nehezen megy a tanulás, de sok esetben akár a pedagógus hibájából is adódhat, aki nem gyakorol eleget a tanulókkal, így a diákoknak nincsen visszajelzésük az addigi teljesítményükről.

Ezért gondoltuk, hogy az újabb generáció számára tökéletes lehetőség lenne ezen alkalmazás vagy weboldal használatával tanulni, aminek célja, hogy a diákok hatékonyan és játékosan tanulhassanak, mégpedig úgy, hogy teszteket tölthetnének ki, tantárgyak és évfolyamok szerint kategorizálva.
Nem csak fejlesztené a diákokat, hanem a tesztek sikeres elvégzésével jutalmakat kaphatnak, amik arra ösztönöznék őket, hogy tanuljanak, és még többet gyakoroljanak.
Emellett még tartalmazna egy rangsort, ami iskolákra lenne bontva, és lehetne egymással versenyezni, ez pedig azoknak nagyon jó hatással lehet a teljesítményükre, akikben megvan a versenyszellem.

Az alkalmazás használatához mindössze regisztrációra van szükség.

## 1.2 Vágyálomrendszer

+ Precíz, igényes, figyelemfelkeltő és színes megjelenés az elképzelés
+ Mivel diákokat szólít meg elsősorban, fontos a színvilág és a könnyen kezelhetőség
+ Mindenképp reszponzív felület szükséges, minden felbontásban jól használható legyen az alkalmazás, mivel iOS-en, Androidon és webes felületen is alkalmazni fogjuk
+ Felhasználóbarát, praktikus, könnyen kezelhető alkalmazás fejlesztése
+ Gamifikált megközelítést alkalmazunk, ezért szükség van olyan funkciókra, elemekre, amik ennek eleget tesznek
+ A fent említett operációs rendszereken kívül elvárás az is, hogy különböző böngészőkben is működőképes legyen
+ Játékos megközelítés jellemezze, amihez a kinézetnek igazodnia kell
+ Frissítés és karbantartás heti rendszerességgel

## 1.3 Jelenlegi üzleti folyamatok

Manapság sok oldal és applikáció van, aminek az a célja, hogy fel tud készíteni érettségire. Ezen termékekből rengeteg van, de egyik sem képes a tananyagokat egybe hozni. Külön-külön akarják ábrázolni a feladatokat. Csak matekot, csak informatikát vagy csak fizikát akarnak megtanítani, viszont így mi lesz a többi résszel az érettségin? 
Mi erre hozzuk a megoldást. Nem kell 26 különböző applikációt letölteni készülékeinkre, csak egyet.

## 1.4 Igényelt üzleti folyamatok

- Online felület
- Felhasználói fiók létrehozása, módosítása
- Tesztek kilistázása kategóriák (osztályok, tantárgyak) szerint
- Tesztek kitöltése
- Jutalomrendszer
- Rangsor
- Szintek

## 1.5 Követelmény lista

- Reszponzív felület
- Játékos, színes UI
- Adatbázis használata:
  - felhasználók,
  - tananyagok,
  - válaszok eltárolása
- Könnyű nyomonkövethetőség az előrelépésekben
  - Hol tart a tesztekben?
  - Jutalmak
  - Szintlépések
  - Rangsor iskolák szerint
- Webes felületen, Androidon és iOS-en is elérhető legyen

## 1.6 Rendszerre vonatkozó szabályok

- A web felület: html/css/javascript. 
- A képek jpeg és png formátumúak lehetnek. 
- A rendszer legyen intuitív, egyértelmű
- A rendszer bíztosítsa a kérdőívet kitöltő személy teljes anonimítását
