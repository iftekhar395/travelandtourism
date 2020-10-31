package com.project.traveltourism.controller;

///*
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */

import com.project.traveltourism.repository.ReportRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import java.io.IOException;
import java.io.OutputStream;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.HashMap;
import javax.naming.NamingException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.CrossOrigin;
/**
 *
 * @author User
 */
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@Controller
public class ReportController {
    
//    @RequestMapping(value = "/reportView", method = RequestMethod.GET)
//    public String loadSurveyPg(
//            @ModelAttribute("reportInputForm") Report reportInputForm, Model model) {
//        model.addAttribute("reportInputForm", reportInputForm);
//        return "report";
//    }
    
    @GetMapping("/reportView/{title}")
    public void generateReport(@PathVariable("title") String title, HttpServletRequest request, HttpServletResponse response) throws Exception, IOException, SQLException, NamingException {

        System.out.println("jasper report");

        String reportFileName = "report13";
        
        ReportRepository jrdao = new ReportRepository();
        Connection conn = null;
        try {
            conn = jrdao.getConnection();
            
            HashMap<String, Object> hmParams = new HashMap<String, Object>();
            hmParams.put("title", title);
            
            JasperPrint jasperReport = jrdao.getCompiledFile(reportFileName, hmParams, request);
            
            response.setContentType("application/pdf");
            
            OutputStream out = response.getOutputStream();
            
            JasperExportManager.exportReportToPdfStream(jasperReport, out);

        } catch (SQLException sqlExp) {
            System.out.println("Exception::" + sqlExp.toString());
        } finally {
            if (conn != null) {
                try {
                    conn.close();
                    conn = null;
                } catch (SQLException e) {
                    // TODO Auto-generated catch block
                    e.printStackTrace();
                }

            }

        }
        
    

    
//    @RequestMapping(value = "/reportView", method = RequestMethod.POST)
//    public String generateReport(@ModelAttribute("reportInputForm") Report reportInputForm,HttpServletRequest request,HttpServletResponse response) throws JRException, IOException, SQLException, NamingException {
//        String reportFileName = "report13";
//        ReportRepository jrdao = new ReportRepository();
//        Connection conn = null;
//        try {
//            conn = jrdao.getConnection();
//            String title = reportInputForm.getTitle();
//            HashMap<String, Object> hmParams = new HashMap<String, Object>();
//            hmParams.put("title", title);
//            JasperReport jasperReport = jrdao.getCompiledFile(reportFileName,request);
//
//            jrdao.generateReportPDF(response, hmParams, jasperReport, conn); 
//
//        } catch (SQLException sqlExp) {
//            System.out.println("Exception::" + sqlExp.toString());
//        } finally {
//            if (conn != null) {
//                try {
//                    conn.close();
//                    conn = null;
//                } catch (SQLException e) {
//                    // TODO Auto-generated catch block
//                    e.printStackTrace();
//                }
//
//            }
//
//        }
//
//        return null;
//    }
}
    @GetMapping("/reportview/{custid}")
    public void generateOrderReport(@PathVariable("custid") String custid, HttpServletRequest request, HttpServletResponse response) throws Exception, IOException, SQLException, NamingException {

        System.out.println("jasper report");

        String reportFileName1 = "report14";
        
        ReportRepository jrdao1 = new ReportRepository();
        Connection conn1 = null;
        try {
            conn1 = jrdao1.getConnection();
            
            HashMap<String, Object> hmParams = new HashMap<String, Object>();
            hmParams.put("custid", custid);
            
            JasperPrint jasperReport = jrdao1.getCompiledFile(reportFileName1, hmParams, request);
            
            response.setContentType("application/pdf");
            
            OutputStream out = response.getOutputStream();
            
            JasperExportManager.exportReportToPdfStream(jasperReport, out);

        } catch (SQLException sqlExp) {
            System.out.println("Exception::" + sqlExp.toString());
        } finally {
            if (conn1 != null) {
                try {
                    conn1.close();
                    conn1 = null;
                } catch (SQLException e) {
                    // TODO Auto-generated catch block
                    e.printStackTrace();
                }

            }

        }
    }
    
    @GetMapping("/payment/reportView/{custid}")
    public void generatePaymentReport(@PathVariable("custid") String custid, HttpServletRequest request, HttpServletResponse response) throws Exception, IOException, SQLException, NamingException {

        System.out.println("jasper report");

        String reportFileName1 = "CustomerPayment";
        
        ReportRepository jrdao1 = new ReportRepository();
        Connection conn1 = null;
        try {
            conn1 = jrdao1.getConnection();
            
            HashMap<String, Object> hmParams = new HashMap<String, Object>();
            hmParams.put("custid", custid);
            
            JasperPrint jasperReport = jrdao1.getCompiledFile(reportFileName1, hmParams, request);
            
            response.setContentType("application/pdf");
            
            OutputStream out = response.getOutputStream();
            
            JasperExportManager.exportReportToPdfStream(jasperReport, out);

        } catch (SQLException sqlExp) {
            System.out.println("Exception::" + sqlExp.toString());
        } finally {
            if (conn1 != null) {
                try {
                    conn1.close();
                    conn1 = null;
                } catch (SQLException e) {
                    // TODO Auto-generated catch block
                    e.printStackTrace();
                }

            }

        }
    }
}