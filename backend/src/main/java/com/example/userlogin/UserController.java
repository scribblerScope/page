package com.example.userlogin;

import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    private final List<User> users = new ArrayList<>();

    @PostMapping("/save")
    public String saveUser(@RequestBody User user) {
        users.add(user);
        return "User saved successfully!";
    }

    @GetMapping("/names")
    public List<String> getAllNames() {
        List<String> names = new ArrayList<>();
        for (User user : users) {
            names.add(user.getName());
        }
        return names;
    }
}
