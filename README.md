# Cloud Services Workshop Scoreboard - Server
This repository houses the server-side components for the **cloud services workshop scoreboard**, which displays user progress for workshop tasks.

It is composed of a quarkus resteasy backend in `src/main/java` and a patternfly/reactjs frontend in `src/main/webapp`. It looks like this:

![Server View](images/server_view.png)

## Run locally
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
oc new-app quay.io/akrohg/cs-workshop-scoreboard-server
oc expose svc/cs-workshop-scoreboard-server

oc get route cs-workshop-scoreboard-server
```
