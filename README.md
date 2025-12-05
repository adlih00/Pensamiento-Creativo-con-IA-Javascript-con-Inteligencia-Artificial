# ⚔️ Misión Ranma Paralela: Async/Await y Promise.all()

## 📝 Descripción del Proyecto

Este script de JavaScript (`.js`) ilustra la implementación de tareas asíncronas concurrentes (paralelas) utilizando **Promesas**, la sintaxis moderna **`async/await`** y el método **`Promise.all()`**.

El código simula la aventura de Ranma Saotome, donde la **transformación** y la **búsqueda de recursos de reversión** (Agua Caliente y Sake) son tareas independientes que se inician y se esperan simultáneamente para optimizar el tiempo de ejecución.

---

## 🚀 Conceptos Clave Demostrados

El objetivo principal de este código es romper con la ejecución secuencial (`await` tras `await`) y demostrar la **eficiencia del paralelismo**:

1.  **Programación Asíncrona:** Uso de Promesas (`new Promise`) para simular operaciones que tardan tiempo en completarse (`setTimeout`).
2.  **`async/await`:** Estructura limpia para manejar Promesas.
3.  **Concurrencia (`Promise.all()`):** Ejecutar múltiples Promesas al mismo tiempo. El tiempo de espera total es igual al de la tarea más larga, no a la suma de todas.
4.  **Manejo de Errores Centralizado:** Uso de un único bloque `try...catch` para capturar cualquier error que surja de las Promesas concurrentes.

---

## 🛠️ Estructura del Código

El script se compone de tres funciones que devuelven Promesas y una función principal asíncrona que las coordina:

### Funciones que Devuelven Promesas

| Función | Descripción | Tiempo Simulado |
| :--- | :--- | :--- |
| `realizarTransformacion(estanqueElegido)` | Simula la caída de Ranma. Puede resolver con éxito o rechazar con un error. | 1500 ms (1.5s) |
| `buscarAguaCaliente()` | Simula la búsqueda de un recurso. | 1000 ms (1.0s) |
| `buscarSakeDeReversion()` | Simula la búsqueda del segundo recurso. | 800 ms (0.8s) |

### Función de Control Principal

#### `async function iniciarMisionRanmaOptimizada()`

1.  **Inicio Concurrente:** Las tres funciones de Promesa se llaman y almacenan en un arreglo (`todasLasPromesas`) **sin usar `await`**, lo que garantiza que las tres tareas comienzan a correr inmediatamente.
2.  **Sincronización:** Se utiliza `await Promise.all(todasLasPromesas)` para **esperar y recoger** los resultados de todas las tareas. Si alguna falla, `Promise.all()` se rechaza instantáneamente.
3.  **Desestructuración:** Los resultados se asignan a las variables correspondientes (`resultadoTransformacion`, `resultadoAgua`, `resultadoSake`) de forma ordenada.
4.  **Manejo de Errores:** Un bloque `try...catch` robusto captura y reporta cualquier fallo durante la ejecución concurrente.

---

## 💻 Ejecución y Salida Esperada

### Requisitos

Necesitas tener **Node.js** instalado para ejecutar este script.

### Pasos para Ejecutar

1.  Guarda todo el código proporcionado en un archivo llamado `misionRanma.js`.
2.  Ejecuta el archivo desde tu terminal:
    ```bash
    node misionRanma.js
    ```

### Ejemplo de Salida Exitosa
