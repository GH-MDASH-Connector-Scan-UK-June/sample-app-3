package main

import (
    "fmt"
    "net/http"
    "os/exec"
)

func main() {
    http.HandleFunc("/exec", execHandler)
    fmt.Println("Server starting on :8080")
    http.ListenAndServe(":8080", nil)
}

// Command injection vulnerability
func execHandler(w http.ResponseWriter, r *http.Request) {
    cmd := r.URL.Query().Get("cmd")
    out, _ := exec.Command("sh", "-c", cmd).Output()
    w.Write(out)
}
