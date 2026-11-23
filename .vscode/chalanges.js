const categories = ["Papeterie", "Accessoires", "Sacs"];
const boutique = {
nom: "Stock & Fournitures",
ville: "Youssoufia",
ouverte: true
};
const produits = [
{ id: 101, nom: "Cahier", categorie: "Papeterie",
prix: 20, stock: 5 },
{ id: 102, nom: "Stylo", categorie: "Papeterie",
prix: 10, stock: 0 },
{ id: 103, nom: "Trousse", categorie: "Accessoires",
prix: 35, stock: 3 },
{ id: 104, nom: "Sac", categorie: "Sacs",
prix: 120, stock: 2 },
{ id: 105, nom: "Classeur", categorie: "Papeterie",
prix: 30, stock: 4 }
];



// =========chalange 1 =============

console.log("// =========chalange 1 =============")

console.log(categories[0])
console.log(categories.length)


categories.push("Classement")

categories.splice(1,1,"bureau")

categories.pop()
console.log(categories)

// =========chalange 2 ========
console.log("// =========chalange 2 ========")

console.log(boutique.nom)
console.log(boutique.ville)


boutique.devise="MAD"




boutique.ouverte=false
console.log(boutique)

let  statut;
if (boutique.ouverte){
    statut="ouverte"
}
else{statut="Fermée"}


console.log(statut)


//========= chalange 3 ==========
console.log("//========= chalange 3 ==========")

let produits_copier=[]

for( let i=0 ;i<produits.length;i++){
    produits_copier.push({...produits[i]})
}


produits_copier.forEach(produit=>{
    console.log(`${produit.nom}\n ${produit.stock}`)
})

produits_copier.forEach(produit=>{

    if (produit.nom==="Stylo"){

        produit.stock=6
    }
})

let gomme = { id: 106, nom: "Gomme", categorie: "Papeterie",
prix: 5, stock: 8 }


produits_copier.push(gomme)


let sac = produits_copier.findIndex(produit=>produit.categorie==="Sacs")

produits_copier.splice(sac,1)


console.log(produits_copier)

//============ chalange 4 =========
console.log("//============ chalange 4 =========")



let produitss= produits.filter(produit=>produit.stock>0)
console.log(produitss)

let produitsss= produits.filter(produit=>produit.stock>0 && produit.categorie==="Papeterie")
console.log(produitsss)

//============ chalange 5========

let noms = produits.map(produit=> produit.nom )

console.log(noms)

let stickers = produits.map(produit=> `${produit.nom} - ${produit.prix} DH` )

console.log(stickers)


//==============chalange 6=======
console.log("//==============chalange 6=======")

let total = produits.reduce((sum, produit)=>sum +produit.stock,0)

console.log(total)


let totalprix = produits.reduce((sum, produit)=>sum +produit.stock*produit.prix,0)

console.log(totalprix +" DH")


//========== chalange 7 ===========
console.log("//========== chalange 7 ===========")


let produitdomander= produits.find(produit=>produit.id ==103)
console.log(produitdomander)

let produitdomanderindex= produits.findIndex(produit=>produit.id ==103)
console.log(produitdomanderindex)

let produitdomander2= produits.find(produit=>produit.id ==999)
console.log(produitdomander2)


let produitdomander2index= produits.findIndex(produit=>produit.id ==999)
console.log(produitdomander2index)



//========== chalange 8 ===========
console.log("//========== chalange 8 ===========")


const verifierstok= produits.some(produit=>produit.stock==0)

console.log(verifierstok)

//========== chalange 9 ===========
console.log("//========== chalange 9 ===========")

const verifierprixs= produits.every(produit=>produit.prix>0)

console.log(verifierprixs)

const verifierstocks= produits.every(produit=>produit.stock>0)

console.log(verifierstocks)

//========== chalange 10 ===========
console.log("//========== chalange 10 ===========")

    const results = produits.filter(produit=>produit.stock>0 && produit.categorie==="Papeterie")
    console.log(results)


    const  nom_result = results.map(result=> result.nom)
    console.log(nom_result)

    const somme = results.reduce((sum,result)=>sum +result.prix*result.stock,0)
    console.log(somme+" DH")


