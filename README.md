# Workshop Scoreboard - Server
This directory houses the server side of the **workshop scoreboard**. This is intended to serve not only as an accountability measure to ensure everyone's engaged, but also as a *gamification element* to keep the workshop fun and competitive.

It is composed of a quarkus resteasy backend in `src/main/java` and a patternfly/reactjs frontend in `src/main/webapp`. It looks like this:

![Server View](images/server_view.png)

## Running on OpenShift
Run the commands below to deploy your scoreboard server to OpenShift. Once it's running, present the scoreboard on the screen to track progress as participants get their agents deployed.
```bash
oc new-app quay.io/akrohg/workshop-scoreboard-server -e WORKSHOP_NAME=experience-openshift-virtualization
oc expose svc/workshop-scoreboard-server

# Get the route to the server
oc get route workshop-scoreboard-server
```

## Deploy the Client
Once the server is running, make note of the Server URL and deploy the client [here](https://github.com/andykrohg/workshop-scoreboard-client?tab=readme-ov-file#deploy-me).

## Running with Podman
```bash
podman run -it -p 8080:8080 -e WORKSHOP_NAME=experience-openshift-virtualization quay.io/akrohg/workshop-scoreboard-server
```

## Want to use this scoreboard for a different workshop?
Check out the development guide [here](DEVELOPMENT.md).
