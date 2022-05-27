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
intro()

function intro() {
    arr[0] = new Product("https://www.cornellstore.com/site/Product_images/10015961_media-Silver-02.jpg", "M1", "MacBook Pro 13", "20.000.000", 5)
    arr[1] = new Product("https://th.bing.com/th/id/OIP.g6r1S7dc9G6f1LhLKsm8aQHaGm?pid=ImgDet&rs=1", "V1", "Mỹ Phẩm Vichy", "5.000.000", 50)
    arr[2] = new Product("https://product.hstatic.net/1000126467/product/nuoc_ngot_sprite_250ml_1_293252015d42423882abfa7198fc68fe_grande.jpg", "S1", "Sprite", "20.000", 100)
    creatTable()
}

function add() {
    let img = document.getElementById("img").value
    let id = document.getElementById("ID").value
    let name = document.getElementById("name").value
    let price = document.getElementById("price").value
    let sl = document.getElementById("sl").value
    arr[arr.length] = new Product(img, id, name, price, sl)
    creatTable()
}

function creatTable() {
    let txt = ""
    for (let i = 0; i < arr.length; i++) {
        txt += "<tr><td><img src='" + arr[i].getImg() + "' width='100' height='60'></td><td>" + arr[i].getId() +
            "</td><td>" + arr[i].getName() + "</td><td>" + arr[i].getPrice() + " VND</td><td>" + arr[i].getSL() +
            "</td><td><button onclick='editProduct(" + i + ")'>Edit</button><button onclick='deleteProduct(" + i + ")'>Delete</button></td></tr>"
    }
    document.getElementById("listBody").innerHTML = txt
    clearForm()
}

function deleteProduct(i) {
    arr.splice(i, 1);
    creatTable()
}

function editProduct(i) {
    document.getElementById("img").value = arr[i].getImg()
    document.getElementById("ID").value = arr[i].getId()
    document.getElementById("name").value = arr[i].getName()
    document.getElementById("price").value = arr[i].getPrice()
    document.getElementById("sl").value = arr[i].getSL()
    document.getElementById("upDate").style.display = ""
    document.getElementById("cancer").style.display = ""
    document.getElementById("add").style.display = "none"
    document.getElementById("upDate").onclick = function () {
        upDate(i)
    }
}

function upDate(i) {
    let img = document.getElementById("img").value
    let id = document.getElementById("ID").value
    let name = document.getElementById("name").value
    let price = document.getElementById("price").value
    let sl = document.getElementById("sl").value
    arr[i].setImg(img)
    arr[i].setId(id)
    arr[i].setName(name)
    arr[i].setPrice(price)
    arr[i].setSL(sl)
    creatTable()
    document.getElementById("upDate").style.display = "none"
    document.getElementById("add").style.display = ""
}

function cancer() {
    clearForm()
    document.getElementById("upDate").style.display = "none"
    document.getElementById("cancer").style.display = "none"
    document.getElementById("add").style.display = ""
}

function clearForm() {
    document.getElementById("img").value = ""
    document.getElementById("ID").value = ""
    document.getElementById("name").value = ""
    document.getElementById("price").value = ""
    document.getElementById("sl").value = ""
}

function searchProduct() {
    let filter = document.getElementById("searchInfo").value.toUpperCase()
    let table = document.getElementById("listProduct")
    let count = 0
    let tr = table.getElementsByTagName("tr")
    table.style.display = "none"
    for (let i=0 ; i<arr.length; i++){
        let name = arr[i].getName().toUpperCase()
        console.log(name)
        if (name.indexOf(filter) !== -1){
            count++
            table.style.display = "table"
        } else {
            tr[i+1].style.display = "none"
        }
        }
    if (count === 0){
        table.style.display = "table"
        table.innerHTML = "Không có sản phẩm mà bạn muốn tìm."
    }
    }
    // let tr = table.getElementsByTagName("tr")
    // for (let i=0;i<tr.length;i++) {
    //     let td = tr[i].getElementsByTagName("td")
    //     console.log(td)
    //     let td2 = td[2].innerHTML.toUpperCase()
    //     if (td2.indexOf(filter) !== -1){
    //         tr[0].style.display = ""
    //         tr[i].style.display = ""
    //     } else {
    //         table.style.display = ""
    //         document.getElementById("listProduct").innerHTML = "Không có sản phẩm mà bạn muốn tìm"
    //     }
    // }
// }