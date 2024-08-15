function encriptar() {
  let parrafo = document.getElementById("parrafo");
  let munieco = document.getElementById("munieco");
  let textoEncriptado = document.getElementById("texto_derecha"); 
  let btnCopiar = document.getElementById("btn_copiar");
  let texto = document.getElementById("texto").value;

   let txtCifrado = texto
   .replace(/a/gi, "ai")   
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length > 0) {
     btnCopiar.style.display="flex";       
    parrafo.textContent = "";
    munieco.style.display="none";
    textoEncriptado.style.display="flex";   
   
    textoEncriptado.value = txtCifrado; 
    // console.log(btnCopiar.style.display)

  } else {
    munieco.src = "./assets/munieco.png";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    Swal.fire({icon: "error",
      title: "Ohh nooo...",
      text: "Debes ingresar un texto",
      confirmButtonText: 'Aceptar'      
    });     
  }
  return;
}

function desencriptar() {
  let parrafo = document.getElementById("parrafo");
  let munieco = document.getElementById("munieco");
  let textoEncriptado = document.getElementById("texto_derecha"); 
  let btnCopiar = document.getElementById("btn_copiar");
  let texto = document.getElementById("texto").value;
  let txtCifrado = texto
      .replace(/ai/gi, "a")  
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
 
    if (texto.length > 0) {
      btnCopiar.style.display="flex";        
      parrafo.textContent = "";   
      munieco.style.display="none";
      textoEncriptado.style.display="flex";     
      textoEncriptado.value = txtCifrado;
    } else {
      munieco.src = "./assets/munieco.png";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      Swal.fire({icon: "error",
        title: "Ohh nooo...",
        text: "Debes ingresar un texto",
        confirmButtonText: 'Aceptar'
      });    
    }
    return;
}
function copiar(){
let parrafo = document.getElementById("parrafo");
  let texto = document.getElementById("texto");
  let textoEncriptado = document.getElementById("texto_derecha");  
  textoEncriptado.select();
  texto.value='';
  return;
}