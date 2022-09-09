# Scoreboard Server Development Guide

## Getting started
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

## Customizing modules and tasks
You can customize the workshop modules that appear in the left navigation pane, as well as the tasks that appear within each module, by modifying `src/main/webapp/src/module-definitions/modules.json`. Once you save changes, your browser tab should refresh with the updates automatically. Here's what our ROSA one looks like, with comments added to explain each field:

```json
[
    {
        "id": "0", //some string-based identifier to uniquely identify this module
        "name": "Getting started with ROSA", //the label that will appear in the scoreboard UI
        "path": "/", //the context path at which the server should host this module. the first module should live at the root to avoid 404s
        "tasks": [ //labels for the tasks within this module
            "Cluster ready",
            "Configure IDP",
            "Create a User",
            "Create a MachinePool",
            "Add node labels",
            "Setup Autoscaling"
        ]
    },
    {
        "id": "1",
        "name": "Deploy the application",
        "path": "/deploy-the-application",
        "tasks": [
            "Deploy backend service",
            "Deploy frontend service",
            "Make the app malfunction",
            "Create a file using the app",
            "Create a Horizontal Pod Autoscaler",
            "Install the Cluster Logging Addon Service",
            "Create an s2i deployment",
            "Setup a webhook"
        ]
    }
]
```

You can also customize the title and logo that appear in the top navbar by modifying `src/main/webapp/src/app/AppLayout/AppLayout.tsx`. Once you're satisfied with your changes, proceed below to build a container.

## Building
1. First, run a maven build:
   ```bash
   mvn clean package
   ```
2. Then, build a container:
   ```bash
   podman build --platform linux/amd64 -t scoreboard-server . -f src/main/docker/Dockerfile.jvm
   ```
3. Now you're ready to push your new image to quay and substitute it for the OpenShift deployment [here](https://github.com/andykrohg/cs-workshop-scoreboard-server#running-on-openshift)
