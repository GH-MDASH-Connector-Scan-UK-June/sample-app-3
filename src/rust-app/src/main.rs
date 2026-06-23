use std::process::Command;
use std::io::{self, BufRead};

fn main() {
    println!("Hello from Rust!");
    let stdin = io::stdin();
    let line = stdin.lock().lines().next().unwrap().unwrap();
    
    // Command injection
    let output = Command::new("sh")
        .arg("-c")
        .arg(&line)
        .output()
        .expect("failed");
        
    println!("{}", String::from_utf8_lossy(&output.stdout));
}
