package com.redhat;

import java.util.Arrays;
import java.util.Collections;
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
        // reports.put("akrohg", new ProgressReport("akrohg", Arrays.asList("success", "success", "success", "pending", "pending", "pending"), Arrays.asList()));
        // reports.put("krain", new ProgressReport("krain", Arrays.asList("success", "success", "pending", "pending", "pending", "pending"), Arrays.asList()));
    }

    @GET
    public List<ProgressReport> getReports(@QueryParam("sort") String sort) {
        return this.reports.values().stream()
            .sorted(new Comparator<ProgressReport>() {
                @Override
                public int compare(ProgressReport o1, ProgressReport o2) {
                    if (sort.equals("cluster")) {
                        return Long.compare(
                            o2.getClusterTasks().stream().filter(status -> status.equals("success")).count(), 
                            o1.getClusterTasks().stream().filter(status -> status.equals("success")).count());
                    } else {
                        return Long.compare(
                            o2.getAppTasks().stream().filter(status -> status.equals("success")).count(), 
                            o1.getAppTasks().stream().filter(status -> status.equals("success")).count());
                    }
                }
                
            })
            .collect(Collectors.toList());
    }

    @PUT
    public void publishReport(ProgressReport progressReport) {
        this.reports.put(progressReport.getAttendeeName(), progressReport);
    }
}