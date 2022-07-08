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
zui()

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
        txt += "<tr><td><img src='" + arr[i].getImg() + "' width='90' height='60'></td><td>" + arr[i].getId() +
            "</td><td>" + arr[i].getName() + "</td><td>" + arr[i].getPrice() + " VND</td><td>" + arr[i].getSL() +
            "</td><td><button onclick='editProduct(" + i + ")'>Edit</button><br><button onclick='deleteProduct(" + i + ")'>Delete</button></td></tr>"
    }
    document.getElementById("listBody").innerHTML = txt
    clearForm()
}

function deleteProduct(i) {
    let xn = confirm("Bạn có muốn xóa sản phẩm không?")
    if (xn){
        arr.splice(i, 1);
        creatTable()
    }
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
    document.getElementById("cancer").style.display = "none"
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

let headTable = document.getElementById("headTable")
function searchProduct() {
    let filter = document.getElementById("searchInfo").value.toUpperCase()
    let table = document.getElementById("listProduct")
    let count = 0
    let tr = table.getElementsByTagName("tr")
    let tbody = document.getElementById("listBody")
    headTable.style.display = ""
    creatTable()
    tr[0].style.display = ""
    for (let i = 0; i < arr.length; i++) {
        let name = arr[i].getName().toUpperCase()
        console.log(name)
        if (name.indexOf(filter) !== -1) {
            count++
        } else {
            tr[i + 2].style.display = "none"
        }
    }
    if (count === 0) {
        headTable.style.display = "none"
        tbody.innerHTML = "Không có sản phẩm mà bạn muốn tìm."
    }
}

function comeBack(){
    headTable.style.display = ""
    creatTable()
    document.getElementById("searchInfo").value = ""
}

function logIn(){
    let user = document.getElementById("user").value
    let passWord = document.getElementById("password").value
    let user1 = localStorage.getItem("user")
    let passWord1 = localStorage.getItem("password")
    if (user === "admin" && passWord === "12345"){
        document.getElementById("divLogIn").style.display = "none"
        document.getElementById("imgBackground").style.display = "none"
        document.getElementById("all").style.display = "block"
        document.getElementById("userName").innerHTML = "Wellcome " + user + "!"
        intro()
    } else if (user === user1 && passWord === passWord1) {
        document.getElementById("divLogIn").style.display = "none"
        document.getElementById("imgBackground").style.display = "none"
        document.getElementById("all").style.display = "block"
        document.getElementById("userName").innerHTML = "Wellcome " + user1 + "!"
    } else {
        document.getElementById("announce").innerHTML = "User or password is wrong!"
    }
}

function zui(){
    let red = Math.random()*255;
    let blue = Math.random()*255;
    let green = Math.random()*255;
    document.getElementById("divHead").style.color = "rgb(" + red + "," + blue + "," + green + ")"
    setTimeout(zui,500)
}

function displayCreatAccountForm(){
    document.getElementById("divLogIn").style.display = "none"
    document.getElementById("divCreatAccount").style.display = "block"
}

function creatAccount(){
    localStorage.setItem("user",document.getElementById("creatUser").value);
    localStorage.setItem("password",document.getElementById("creatPassword").value);
    alert("Đăng kí tài khoản thành công!")
    location.reload();
}

function logOut(){
    location.reload();
}