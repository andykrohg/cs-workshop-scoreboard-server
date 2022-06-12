package com.redhat;

import java.util.Arrays;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("/progress-reports")
public class ProgressReportResource {

    @GET

    public List<ProgressReport> getReports() {
        ProgressReport akrohg = new ProgressReport();
        akrohg.setAttendeeName("akrohg");
        akrohg.setStatuses(Arrays.asList("success", "success", "success", "pending", "pending"));

        ProgressReport krain = new ProgressReport();
        krain.setAttendeeName("krain");
        krain.setStatuses(Arrays.asList("success", "success", "pending", "pending", "pending"));

        return Arrays.asList(akrohg, krain);
    }
}