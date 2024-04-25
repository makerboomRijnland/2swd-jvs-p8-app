# Fitness Tracker

## Installatie
Om deze Express-applicatie te laten draaien, volgt u de volgende stappen:

### Node.js
Installeer Node.js: Node.js is een JavaScript-runtime die nodig is om deze applicatie te draaien. U kunt Node.js downloaden en installeren vanaf de officiële website: https://nodejs.org/. Volg de instructies op de website om de installatie te voltooien.

### Clone Repository
Kloon de repository: Kloon de repository naar uw lokale machine met behulp van Git. Dit kan door het volgende commando in uw terminal uit te voeren: `git clone <repository-url>`.

### Packages installeren
Open het project in jouw editor en open een terminal in dezelfde map.

Installeer de afhankelijkheden: Voer het commando `npm install` uit in de terminal. Dit commando leest het package.json bestand en installeert alle benodigde afhankelijkheden voor het project.

### Start de applicatie
Start de applicatie: Voer het commando `npm start` uit in de terminal. Dit start de Express-server op de poort die is gedefinieerd in het [app.js](command:_github.copilot.openSymbolInFile?%5B%22app.js%22%2C%22app.js%22%5D "app.js") bestand (standaard 3000).

## Mappen- en bestandenstructuur
Wat betreft de structuur van de bestanden en mappen:

### app.js
[app.js](command:_github.copilot.openSymbolInFile?%5B%22app.js%22%2C%22app.js%22%5D "app.js"): Dit is het hoofdbestand van de applicatie. Het stelt de Express-server in en bevat de middleware en routes voor de applicatie.

### package.json
package.json: Dit bestand bevat metadata over het project en de lijst van afhankelijkheden die nodig zijn om het project te draaien.

### routes/
routes/: Deze map bevat de routebestanden voor de applicatie. In dit geval is er een api.js bestand dat de API-routes voor de applicatie definieert.

### static/
static/: Deze map bevat statische bestanden die door de applicatie worden geserveerd, zoals HTML, CSS en JavaScript-bestanden.

### .gitignore
.gitignore: Dit bestand bevat een lijst van bestanden en mappen die niet moeten worden bijgehouden door Git.

## ORM
- [ActiveRecord](https://www.npmjs.com/package/activerecord)
- [TypeORM](https://typeorm.io/)