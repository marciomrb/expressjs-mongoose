import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function updateProduct(req: Request, res: Response) {
    try {
        const imagePath = req.file?.path;
        const { name, description, price, category, image } = req.body;
        const { productId } = req.params;
    
        const product = await Product.findByIdAndUpdate(productId, {
            name,
            description,
            price: Number(price),
            category,
            imagePath: imagePath ? imagePath : image,
        });

        return res.status(200).json(product);

    } catch(error) {
        console.log(error);
        return res.sendStatus(500);
    }
}