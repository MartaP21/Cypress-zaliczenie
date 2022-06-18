Automatyczne testy funkcjonalne sklepu internetowego www.stomatologia-medilab.pl.
testy wykonano w wersji cypress 9.7.0
Spełnione wymagania projektu:
- minimum 10 testów automatycznych z co najmniej jedną akcją i asercją - plik: zal.spec.js
- fixtures - przy testach wyszukiwarki produktów - podstawiają wartości do wyszukiwania
- id projektu dla dashboard'u jest skonfigurowane w cypress.json - "projectId": "nzdiyc"
- polecenie uruchamiające nagrywanie do dashboardu:  npx cypress run --record --key ec6ec969-e152-4342-bb66-2a7287b7d07d
- adres dashboardu:  https://dashboard.cypress.io/projects/nzdiyc/ 
- dodane raportowanie: "cypress-mochawesome-reporter": "^3.1.0"
- raport - uruchamianie: npx cypress run --spec "cypress\integration\TestyPB\zal.spec.js" --browser chrome
- raport HTML zapisany: C:\Program Files\WORKSPACE\Cypress-zaliczenie\cypress\report\index.html
- raport video zapisanY; C:\Program Files\WORKSPACE\Cypress-zaliczenie\cypress\videos\1-Testy_PB\zal.spec.js.mp4
- dodano commands.js - 1. zamyka okno z polityką prywatności; 2. sprawdza czy element jest widoczny.
- dodano page object - oddzielny plik z testem odwołującym się do PO - po.spec.js
