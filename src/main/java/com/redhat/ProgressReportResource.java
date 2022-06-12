package com.redhat;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;

@Path("/progress-reports")
public class ProgressReportResource {

    private Map<String, List<String>> reports;

    public ProgressReportResource() {
        this.reports = new HashMap<String, List<String>>();
        reports.put("akrohg", Arrays.asList("success", "success", "success", "pending", "pending"));
        reports.put("krain", Arrays.asList("success", "success", "pending", "pending", "pending"));
    }

    @GET
    public List<ProgressReport> getReports() {
        return this.reports.entrySet().stream().map(entry -> new ProgressReport(entry.getKey(), entry.getValue())).collect(Collectors.toList());
    }

    @PUT
    public void publishReport(ProgressReport progressReport) {
        this.reports.put(progressReport.getAttendeeName(), progressReport.getStatuses());
    }
}