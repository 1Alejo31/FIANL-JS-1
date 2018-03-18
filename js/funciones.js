//Declaracion de los estudiantes Json

var estudiantes =
[
    {
        "codigo": "001",
        "nombre": "Andres",
        "nota": 45
    },
    {
        "codigo": "002",
        "nombre": "Jonathan",
        "nota": 10
    },
    {
        "codigo": "003",
        "nombre": "Anderson",
        "nota": 20
    },
    {
        "codigo": "004",
        "nombre": "Felipe",
        "nota": 38
    },
    {
        "codigo": "005",
        "nombre": "Astrid",
        "nota": 35
    },
    {
        "codigo": "006",
        "nombre": "Carina",
        "nota": 42
    },
    {
        "codigo": "007",
        "nombre": "Lenny",
        "nota": 45
    },
    {
        "codigo": "008",
        "nombre": "Daniel",
        "nota": 49
    },
    {
        "codigo": "009",
        "nombre": "Alejo",
        "nota":50
    },
    {
        "codigo": "010",
        "nombre": "Liz",
        "nota": 19
    }
];

//Declaracion de funciones

function imprimir1()
{
    function mostrar(json)
    {
        var tex = "";
        var i;
        for(i=0;i<json.length;i++)
        {
            tex+="El codigo del estudiante es:"+json[i].codigo+"<br>"+"Su nombre es:"+json[i].nombre+"<br>"+"Su nota fue:"+json[i].nota+"<br>";
        }

        document.getElementById("text1").innerHTML = tex;
    }
    mostrar(estudiantes);
}

function promedio()
{
    function calcular(json)
    {
        var suma = 0;
        var total;
        var i;

        for(i=0;i<json.length;i++)
        {
            suma = suma+json[i].nota;
        }
        total = suma / 10;
        document.getElementById("text2").innerHTML = total;
    }
    calcular(estudiantes);
}