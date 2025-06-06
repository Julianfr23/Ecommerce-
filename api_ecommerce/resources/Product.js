export default {
    product_list: (product, variedades = []) => {
        if (!product) {
            return {}; // Devuelve un objeto vacío o lanza un error según tu diseño
        }

        let GALERIAS = Array.isArray(product.galerias) ? product.galerias.map((galeria) => {
            galeria.imagen = 'http://localhost:3000/api/products/uploads/product/' + galeria.imagen;
            return galeria;
        }) : [];

        let IMAGEN_TWO = '';
        if (GALERIAS.length > 0) {
            const VAL = Math.floor(Math.random() * GALERIAS.length); // Evita error si hay menos de 3
            IMAGEN_TWO = GALERIAS[VAL].imagen;
        }

        return {
            _id: product._id,
            title: product.title,
            sku: product.sku,
            slug: product.slug,
            imagen: 'http://localhost:3000/api/products/uploads/product/' + (product.portada || ''),
            categorie: product.categorie,
            price_cop: product.price_cop,
            price_usd: product.price_usd,
            stock: product.stock,
            description: product.description,
            resumen: product.resumen,
            tags: product.tags ? JSON.parse(product.tags) : [],
            type_inventario: product.type_inventario,
            state: product.state,
            variedades: variedades,
            imagen_two: IMAGEN_TWO,
            galerias: GALERIAS,
        };
    }
}
