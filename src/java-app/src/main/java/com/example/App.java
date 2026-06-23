package com.example;

import java.sql.*;
import java.io.*;

public class App {
    public static void main(String[] args) {
        System.out.println("Hello from Java!");
    }
    
    // SQL Injection vulnerability
    public ResultSet getUser(String username) throws SQLException {
        Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/db");
        Statement stmt = conn.createStatement();
        return stmt.executeQuery("SELECT * FROM users WHERE name = '" + username + "'");
    }
    
    // Path traversal vulnerability
    public String readFile(String filename) throws IOException {
        BufferedReader reader = new BufferedReader(new FileReader("/data/" + filename));
        return reader.readLine();
    }
}
