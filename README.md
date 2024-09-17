
# fe23-js3-övn1-petra-hastman

Projekt på programmet:
Front end webbutvecklare 400 YH-poäng - Grit Academy  
(2023-2025)

### KURS
JavaScript 3
Övningsuppgift 1 - Bygg och deploya en SPA

### URL
https://knastman.github.io/fe23-js1-mp2-petra-hastman/

---

## Uppgiften

1. Skapa ett git-repo för övningen
Skapa ett nytt git-repo för denna uppgiften. Använd t.ex. GitHub för att göra det tillgängligt på nätet.
Det spelar ingen roll vilket namn du väljer att använda. Klona repot till din dator. Under övningen bör
du regelbundet add, commit och push:a din kod till dit repo på GitHub.
1. Skapa ett git-repo för övningen
Skapa ett nytt git-repo för denna uppgiften. Använd t.ex. GitHub för att göra det tillgängligt på nätet.
Det spelar ingen roll vilket namn du väljer att använda. Klona repot till din dator. Under övningen bör
du regelbundet add, commit och push:a din kod till dit repo på GitHub.

2. Skapa en enkel Single Page Application
Syftet är att lära oss att bygga en enklare SPA utan att använda något tredjepartsbibliotek eller
ramverk. Du skall kunna navigera mellan olika sidor och uppdatera innehållet på i din SPA dynamiskt
utan att webbläsaren laddar om hela sidan.
Skapa en sida som har någon form av sidhuvud, sektion för huvudinnehållet och en sidfot. I
sidhuvudet skapar du en meny med tre länkar; "Hem", "Om oss" och "Kontakt". När sidan laddas
initialt skall "Hem" visas. När någon av länkarna klickas på skall innehållet till dessa laddas dynamiskt
utan att sidan laddas om.
Skapa filer som har innehållet för de tre sidorna "Hem", "Om oss" och "Kontakt". Använd JavaScript
för att hämta dessa filer och visa rätt innehåll beroende på vilken sida/länk som användaren har klickat
på. Visa bara innehåll för en sida åt gången. Laddningen av innehåll kan ta lite tid, visa en spinner (en
bild) under tiden som laddningen pågår.
När användaren klickar på en länk, uppdatera webbläsarens URL-fält så att det är enkelt att se vilken
sida som användaren har klickat på. Du kan undersöka history.pushState() och history.replaceState()
för att åstadkomma detta.

3. Deploya din SPA
Använd en valfri tjänst för att göra din SPA tillgänglig via internet. Det finns flera olika tekniker att göra
detta på t.ex. via FTP, Netlify eller Vercel.
Använd gärna Netlify eller Vercel för att stifta bekantskap med dessa då detta kommer att vara ett
krav i en senare inlämningsuppgift.
Testa att din SPA fortfarande fungerar och att samtliga sidor kan hämtas dynamsikt.
