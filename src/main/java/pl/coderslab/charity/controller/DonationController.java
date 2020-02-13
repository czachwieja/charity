package pl.coderslab.charity.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import pl.coderslab.charity.model.Donation;
import pl.coderslab.charity.repository.CategoryRepository;

@Controller
public class DonationController {

    private CategoryRepository categoryRepository;

    @Autowired
    public DonationController(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @GetMapping("/form")
    public String giveDonationsForm(Model model) {
        model.addAttribute("allCategories", categoryRepository.findAll());
        model.addAttribute("donation", new Donation());
        return "form";
    }

    @ResponseBody
    @PostMapping("/form")
    public String formConfirmation(@ModelAttribute Donation donation) {
        return "ok";
    }

}
