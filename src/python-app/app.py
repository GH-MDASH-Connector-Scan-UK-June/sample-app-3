import os
import subprocess

def main():
    print("Hello from Python!")
    user_input = input("Enter command: ")
    # Command injection vulnerability
    os.system(user_input)
    
def unsafe_eval(data):
    # Eval vulnerability
    return eval(data)

if __name__ == "__main__":
    main()
