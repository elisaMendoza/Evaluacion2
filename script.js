/*JUEGO DEL GATO
Autora: Elisa Mendoza*/

window.onload = function(){
    
    const boton = document.getElementById("jugar")
    boton.addEventListener("click", () => jugar())
    
    jugar=()=>{
        const inputs= Array.from(document.querySelectorAll("input"))
        const resultados= document.getElementById('resultados')
        
        //Limpia inputs y resultados anteriores
        inputs.forEach(input => input.value= "")
        resultados.innerHTML=""

        //Llena inputs con X y O aleatoriamente
        let valores= ["X", "X", "X", "X", "X", "O", "O", "O", "O"]
        valores= valores.sort(() => Math.random() - 0.5)

        inputs.forEach((input, index) => {
            input.value= valores[index]
        })

        //Verifica si hay tres en línea en las filas, columnas y diagonales y muestra resultados
        const filas= [
            [inputs[0].value, inputs[1].value, inputs[2].value],
            [inputs[3].value, inputs[4].value, inputs[5].value],
            [inputs[6].value, inputs[7].value, inputs[8].value],
        ]
        const columnas= [
            [inputs[0].value, inputs[3].value, inputs[6].value],
            [inputs[1].value, inputs[4].value, inputs[7].value],
            [inputs[2].value, inputs[5].value, inputs[8].value],
        ]
        const diagonales = [
            [inputs[0].value, inputs[4].value, inputs[8].value], // Diagonal izquierda a derecha
            [inputs[2].value, inputs[4].value, inputs[6].value], // Diagonal derecha a izquierda
        ]

        let gato = false

        //Función para verificar "gato" en cualquier conjunto
        function verificarGato(grupo , tipo, index) {
            if (grupo.every(valor => valor === "X")) {
                resultados.innerHTML+=`Se produjo gato de "X" en ${tipo} ${index + 1}<br>` 
                gato= true
            }else if (grupo.every(valor => valor === "O")) {
                resultados.innerHTML+=`Se produjo gato de "O" en ${tipo} ${index + 1}<br>`
                gato= true
            }
        }   

        //verifica filas, columnas y diagonales
        filas.forEach((fila, index) => verificarGato(fila, "fila", index))
        columnas.forEach((columna, index) => verificarGato(columna, "columna", index))
        diagonales.forEach((diagonal, index) => verificarGato(diagonal, "diagonal", index))

        if (!gato) {
            resultados.innerHTML+=`No hubo gato<br>`
        }
            
    }
    //Resetea juego
    document.getElementById("reset").addEventListener("click", () => resetGame())

    resetGame=()=>{
        const inputs= Array.from(document.querySelectorAll("input"))
        inputs.forEach(input => input.value= "")
        const resultados= document.getElementById('resultados')
        resultados.innerHTML=""
    }

    }
    
    
