using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace LinqDataApp
{
    public partial class Form2 : Form
    {
        public Form2()
        {
            InitializeComponent();
            getData();
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }
        private void getData()
        {

            string connetionString;

            SqlConnection conx;
            connetionString = @"Data Source=DESKTOP-LE69RUT\CESIEATS;Initial Catalog=CESI-EATS;User ID=admin;Password=arsenik98";
            conx = new SqlConnection(connetionString);
            conx.Open();
            SqlCommand command;
            SqlDataReader dataReader;
            String sql, Output = "";

            sql = "SELECT * FROM INFORMATION_SCHEMA.TABLES where TABLE_TYPE='BASE TABLE'";

            command = new SqlCommand(sql, conx);
            
            dataReader = command.ExecuteReader();
            while (dataReader.Read())
            {
                tablesCombo.Items.Add((string)dataReader["TABLE_NAME"]);                           
            }

            if (tablesCombo.SelectedItem !=null)
            {
                String selected = this.tablesCombo.GetItemText(this.tablesCombo.SelectedItem);
                MessageBox.Show(selected);
                sql = "SELECT * FROM '" + selected + "'";
                command = new SqlCommand(sql, conx);
                dataReader = command.ExecuteReader();
                
                while (dataReader.Read())
                {
                 Output = Output + "UserID: " + dataReader.GetValue(0) + "\n" + "User Name: " + dataReader.GetValue(1) + "\n" + "User Mail: " + dataReader.GetValue(2) + "\n";
                }

                label1.Text = selected + " Table Informations : "+"\n\n"+ Output;
            }

            dataReader.Close();
            command.Dispose();
        }

       
    }
}
    