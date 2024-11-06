import { DataSource, DataSourceOptions } from "typeorm";
import { Category } from '../models/Category.entity'
import { Product } from "src/models/Product.entity";
import { Customer } from "src/models/Customer.entity";
import { Invoice } from "src/models/Invoices.entity";
import { OrderDetail } from "src/models/Order-Detail.entity";
import { Order } from "src/models/Order.entity";
import { ProductInfo } from "src/models/Product-Info.entity";
import { ShoppingCart } from "src/models/Shopping-Cart.entity";
import { ShoppingCartDetail } from "src/models/Shopping-Cart-Detail.entity";
import { Staff } from "src/models/Staff.entity";
import { User } from "src/models/User.entity";
import { Camera } from "src/models/Camera.entity";
import { Feature } from "src/models/Feature";
const options: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'shop_mobile_phone',
    synchronize: false,
    entities: [
        Category, 
        Product, 
        Customer, 
        Invoice, 
        OrderDetail, 
        Order, 
        ProductInfo, 
        ShoppingCart, 
        ShoppingCartDetail, 
        Staff, 
        User,
        Camera,
        Feature
    ],
};

export const DbConfig = new DataSource(options);
export const DbConfigOptions = options;