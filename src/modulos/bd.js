//Administracion de la conexion a la BD
//Conexión a base de datos
// instanciar la libreriaria mysql
const mysql = require("mysql2"); //Principio de inmutabilidad

//Cadeba de conexin

const cnx = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "interpolice",
});

 connection.query("Select * from citizen",(error,result)=>{
    console.log(result);
}); 

cnx.connect((error) => {
  if (error) {
    console.log(`Error en la conexion: \n ${error}`);
  } else {
    console.log("Conexion exitosa a la BD");
  }
});
module.exports = cnx;
