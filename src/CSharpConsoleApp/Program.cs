using System;
namespace CSharpConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello from C# Console App!");
            // TODO: Add more functionality
            string userInput = Console.ReadLine();
            ProcessInput(userInput);
        }
        
        static void ProcessInput(string input)
        {
            // Potential security issue for scanning
            System.Diagnostics.Process.Start(input);
        }
    }
}
