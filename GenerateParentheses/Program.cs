using System;
using System.Collections.Generic;
using System.Linq;

namespace GenerateParentheses
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Please enter the number of valid parenthesis");
            var quantity = Int32.Parse(Console.ReadLine());

            var output = new List<string>();

            Brackets(quantity, quantity, output, string.Empty);

            foreach (var result in output)
            {
                Console.WriteLine(result);
            }
        }

        private static void Brackets(int open, int close, List<string> output, string currentResult)
        {
            if (open == 0 && close == 0)
            {
                output.Add(currentResult);
                return;
            }

            if (open > 0)
            {
                Brackets(open - 1, close, output, currentResult + "(");
            }

            if (open < close)
            {
                Brackets(open, close - 1, output, currentResult + ")");
            }
        }
    }
}
