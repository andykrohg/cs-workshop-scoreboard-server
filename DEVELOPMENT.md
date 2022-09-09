# Scoreboard Server Development Guide
Clone this repository, and `cd` into it:
```
git clone https://github.com/andykrohg/cs-workshop-scoreboard-server.git --branch rosa
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
The app should open at http://localhost:9000 in your browser.

## Building
```bash
# Build a jar
mvn clean package

# Run locally on http://localhost:8080
java -jar target/quarkus-app/quarkus-run.jar

# Or run a container build
podman build -t scoreboard-server . -f src/main/docker/Dockerfile.jvm
```