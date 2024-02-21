class ProductManager {

    #precioBaseDeGanancia; //Atributo privado
   
    constructor() {
        this.products = [];
    }

    getProducts() {
        return this.products;
    }

    existeProducto(id) {
        return (this.products.find((product) => product.id === id))
    }
   
   
    getProductsById(id) {
        if(!this.existeProducto(id)) {
            console.log(" id no encontrado ")
        }else{
            console.log(this.existeProducto(id))
        }

        // Opcion ternario
       //!this.existeProducto(id)) ? console.log(" id no encontrado ") : console.log(this.existeProducto(id))
    
    }

    
    
    
    addProduct(title, description, price, thumbnail, code, stock) {
        
       
       for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].code === code) {
            console.log(`El codigo ${code} esta repetido`);
            break
        }
       }
        
       const product = {
            id: this.#getId(), 
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }

    if (!Object.values(product).includes(undefined)) {
        this.products.push({
            ...product
        });
    }else{
        console.log("Todos los campos son requeridos")
        }

    }  

   
       
    #getId() {
        if (this.products.length === 0) return 1;

        return this.products[this.products.length - 1].id++;
    }

}

console.log ("Creo el array vacio y lo muestro");

const PM = new ProductManager();
console.log(PM.getProducts());

console.log ("Agrego el producto de prueba y lo muestro");

PM.addProduct("productoprueba", "este es un producto prueba", 200, "Sin imagen", "abc123", 25);

console.log(PM.getProducts());

console.log ("Pruebo producto por ID");

PM.getProductsById(1);

console.log ("Pruebo producto con igual Code y sin un campo");

PM.addProduct("productoprueba1", "este es un producto prueba1", 100, "Sin imagen1", "abc124", 25);


console.log ("Para finalizar muestro lo que queda en el objeto");

console.log(PM.getProducts());

