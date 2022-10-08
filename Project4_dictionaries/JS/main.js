
/*creating dictionary*/
function my_Dictionary() {
    var Country = {
        Fish: "Milk Fish",
        Tree: "Narra",
        Fruit: "Mango",
        House: "Nipa Hut",
        Language: "Filipino"

    };
    document.getElementById("Dictionary").innerHTML = Country.Fruit;
}
/*delete key*/
function my_Dictionary2() {
    var Country = {
        Fish: "Milk Fish",
        Tree: "Narra",
        Fruit: "Mango",
        House: "Nipa Hut",
        Language: "Filipino"
    };
    delete Country.Fruit;
    document.getElementById("Dictionary2").innerHTML = Country.Fruit;
}
/*delete key*/
function my_Dictionary3() {
    var Country = {
        Fish: "Milk Fish",
        Tree: "Narra",
        Fruit: "Mango",
        House: "Nipa Hut",
        Language: "Filipino"
    };
    delete Country.Tree;
    document.getElementById("Dictionary3").innerHTML = Country.Tree;
}
