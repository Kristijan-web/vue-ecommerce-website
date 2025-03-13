import axios from 'axios'

export default {
    async getProducts(context){
        try{
            const response=await axios.get("https://66d32a56184dce1713cf78e1.mockapi.io/products")
            const responseData=response.data

            context.commit("setProducts",responseData)
        }
        catch(error){
            console.error("Error fetching data:", error);
        }
    },
    async addProduct(context, product) {
        try {
            const response = await axios.post("https://66d32a56184dce1713cf78e1.mockapi.io/products", product);
            const newProduct = response.data;
    
            
            context.commit("addProduct", newProduct);
        } catch (error) {
            console.error("Error adding product:", error);
        }
    },
    async deleteProduct(context, productId) {
        try {
            await axios.delete(`https://66d32a56184dce1713cf78e1.mockapi.io/products/${productId}`);
            
            context.commit("removeProduct", productId);
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    },
    async updateProduct(context, product) {
        try {
            const response = await axios.put(`https://66d32a56184dce1713cf78e1.mockapi.io/products/${product.id}`, product);
            const updatedProduct = response.data;
    
            context.commit("updateProduct", updatedProduct);
        } catch (error) {
            console.error("Error updating product:", error);
        }
    }
            
}