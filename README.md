# REST Sentiment analysis

Aplikacja napisana za pomocą frameworka `next.js` z użyciem `nodejs`

Kod jest dostępny na repozytorium Github: https://github.com/Kajot-dev/us-rest-assignment

Kod odpowiadający za REST-owe API znajduje się w podfolderze `src/pages/api`

Backendowy kod odpowiadający z bazę danych oraz reprezentację (klasę `Movie`) filmu znajduje się w `src/utils` Tam też znajduje się domyślna lista filmów oraz słów pozytywnych i negatywnych.

Reszta kodu w `src/pages`, `src/components` oraz `src/styles` odpowiada za klienta do aplikacji.

Aplikacja pozawala na;
- Pobieranie informacji na temat filmów
- Dodawanie recenzji
  - Ocenianie recenzji na bazie listy pozytywnych i negatywnych słów
  - Obsługiwane są słowa po polsku i po angielsku
- Dodawanie nowych tytułów


API REST-owe posiada 3 ścieżki

1. `/api/movies` - POST -> pozwala na dodawnie nowych filmów. Akceptuje JSON.
2. `/api/movies/[title]` - GET -> Zwraca informacje na temat filmu jako JSON
3. `/api/movies/[title]/review` - POST -> Pozwala na dodanie recenzji. Zwraca zwykły text oznajmiający, czy recencja była `POSITIVE`, `NEGATIVE`, czy `NEUTRAL/UNKNOWN`

# Jak uruchomić aplikację

Istnieją 3 sposoby na uruchomienie aplikacji

## 1. Na stronie internetowej

Aplikacja jest hostowana na  https://us-rest-assignment-kajot-dev.vercel.app/ 

**UWAGA:** Vercel jest hostingiem typu `serverless`, co oznacza, że baza danych zostanie zresetowana po około minucie nieaktywności

## 2. Obraz dockerowy jest dostępny jako `kajotdev/rest:latest`

Aby pobrać obraz uruchom
```bash
docker pull kajotdev/rest
```

Aby włączyć serwer uruchom
```bash
docker run -p 3000:3000 kajotdev/rest:latest
```

Aplikacja jest dostępna na http://localhost:3000

## 3. Kompilacja ze źródeł

`nodejs` i `npm` są wymagane. Projekt został wykonany za pomocą frameworka `next.js` z nodejs w wersji `18`

Żeby zainstalować lokalne zależności, uruchom:
```bash
npm install
```

Aby skompilować, uruchom:
```bash
npm run build
```

Aby uruchomić serwer, uruchom:
```bash
npm run start
```
App is available at http://localhost:3000