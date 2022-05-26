class Product {
    img;
    id;
    name;
    price;
    sl;

    constructor(img, id, name, price, sl) {
        this.img = img;
        this.id = id;
        this.name = name;
        this.price = price;
        this.sl = sl;
    }

    getImg() {
        return this.img;
    }

    setImg(img) {
        this.img = img;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getPrice() {
        return this.price;
    }

    setPrice(price) {
        this.price = price;
    }

    getSL() {
        return this.sl;
    }

    setSL(sl) {
        this.sl = sl;
    }
}

let arr = []
function add(){
    let img = document.getElementById("img").value
    let id = document.getElementById("ID").value
    let name = document.getElementById("name").value
    let price = document.getElementById("price").value
    let sl = document.getElementById("sl").value
    arr[arr.length] = new Product(img,id,name,price,sl)
    creatTable()
    document.getElementById("img").value = ""
    document.getElementById("ID").value = ""
    document.getElementById("name").value = ""
    document.getElementById("price").value = ""
    document.getElementById("sl").value = ""
}
function creatTable(){
    let txt = ""
    for (let i=0; i<arr.length;i++){
        txt += "<tr><td><img src='" + arr[i].getImg() + "' width='100' height='60'></td><td>" + arr[i].getId() +
            "</td><td>" + arr[i].getName() + "</td><td>" + arr[i].getPrice() + " VND</td><td>" + arr[i].getSL() +
            "</td><td><button onclick='editProduct(" + i + ")'>Edit</button><button onclick='deleteProduct(" + i + ")'>Delete</button></td></tr>"
    }
    document.getElementById("listBody").innerHTML = txt
}
// arr[arr.length] = "<tr><td><img src="link" width="100" height="60"></td><td>id</td><td>name</td><td>price</td><td>sl</td><td><button onclick="edit(arr.length)">Edit</button><button onclick="delete(arr.length)">Delete</button></td></tr>"

function deleteProduct(i){
    arr.splice(i,1);
    creatTable()
}

function editProduct(i){

}