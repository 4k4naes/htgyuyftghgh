import { init } from "../../src/constants.js";

async function renderProductList() {
    try {
        const products = await init();
        products.forEach((product) => {
            console.log(product);
        });
    } catch (error) {
        console.error("Error initializing database:", error);
    }
}

renderProductList();