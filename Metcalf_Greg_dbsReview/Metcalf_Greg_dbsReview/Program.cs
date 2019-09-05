using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Data;
using MySql.Data.MySqlClient;

namespace Metcalf_Greg_dbsReview
{
    class Program
    {
        MySqlConnection _conn = null;
        string city;

        static void Main(string[] args)
        {
            Program instance = new Program();

            instance._conn = new MySqlConnection();
            instance.Connect();

            //Decleare a MySQL Data Reader
            MySqlDataReader rdr = null;

            instance.city = Validations.StringValidation("Enter a city to check the weather. (ie. Orlando): ");

            //Query statement
            string stm = "select temp, pressure, humidity from weather where city = @city limit 1;";
            
            // Prepare SQL Statement
            MySqlCommand cmd = new MySqlCommand(stm, instance._conn);

            //Set the city to the user input for the query
            cmd.Parameters.AddWithValue("@city", instance.city);
            
            //Execute SQL statement
            rdr = cmd.ExecuteReader();

            //If the query returns a result, it will display the info
            if (rdr.HasRows == true)
            {
                while (rdr.Read())
                {
                    //Display weather data
                    Console.WriteLine($"\n\nCity:  {instance.city}\n" +
                                      $"Temperature:  {rdr.GetDecimal(0)}\n" +
                                      $"Pressure:  {rdr.GetDecimal(1)}\n" +
                                      $"Humidity:  {rdr.GetInt32(2)}");
                }
                Utility.PauseBeforeContinue();
            }
            //If the query returns nothing, then display no data message
            else
            {
                Console.WriteLine("No data available for the selected city.");
                Utility.PauseBeforeContinue();
            }
            
        }

        void Connect()
        {
            BuildConnString();

            try
            {
                //Open takes in the connection string and attempts to open
                _conn.Open();
                Console.WriteLine("Connection Successful!");
            }
            catch (MySqlException e)
            {
                string msg = "";
                switch (e.Number)
                {
                    case 0:
                        {
                            msg = e.ToString();
                            break;
                        }
                    //1042 error arises if something about the connection string is off halting the connection
                    case 1042:
                        {
                            msg = "Cannot resolve host address.\n" + _conn.ConnectionString;
                            break;
                        }
                    //1045 is common error for invalid name or password
                    case 1045:
                        {
                            msg = "Invalid username / password";
                            break;
                        }
                    default:
                        {
                            msg = e.ToString();
                            break;
                        }
                }
                Console.WriteLine(msg);
            }
        } // G2G

        void BuildConnString()
        {
            //Initialize ip variable
            string ip = "";

            //@"c:\VFW\connect.txt"
            //^^Also seen as "c:\\VFW\\connect.txt

            using (StreamReader sr = new StreamReader("c:/VFW/connection.txt"))
            {
                //Reads text file with ip address, sets ip = address
                ip = sr.ReadLine();
            }

            //Builds connection string
            string connString = $"Server={ip};";
            connString += "userid=dbremoteuser;";
            connString += "password=password;";
            connString += "database=example_0619;";
            connString += "port=8889";
            //connString += "SslMode=none";

            //Sets class variable _conn equal to the concatenated string
            _conn.ConnectionString = connString;
        }  // G2G
    }
}
