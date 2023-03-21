# OCP4 Getting Started Workshop Scoreboard - Server
This repository houses the server-side components for the **OCP Getting Started scoreboard**, which displays live updates of user progress in the [OCP4 Getting Started workshop](https://demo.redhat.com/catalog?search=ocp4+getting&item=babylon-catalog-prod%2Fsandboxes-gpte.ocp4-getting-started-wksp.prod). This is intended to serve not only as an accountability measure to ensure everyone's engaged, but also as a *gamification element* to keep the workshop fun and competitive.

It is composed of a quarkus resteasy backend in `src/main/java` and a patternfly/reactjs frontend in `src/main/webapp`. It looks like this:

![Server View](images/server_view.png)

## Running on OpenShift
Run the commands below to deploy your scoreboard server to OpenShift. Once it's running, present the scoreboard on the screen to track progress as participants make their way through the labs.
```bash
oc new-app quay.io/akrohg/cs-workshop-scoreboard-server:ocp4-getting-started
oc expose svc/cs-workshop-scoreboard-server

# Get the route to the server
oc get route cs-workshop-scoreboard-server
```

Once the server is deployed, you'll need to deploy a **telemetry agent** to your cluster to continually report on participants' status. You'll need:
* The URL of your Scoreboard Server, and
* Instructions for deploying the agent, which can be found [here](https://github.com/andykrohg/cs-workshop-scoreboard-client/tree/ocp4-getting-started#ocp4-getting-started-workshop-scoreboard---client).

## Want to use this scoreboard for a different workshop?
Check out the development guide [here](DEVELOPMENT.md).
