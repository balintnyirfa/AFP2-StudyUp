# Funckionális specifikációk

## 2.1 Bevezetés

A StudyUp-al azt szeretnénk elérni, hogy minél több diák ezt használva, nagyobb motivációval tanuljon esetleg meg is szeretve azt.
A játékos, színes felhasználói felületével szeretnénk ösztönözni a felhasználókat, hogy a mi alkalmazásunkat használják.
A tananyagok sikeres elvégzésével jutalmakat kaphatnak a diákok.

- Regisztráció szükséges
- Kiválasztható tananyagok közül lehet válogatni, melyek kategóriákra vannak bontva
- Igényes megjelenés

## 2.2 Feltételek

A weboldal és az aplikáció a HTML programozási nyelven lesz programozva és a funkciók a JavaScriptben lesznek írva. A React Native JavaSript keretrendszert használjuk. Az adatbázis Firebase-ben lesznek eltárolva, mely továbbá a szoftver biztosít 100 alap felhasználót és 5 GB Cloud Service-t.

## 2.3 Használati esetek

3 szerepkört határozhatunk meg: az ***admint***, a ***regisztrált felhasználót*** és a ***vendéget***.

**Admin:**
- hozzáfér a felhasználók adatbázisához
- hozzáfér a tesztek adatbázisához
- módosítani, törölni tudja a teszteket
- látja a ranglistát

**Felhasználó:**
- tud teszteket kitölteni
- tud saját adatokat módosítani (jelszó, profilkép)
- látja a ranglistát
- be tud kerülni a ranglistába
- tud jelvényeket, jutalmakat szerezni a sikeresen kitöltött tesztek segítségével

**Vendég:**
- regisztráció szükséges az alkalmazás használatához

## 2.4 Forgatókönyvek

Kérdőíveket csak beregisztrált felhasználó tudja elérni és kitölteni, vendégként nem használhatja az alkalmazást. A felhasználó nem módosíthatja a már létrehozott kvízeket, valamint nem is adhat hozzá újat, ezt csak az admin teheti meg.
