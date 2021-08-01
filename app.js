console.log("Any string");
let pronoun=['El','La'];
let adjetive=['maravilloso','expectacular'];
let name=['mundo','páginaweb'];
let domain=['.com','.es'];

for(let i=0;i<pronoun.length;i++){
    for(let j=0;j<adjetive.length;j++){
        for(let k=0;k<name.length;k++){
            for(let l=0;l<domain.length;l++){
                console.log(
                  pronoun[i]+adjetive[j]+name[k]+domain[l]  
                );
            }
        }
    }
}