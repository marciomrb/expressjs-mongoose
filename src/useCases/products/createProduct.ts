import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response) {

  try {
    const imagePath = req.file?.path;
    const { name, description, price, category } = req.body;

    const product = await Product.create({
      name,
      description,
      price: Number(price),
      category,
      imagePath: imagePath
    });


    return res.status(201).json(product);

  } catch(error) {
    console.log(error);
    return res.sendStatus(422);
  }
}


