class Product{
     constructor(name,price,year){
        this.name=name;
        this.price=price;
        this.year=year;
     }

}
class UI{
    addProduct(product){
        const ProductList=document.getElementById("Product list");
        const element = document.createElement("div");
        element.innerHTML= `
            <div class ="card txt-center mb-4">
                <div class="card-body">
                <strong>Product</strong>: ${product.name}
                <strong>Product Price</strong>:${product.price}
                <strong>Product year</strong>:${product.year}
               <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
                </div>
            </div>
        `;  
        ProductList.appendChild(element);
       this.resetForm();
    }
    resetForm(){
        document.getElementById("product-form").reset();
    }

    deleteProduct(element){

        if(element.name==="delete"){
               element.parentElement.parentElement.parentElement.remove();
        }

    }
    showMessage(message, cssClass){
       const div= document.createElement("div");
       div.className=`alert alert-${cssClass}`;
       div.appendChild(document.createTextNode(message));
       

    }
}
//DOM
document.getElementById("product-form").addEventListener("submit", function(e){
    e.preventDefault(); 
    const name=document.getElementById("name").value
    const price=document.getElementById("price").value
    const year=document.getElementById("year").value


    const product= new Product(name,price,year);
    const ui=new UI();
    ui.addProduct(product)
   
  
    

})
document.getElementById("Product list").addEventListener("click", function(e){
const ui=new UI();
ui.deleteProduct(e.target);
});
