const logoElement = document.getElementById("logo");
var boton = document.getElementById('fetch-btn');

// 1. Tarea Asíncrona: La transformación de Ranma
function realizarTransformacion(estanqueElegido) {
    return new Promise((resolver, rechazar) => {
    setTimeout(() => {
      if (estanqueElegido === "EstanqueDeLaMujerAhogada") {
        resolver("Ranma-chan (Transformación Lista)");
         logoElement.src ="./images/chica.jpg";
      } else {
        rechazar(new Error("Transformación fallida: Ranma cayó en el Estanque del Cerdo."));
      }
    }, 3500); // Tarda 3.5 segundos
  });
}
const logoRecurso = document.getElementById("recursos");
// 2. Tarea Asíncrona (Recurso 1): Buscar el Agua Caliente
function buscarAguaCaliente() {
  return new Promise((resolver) => {
    setTimeout(() => {
      resolver("Recurso 1: ¡Agua Caliente Encontrada!");
      logoRecurso.src ="./images/agua-caliente.jpg";
    }, 5000); // Tarda 5.0 segundo
  });
}

// 3. Tarea Asíncrona (Recurso 2): Buscar Sake de Reversión
function buscarSakeDeReversion() {
  return new Promise((resolver) => {
    setTimeout(() => {
      resolver("Recurso 2: ¡Sake de Reversión Listo!");
      logoRecurso.src ="./images/sake-reversion.jpg";
    }, 2000); // Tarda 2 segundos
  });
}

async function iniciarMisionRanmaOptimizada() {
  console.log("Misión Paralela V2: ¡Todas las tareas inician y se esperan juntas!");

  try {
    // PASO 1: Iniciar y Consolidar TODAS las Promesas en un arreglo.
    const todasLasPromesas = [
      realizarTransformacion("EstanqueDeLaMujerAhogada"), // Índice 0
      buscarAguaCaliente(),                              // Índice 1
      buscarSakeDeReversion()                            // Índice 2
    ];

    // Esperamos que TODAS las promesas se cumplan.
    // La desestructuración capta los resultados en el mismo orden que las Promesas.
    const [resultadoTransformacion, resultadoAgua, resultadoSake] = await Promise.all(todasLasPromesas);

    // PASO 2: Reporte de Resultados (Igual que antes)
    console.log(`\nReporte (Transformación): ${resultadoTransformacion} ha aparecido.`); 
    const reporteTransformacion = document.getElementById("transformacion");
    reporteTransformacion.textContent=resultadoTransformacion;
    console.log(`Reporte (Recursos 1): ${resultadoAgua}`);
    const reporteRecurso1 = document.getElementById("recurso1");
    reporteRecurso1.textContent=resultadoAgua;
    console.log(`Reporte (Recursos 2): ${resultadoSake}`);
    const reporteRecurso2 = document.getElementById("recurso2");
    reporteRecurso2.textContent=resultadoSake;
    console.log("FIN: ¡Ranma tiene todos los recursos y vuelve a la normalidad!"); 
    logoElement.src ="./images/chico.jpg";

    
    boton.innerText = 'Iniciar otra mision.';
    return "Misión Paralela Consolidada Exitosa";
    
} catch (error) {
    console.error("\n¡La misión paralela falló inmediatamente debido a un recurso o transformación!");
    console.error(error.message);
    //console.log("error!"); 
    throw error;
}
}


async function handleFetchClick(){
    console.log("Boton fetch clickeado");
    
    boton.innerText = 'Mision en curso.';
    // Ejecutamos la función para ver el resultado
    iniciarMisionRanmaOptimizada()
    .then((mensaje) => console.log(`\nResumen: ${mensaje}`))
    // Se recomienda solo capturar el error si se necesita LOGUEAR O TRATAR DE NUEVO (e.g., reintentar).
    .catch((error) => console.log(`\nEl proceso finalizó con un error. Detalle: ${error.message}`));
    // La línea original: .catch(() => console.log("La misión no pudo completarse.")); oculta el error.
}