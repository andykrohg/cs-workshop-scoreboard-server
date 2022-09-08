package com.redhat;

import java.util.Arrays;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;

@Path("/progress-reports")
public class ProgressReportResource {

    private Map<String, ProgressReport> reports;

    public ProgressReportResource() {
        this.reports = new HashMap<String, ProgressReport>();
    }

    @GET
    public List<ProgressReport> getReports(@QueryParam("module") String module) {
        return this.reports.values().stream()
            .map(report -> new ProgressReport(report.getAttendeeName(), report.getWorkshopTasks().stream().filter(workshopTask -> workshopTask.getModule().equals(module)).collect(Collectors.toList())))
            .sorted(new Comparator<ProgressReport>() {
                @Override
                public int compare(ProgressReport o1, ProgressReport o2) {
                    return Long.compare(
                        o2.getWorkshopTasks().stream().filter(status -> status.equals("success")).count(), 
                        o1.getWorkshopTasks().stream().filter(status -> status.equals("success")).count());
                }
            })
            .collect(Collectors.toList());
    }

    @PUT
    public void publishReport(ProgressReport progressReport) {
        this.reports.put(progressReport.getAttendeeName(), progressReport);
    }
}