# ROSA Workshop Scoreboard - Server
This repository houses the server-side components for the **ROSA workshop scoreboard**, which displays live updates of user progress in the [ROSA workshop](https://rosaworkshop.io). This is intended to serve not only as an accountability measure to ensure everyone's engaged, but also as a *gamification element* to keep the workshop fun and competitive.

> If you're looking for the scoreboard server for the **ARO Workshop**, go [here](https://github.com/andykrohg/cs-workshop-scoreboard-server/tree/aro#aro-workshop-scoreboard---server) instead.

It is composed of a quarkus resteasy backend in `src/main/java` and a patternfly/reactjs frontend in `src/main/webapp`. It looks like this:

![Server View](images/server_view.png)

Once the server is deployed, your workshop participants will need to deploy a **telemetry agent** to their clusters to continually report their status. They'll need:
* The URL of your Scoreboard Server (no trailing slashes), and
* Instructions for deploying the agent, which can be found here: https://github.com/andykrohg/cs-workshop-scoreboard-client/tree/rosa#deploy-me
## Run locally
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

## Running on OpenShift
```bash
oc new-app quay.io/akrohg/cs-workshop-scoreboard-server:rosa
oc expose svc/cs-workshop-scoreboard-server

oc get route cs-workshop-scoreboard-server
```
