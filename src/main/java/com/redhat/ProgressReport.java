package com.redhat;

import java.util.List;

public class ProgressReport {
    private String attendeeName;
    private List<String> clusterTasks;
    private List<String> appTasks;

    public ProgressReport() {
    }

    public ProgressReport(String attendeeName, List<String> clusterTasks, List<String> appTasks) {
        this.attendeeName = attendeeName;
        this.clusterTasks = clusterTasks;
        this.appTasks = appTasks;
    }

    public String getAttendeeName() {
        return this.attendeeName;
    }

    public void setAttendeeName(String attendeeName) {
        this.attendeeName = attendeeName;
    }

    public List<String> getClusterTasks() {
        return this.clusterTasks;
    }

    public void setClusterTasks(List<String> clusterTasks) {
        this.clusterTasks = clusterTasks;
    }

    public List<String> getAppTasks() {
        return this.appTasks;
    }

    public void setAppTasks(List<String> appTasks) {
        this.appTasks = appTasks;
    }
    
}
