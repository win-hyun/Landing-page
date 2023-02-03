package dev.shlee.landingpage.controllers;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value = "/")
public class LandingController {
    @RequestMapping(value = "/", method = RequestMethod.GET,
            produces = MediaType.TEXT_HTML_VALUE)
    public ModelAndView getLandingPage() {
        ModelAndView modelAndView = new ModelAndView("project/landingPage");

        return modelAndView;
    }
    @RequestMapping(value = "detailPage", method = RequestMethod.GET,
            produces = MediaType.TEXT_HTML_VALUE)
    public ModelAndView getDetailPage() {
        ModelAndView modelAndView = new ModelAndView("project/detailPage");
        return modelAndView;
    }


}
