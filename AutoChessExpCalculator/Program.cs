using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AutoChessExpCalculator
{
    /// <summary>
    /// Description: Calculator for calculating "Dota 2 AutoChess" level up cost
    /// Tech: .Net 4.6.2 Console App. Currently it is difficult to generate standalone executables in .Net Core
    /// </summary>
    class Program
    {
        static void Main(string[] args)
        {
            while (true)
            {

                Console.WriteLine("Current XP:");
                var currentXp = float.Parse(Console.ReadLine());

                Console.WriteLine("Target XP:");
                var targetXp = float.Parse(Console.ReadLine());

                var requiredGold = Math.Ceiling((targetXp - currentXp) / 4) * 5;
                var waitTurns = (targetXp - currentXp) % 4;

                Console.WriteLine();
                Console.WriteLine("-------");
                Console.WriteLine($"You need to spend: {requiredGold} gold");

                if (waitTurns != 0)
                {
                    var turns = waitTurns == 1 ? "turn" : "turns";
                    Console.WriteLine($"Or wait {waitTurns} {turns} and pay {requiredGold - 5} gold");
                }
                
                Console.WriteLine("-------");

                Console.WriteLine();
                Console.WriteLine("Press any key to clear the console...");
                Console.ReadKey();
                Console.Clear();
            }
        }
    }
}
