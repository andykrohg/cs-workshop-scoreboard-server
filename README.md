# A Practical Introduction to Container Security Scoreboard - Server
This repository houses the server-side components for the **Practical Container Security Workshop scoreboard**, which displays live updates of user progress in the Practical Container Security workshop. This is intended to serve not only as an accountability measure to ensure everyone's engaged, but also as a *gamification element* to keep the workshop fun and competitive.

It is composed of a quarkus resteasy backend in `src/main/java` and a patternfly/reactjs frontend in `src/main/webapp`. It looks like this:

![Server View](images/server_view.png)

Once the server is deployed, your workshop participants will need to deploy a **telemetry agent** to their bastions to continually report their status. They'll need:
* The URL of your Scoreboard Server, and
* Instructions for deploying the agent, which can be found here: https://github.com/andykrohg/cs-workshop-scoreboard-client/tree/practical-container-security#deploy-me

## Running on OpenShift
Run the commands below to deploy your scoreboard server to OpenShift. Once it's running, present the scoreboard on the screen to track progress as participants get their agents deployed.
```bash
oc new-app quay.io/akrohg/cs-workshop-scoreboard-server:practical-container-security
oc expose svc/cs-workshop-scoreboard-server

# Get the route to the server
oc get route cs-workshop-scoreboard-server
```

## Running with Podman
```bash
podman run -it -p 8080:8080 quay.io/akrohg/cs-workshop-scoreboard-server:practical-container-security
```

## Want to use this scoreboard for a different workshop?
Check out the development guide [here](DEVELOPMENT.md).
