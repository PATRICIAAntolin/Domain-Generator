console.log("Any string");
let pronombre=['El','La'];
let adjetivo=['maravilloso','expectacular'];
let nombre=['mundo','páginaweb'];
let dominio=['.com','.es'];

for(let i=0;i<pronombre.length;i++){
    for(let j=0;j<adjetivo.length;j++){
        for(let k=0;k<nombre.length;k++){
            for(let l=0;l<dominio.length;l++){
                console.log(
                  pronombre[i]+adjetivo[j]+nombre[k]+dominio[l]  
                );
            }
        }
    }
}