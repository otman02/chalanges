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
else{statut="Framée"}


console.log(statut)



