import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function getProductById(req: Request, res: Response) {

    try {
        const { productId } = req.params;
        const product = await Product.findById(productId);
        return res.json(product);
    } catch(error) {
        console.log(error);
        return res.sendStatus(500);
    }
    
}