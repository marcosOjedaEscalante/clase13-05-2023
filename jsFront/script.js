$.ajax({
    type: "get",
    url: "./dataJSON/cursos.json",
    success: function (cursos) {
        console.log(cursos);
        const tBody = document.querySelector('tBody');
        const tHead = document.querySelector('tHead');      
        cursos.forEach((curso, index) => {
            if(index == 0){
                const fila = document.createElement('tr');
                const columnaUno = document.createElement('th');
                const columnaDos = document.createElement('th');
                const columnaTres = document.createElement('th');
                columnaUno.innerHTML = curso._codigo;
                columnaDos.innerHTML = curso._nombre;
                columnaTres.innerHTML = curso._horas;
                fila.append(columnaUno, columnaDos, columnaTres);
                tHead.appendChild(fila);
            }else{
                const fila = document.createElement('tr');
                const columnaUno = document.createElement('td');
                const columnaDos = document.createElement('td');
                const columnaTres = document.createElement('td');
                columnaUno.innerHTML = curso._codigo;
                columnaDos.innerHTML = curso._nombre;
                columnaTres.innerHTML = curso._horas;
                fila.append(columnaUno, columnaDos, columnaTres);
                tBody.appendChild(fila);
            }       
        });
    }
});