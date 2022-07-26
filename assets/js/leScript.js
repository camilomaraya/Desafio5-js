const btnAdd = document.getElementById("add")
const listado = document.getElementById("listado")
const complete = document.getElementById("complete")
let total = document.getElementById("total")
let id = 0
let toDoList = [];

// AGREGAR TAREA 
btnAdd.addEventListener("click", ()=>{
    id++
    const tarea = document.getElementById("task").value
    if(tarea != ''){
        const objectTask = {id : id, description: tarea, estado:false }
        toDoList.push(objectTask)
        renderHtml(toDoList)
        document.getElementById("task").value = ""
    }else{
        alert('Ingresa una tarea a realizar!')
    }
})

const renderHtml = (array) => {
    total.innerHTML = array.length
    complete.innerHTML = ""
    let html = ""
    let contador = 0
    for (const tasks of array){
        html += `
        <tr>
            <td ${tasks.estado ? 'style= opacity:.1' : ''}> 
                ${tasks.id}
            </td>
            <td ${tasks.estado ? 'style= opacity:.1' : ''}> 
                ${tasks.description}
            </td>
            <td ${tasks.estado ? 'style=visibility:hidden' : ''}>
                <input type="checkbox" onclick="changeStatus(${tasks.id})" ${tasks.estado ? 'checked' : ''}/>
            </td>
            <td>
            <button class= "btn btn-sm btn-warning" id="borrar" type="button" onclick="borrar(${tasks.id})" ${tasks.estado ? '' : 'enabled' }>X</button> 
            </td>
        </tr>
        `
        /* EL BOTON PARA ELIMINAR QUEDÓ ESTABLECIDO PARA BORRAR
          LA TAREA (no copié... tanto)
         AUN SI LA TAREA NO HA SIDO COMPLETADA*/
        if(tasks.estado){contador ++}
        }
        complete.innerHTML=contador;
        listado.innerHTML = html
    }

const borrar = (id) => {
    toDoList = toDoList.filter((ele) => ele.id != id)
    renderHtml(toDoList)
}

const changeStatus = (id)=>{
    toDoList.map((ele) =>{
        if (ele.id == id) ele.estado = !ele.estado
    })
    renderHtml(toDoList)
}

