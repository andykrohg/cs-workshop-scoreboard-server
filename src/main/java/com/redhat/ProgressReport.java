package com.redhat;

import java.util.List;

public class ProgressReport {
    private String attendeeName;
    private List<String> statuses;

    public ProgressReport() {
    }

    public String getAttendeeName() {
        return this.attendeeName;
    }

    public void setAttendeeName(String attendeeName) {
        this.attendeeName = attendeeName;
    }

    public List<String> getStatuses() {
        return this.statuses;
    }

    public void setStatuses(List<String> statuses) {
        this.statuses = statuses;
    }    
}
