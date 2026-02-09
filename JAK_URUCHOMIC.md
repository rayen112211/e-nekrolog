# 🚀 JAK URUCHOMIĆ PROTOTYP E-NEKROLOGU

## ✅ NAJŁATWIEJSZA METODA - Podwójne kliknięcie

1. **Znajdź plik:** `START_PROTOTYPE.bat` (w głównym folderze projektu)
2. **Kliknij dwukrotnie** na ten plik
3. **Otworzy się okno** z procesem startowania
4. **Przeglądarka otworzy się automatycznie** na http://localhost:3000

Gotowe! 🎉

---

## 📋 ALTERNATYWNA METODA - Ręczne uruchomienie

### Krok 1: Otwórz Command Prompt (CMD)

**Opcja A - Szybka droga:**
1. Naciśnij `Windows + R` na klawiaturze
2. Wpisz: `cmd`
3. Naciśnij `Enter`

**Opcja B - Przez menu Start:**
1. Kliknij przycisk **Start** (lewy dolny róg)
2. Wpisz: `cmd` lub `wiersz polecenia`
3. Kliknij **Command Prompt** (NIE PowerShell!)

### Krok 2: Przejdź do folderu projektu

W oknie CMD wpisz:
```
cd c:\Users\azizi\Downloads\funrual-website-main\frontend
```
Naciśnij `Enter`

### Krok 3: Uruchom serwer

Wpisz:
```
npm start
```
Naciśnij `Enter`

### Krok 4: Czekaj

- Kompilacja może zająć 10-30 sekund
- Przeglądarka otworzy się automatycznie
- Jeśli nie - otwórz ręcznie: http://localhost:3000

---

## 🎨 TESTOWANIE FUNKCJI PROTOTYPU

### 1. Tworzenie Nekrologu
- Kliknij **"Utwórz e-nekrolog"** na stronie głównej
- Przejdź przez 4 kroki:
  - **Krok 1:** Dane osobowe zmarłego
  - **Krok 2:** Informacje o pogrzebie i stypie (włącz RSVP!)
  - **Krok 3:** Branding domu pogrzebowego (opcjonalne)
  - **Krok 4:** **Wybierz jeden z 4 pięknych motywów!**

### 2. Zobacz E-Nekrolog
- Zobaczysz wybrany motyw zastosowany do całej strony
- Wszystkie kolory i tła są dynamiczne
- Jeśli dodałaś dom pogrzebowy - logo będzie na górze
- Jeśli włączyłaś RSVP - będzie przycisk "Potwierdź przybycie"

### 3. Testuj Funkcje
- ✅ **Dodaj do kalendarza** - przycisk kalendarza
- ✅ **RSVP na stypę** - formularz potwierdzenia
- ✅ **Udostępnij** - kopiowanie linku
- ✅ **Karta pamięci** - przejdź do wersji memorial

### 4. Karta Pamięci
- Zobacz biografię
- Galerię zdjęć
- **Zapal znicz** - licznik się zwiększa
- **Dodaj kondolencję** - formularz
- **Ustaw przypomnienia** - email dla rocznic

---

## 🎨 4 MOTYWY DO WYBORU

1. **Klasyczny Elegancki** 🌹
   - Kremowo-złoty kolor
   - Kwiatowe ozdoby
   - Tradycyjny elegancki wygląd

2. **Nowoczesny Minimalistyczny** ⚪
   - Czysty biały z niebieskim
   - Geometryczne linie
   - Profesjonalny korporacyjny styl

3. **Ogród Kwiatowy** 🌸
   - Pastelowe akwarele
   - Delikatne kwiaty (lilie, róże, lawenda)
   - Spokojny ogrodowy klimat

4. **Spokojne Niebo** ☁️
   - Błękitny gradient nieba
   - Gołąb w locie
   - Duchowy i uspokajający

**Każdy motyw zmienia:**
- Kolory tła (gradienty)
- Kolory tekstu i przycisków
- Obramowania kart
- Ikony i akcenty

---

## ❗ ROZWIĄZYWANIE PROBLEMÓW

### Problem: "npm nie jest rozpoznawane"
**Rozwiązanie:** Node.js nie jest zainstalowany
- Pobierz: https://nodejs.org/
- Zainstaluj wersję LTS
- Uruchom ponownie CMD

### Problem: Błędy podczas npm install
**Rozwiązanie:** Użyj flagi legacy:
```
npm install --legacy-peer-deps
```

### Problem: Port 3000 zajęty
**Rozwiązanie:** 
- Zamknij inne aplikacje używające portu 3000
- Lub wybierz inny port kiedy zapyta

### Problem: Strona nie ładuje się
**Rozwiązanie:**
1. Sprawdź czy w CMD widać: "Compiled successfully!"
2. Odśwież przeglądarkę (Ctrl + F5)
3. Wyczyść cache przeglądarki

### Problem: PowerShell blokuje skrypty
**Rozwiązanie:** 
- **NIE używaj PowerShell!**
- Użyj Command Prompt (CMD) jak opisano powyżej
- Lub kliknij dwukrotnie START_PROTOTYPE.bat

---

## 📱 JAK ZATRZYMAĆ SERWER

W oknie CMD gdzie działa serwer:
- Naciśnij `Ctrl + C`
- Potwierdź "Y" jeśli zapyta
- Lub po prostu zamknij okno CMD

---

## 🌐 LINKI W PROTOTYPIE

- **Strona główna:** http://localhost:3000/
- **Tworzenie nekrologu:** http://localhost:3000/create-nekrolog
- **Podgląd e-nekrologu:** http://localhost:3000/e-nekrolog
- **Karta pamięci:** http://localhost:3000/karta-pamieci

---

## ✨ CO POKAZAĆ KLIENTOWI

### Główne funkcje do zaprezentowania:

1. **Wybór motywu** - pokaż wszystkie 4 opcje
2. **Formularz krok po kroku** - intuicyjna nawigacja z paskiem postępu
3. **Funkcja B2B** - dodawanie logo domu pogrzebowego
4. **RSVP na stypę** - potwierdzanie obecności przez gości
5. **Dynamiczne motywy** - jak kolory zmieniają wszystko
6. **Przypomnienia rocznicowe** - formularz email na karcie pamięci
7. **Kondolencje** - dodawanie wiadomości od znajomych
8. **Wirtualne znicze** - interaktywna funkcja

### Wyróżniki vs eklepsydra.pl:

✅ **Proste i estetyczne** - 4 piękne motywy  
✅ **Self-service** - klient sam wszystko tworzy  
✅ **B2B gotowe** - domy pogrzebowe mogą dodać logo  
✅ **RSVP na stypę** - unikalna funkcja  
✅ **Nowoczesny UX** - formularz krok po kroku  

---

## 📞 PYTANIA?

Jeśli coś nie działa:
1. Upewnij się że Node.js jest zainstalowany
2. Używaj CMD (nie PowerShell)
3. Użyj START_PROTOTYPE.bat dla łatwiejszego startu
4. Sprawdź czy wszystkie kroki są wykonane po kolei

**Prototype jest gotowy do pokazania klientowi! 🎉**
