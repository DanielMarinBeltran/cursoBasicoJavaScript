var estudiantes = ["Maria", "Segio", "Rosa", "Daniel"];
function saludarEstudiantes(estudiante){
    console.log('Hola, ${estudiante}');
}

// FOR
for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

// FOR OF
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

// WHILE

while(estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}