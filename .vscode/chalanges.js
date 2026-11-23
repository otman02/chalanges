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

console.log(categories[0])
console.log(categories.length)


categories.push("Classement")

categories.splice(1,1,"bureau")

categories.pop()
console.log(categories)

// =========chalange 2 ========

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



