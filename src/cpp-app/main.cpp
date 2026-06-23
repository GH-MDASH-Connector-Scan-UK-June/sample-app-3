#include <iostream>
#include <cstring>
#include <cstdlib>

int main() {
    char buffer[10];
    char input[100];
    
    std::cout << "Enter data: ";
    std::cin >> input;
    
    // Buffer overflow vulnerability
    strcpy(buffer, input);
    
    // Command injection
    system(input);
    
    return 0;
}
