# Konwerter walut z wykorzystaniem API NBP.pl
To prosta aplikacja internetowa napisana w języku JavaScript(ES6), która umożliwia konwersję walut przy użyciu publicznego API <http://api.nbp.pl/>. Aplikacja została stworzona z wykorzystaniem klas i frameworka Bootstrap.

## Instalacja i uruchomienie
1. Sklonuj ten repozytorium lub pobierz go jako archiwum;

<pre>
```
git clone https://github.com/ilia-bielousov/konwerter-walut
```
</pre>

2. Zainstaluj wymagane zależności projektu, korzystając z menedżera pakietów npm (Node Package Manager). W terminalu wykonaj polecenie npm install, aby zainstalować wszystkie wymagane moduły zdefiniowane w pliku package.json;
3. Otwórz plik index.html w dowolnej nowoczesnej przeglądarce internetowej;

## Korzystanie
1. Otwórz aplikację w przeglądarce internetowej;
2. Wpisz kwotę w polu "input pierwszym lub drugim" i wybierz walutę źródłową z rozwijanej listy. Standardowa walute dla pierwszego input to USD, drugiegi PLN. Mozesz wybrac walute z rozwijanej listy (ograniczona liczby walut, ze wzgledu na korzystania z API tabela C);
3. Wynik konwersji zostanie wyświetlony automatycznie na przeciwnym polu "input". 
4. Dodatkowo po prawej stronie jest grafik walutowy oraz tabela. Grafik pokazuje zaleznosc wybranych walut w ciagu miesiaca, a tabela kurs walut w wybrany dzien;

## Cechy
- Konwerter walut korzysta z danych pobranych z publicznego API NBP.pl.
- Waluta źródłowa i waluta do konwersji są wybierane z listy pobranej z API.
- Aplikacja automatycznie aktualizuje listę walut, korzystając z zapytań do API przy każdym wczytaniu strony.
- Wyniki konwersji są zaokrąglane do dwóch miejsc po przecinku.
- Wykorzystany jest framework Bootstrap w celu poprawy interfejsu użytkownika.

## Technologie
- HTML
- SCSS
- Bootstrap
- ES6 native
- Fetch
- gulp + webpack
- git

## API NBP.pl
Aby uzyskać aktualne kursy walut, aplikacja korzysta z publicznego API NBP.pl. Więcej informacji na temat dostępnych żądań i formatu danych można znaleźć w dokumentacji API NBP.pl.

## Licencja
Ten projekt jest udostępniony na licencji ISC. 

:smile:
:smile:
:smile: