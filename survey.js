function kirimData(){
  var name = document.getElementById("nama").value
  var bd = document.getElementById("birthdaytime").value
  var band = document.getElementById("band").value
  var musik = document.querySelector("input[name=musik]:checked").value
  var alamat = document.getElementById("alamat").value
  var komentar = document.getElementById("komentar").value


  alert(
      "Nama : " + name + 
      "\nTanggal Lahir : " + bd +
      "\nBand : " + band +
      "\nGenre Serupa  : " + musik + 
      "\nAlamat : " + alamat +
      "\nKomentar : " + komentar 
  )



}