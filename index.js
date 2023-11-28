// iport package ekspres, bukan http 
// import package : const express = require ('ekpress')
const express = require('ekpress');
// cara make package ekpress harus kita internsif dulu ekspresnya, karena mau memakai modull ekpress
// cara make ekpressnya dengan cara di tampung di sebuah variable
const server = ekpress();

//server port
const PORT = 3000;

// handle reques di main routes atau rute utama aplikasi kalian atau end tree poins aplikasi kalian ("/")
// habis itu harus kita tangkep dengan sebuah function
// no 11 namanya anonymous function
server.get("/", function (request, response) {
    // aku gak mau membaca detail requestnya aku mau langsung kirim response aja
    response.send("Aku balikin sebuah response");
});

// yang ini namanya arrow functiion
//server.get("/". (Request, Response) => {});
server.listen(PORT, {} => { //biar servernya terbaca
    console.log('iya servernya udah nyala nih, cek aja di url: http://localhost:${port}');
}) 
