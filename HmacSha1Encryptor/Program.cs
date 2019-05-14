using System;
using System.Security.Cryptography;
using System.Text;

namespace HmacSha1Encryptor
{
    class Program
    {
        static void Main(string[] args)
        {
            WriteLine("Please provide the the string to encrypt:", false);
            var input = Console.ReadLine();

            WriteLine("Please provide the key:", true);
            var key = Console.ReadLine();

            var output = Encrypt(input, key);

            WriteLine("Output", true);
            WriteLine(output, false);
            Console.ReadKey(false);
        }

        static void WriteLine(string output, bool addBlankLine)
        {
            var trimmedOutput = output.Trim();

            if(addBlankLine)
                Console.WriteLine();

            Console.WriteLine(output);
        }

        public static string Encrypt(string input, string key)
        {
            byte[] byteArray = Encoding.ASCII.GetBytes(input);
            var hmacSha1 = new HMACSHA1(Convert.FromBase64String(key));
            var hash = hmacSha1.ComputeHash(byteArray);

            // "X2" format will convert it to UPPERCASE Hex, "x2" to lower
            var result = string.Concat(Array.ConvertAll(hash, x => x.ToString("X2")));

            return result;
        }


    }
}
