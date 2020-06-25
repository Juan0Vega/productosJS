class Product{
     constructor(name,price,year){
        this.name=name;
        this.price=price;
        this.year=year;
     }

}
class UI{
    addProduct(product){
        const ProductList=document.getElementById("product-list");
    }
    deleteProduct(){

    }
    showMessage(){

    }
}
//DOM
document.getElementById("product-form").addEventListener("submit", function(e){
    const name=document.getElementById("name").value
    const price=document.getElementById("price").value
    const year=document.getElementById("year").value

    console.log("nombre: "+name +"\n price: "+price+"\n year: "+year)

   const product= new Product(name,price,year);

    e.preventDefault();

})
