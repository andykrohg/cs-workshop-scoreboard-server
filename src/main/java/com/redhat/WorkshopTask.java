package com.redhat;

public class WorkshopTask {
    private String module;
    private String status;

    public WorkshopTask() {
    }

    public WorkshopTask(String module, String status) {
        this.module = module;
        this.status = status;
    }

    public String getModule() {
        return this.module;
    }

    public void setModule(String module) {
        this.module = module;
    }

    public String getStatus() {
        return this.status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public WorkshopTask module(String module) {
        setModule(module);
        return this;
    }

    public WorkshopTask status(String status) {
        setStatus(status);
        return this;
    }

    @Override
    public String toString() {
        return "{" +
            " module='" + getModule() + "'" +
            ", status='" + getStatus() + "'" +
            "}";
    }

}
