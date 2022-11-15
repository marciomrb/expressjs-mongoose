
import { Router } from 'express';
import path from 'node:path';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
const cloudinary = require("cloudinary").v2;
// category
import { createCategory } from './useCases/categories/createCategory';
import { listCategories } from './useCases/categories/listCategories';
import { createProduct } from './useCases/products/createProduct';

//product
import { listProducts } from './useCases/products/listProducts';
import { listProductsByCategory } from './useCases/categories/listProductsByCategory';

//order
import { createOrders } from './useCases/orders/createOrders';
import { listOrders } from './useCases/orders/listOrders';
import { changeOrderStatus } from './useCases/orders/changeOrderStatus';
import { cancelOrder } from './useCases/orders/cancelOrder';
import { listUsers } from './useCases/users/listUsers';

// user
import { createUsers } from './useCases/users/createUsers';
import { getUserById } from './useCases/users/getUserById';
import { updateUser } from './useCases/users/updateUser';
import { deleteUser } from './useCases/users/deleteUser';

cloudinary.config({ 
  cloud_name: 'ddugqkgko', 
  api_key: '486868118642275', 
  api_secret: 'F0PL1AGdjsb2od0Xd3TaBjXCkSk',
  secure: true
});

export const router = Router();

// const upload = multer({
//   storage: multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, path.resolve(__dirname, '..', 'uploads'));
//     },
//     filename: (req, file, cb) => {
//       cb(null, `${Date.now()}-${file.originalname}`);
//     }
//   })
// });

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "styla",
  },
});

const upload = multer({ storage: storage });

// list categories
router.get('/categories', listCategories);
// create category
router.post('/categories', createCategory);

// list products
router.get('/products', listProducts);

// create product
router.post('/products', upload.single('image'), createProduct);

// get product by category
router.get('/categories/:categoryId/products', listProductsByCategory);

// list orders
router.get('/orders', listOrders);

// create order
router.post('/orders', createOrders);

// change order status
router.patch('/orders/:orderId', changeOrderStatus);

// delete/cancel order
router.delete('/orders/:orderId', cancelOrder);


// list users
router.get('/users', listUsers);
// create user
router.post('/users', createUsers);
// get user by id
router.get('/users/:userId', getUserById);
// update user
router.patch('/users/:userId', updateUser);
// delete user
router.delete('/users/:userId', deleteUser);
