package com.redhat;

import java.util.List;

public class ProgressReport {
    private String attendeeName;
    private String displayName;
    private List<WorkshopTask> workshopTasks;

    public ProgressReport() {
    }

    public ProgressReport(String attendeeName, String displayName, List<WorkshopTask> workshopTasks) {
        this.attendeeName = attendeeName;
        this.displayName = displayName;
        this.workshopTasks = workshopTasks;
    }

    public String getDisplayName() {
        return this.displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public String getAttendeeName() {
        return this.attendeeName;
    }

    public void setAttendeeName(String attendeeName) {
        this.attendeeName = attendeeName;
    }

    public List<WorkshopTask> getWorkshopTasks() {
        return this.workshopTasks;
    }

    public void setWorkshopTasks(List<WorkshopTask> workshopTasks) {
        this.workshopTasks = workshopTasks;
    }

    public ProgressReport attendeeName(String attendeeName) {
        setAttendeeName(attendeeName);
        return this;
    }

    public ProgressReport workshopTasks(List<WorkshopTask> workshopTasks) {
        setWorkshopTasks(workshopTasks);
        return this;
    }

    @Override
    public String toString() {
        return "{" +
            " attendeeName='" + getAttendeeName() + "'" +
            ", workshopTasks='" + getWorkshopTasks() + "'" +
            "}";
    }

}
