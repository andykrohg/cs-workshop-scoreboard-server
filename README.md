# Cloud Services Workshop Scoreboard - Server
This repository houses the server-side components for the **cloud services workshop scoreboard**, which displays user progress for workshop tasks.

It is composed of a quarkus resteasy backend in `src/main/java` and a pattern fly/reactjs frontend in `src/main/webapp`.

## Running
Clone this repository, and `cd` into it:
```
git clone https://github.com/andykrohg/cs-workshop-scoreboard-server.git
cd cs-workshop-scoreboard-server
```

To start the backend in dev mode, run:
```
mvn quarkus:dev
```

To start the frontend in dev mode, open a new terminal, and run:
```
cd src/main/webapp
npm run start:dev
```
The app should open at http://localhost:3000 in your browser.

## Building
```
mvn clean package
java -jar target/quarkus-app/quarkus-run.jar
```
