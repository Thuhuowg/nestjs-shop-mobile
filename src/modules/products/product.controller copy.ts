// import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, Post, UploadedFile, UploadedFiles, UseInterceptors } from "@nestjs/common";
// import { ProductService } from "./Product.service";
// import { createProductDto } from "src/dto/createProductDto";
// import { stringify } from "querystring";
// import { createProductDetailDto } from "src/dto/createProductDetailDto";
// import { FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";

// @Controller('products')
// export class ProductController {
//     constructor(
//         private readonly productService: ProductService
//     ) {}

//     @HttpCode(HttpStatus.OK)
//     @Post('')
// // @UseInterceptors(
// //   FileInterceptor('product_image_avatar'), // Tệp ảnh đại diện
// //   FilesInterceptor('product_images'), // Mảng các tệp ảnh
// // )
// async createProduct(
//     // @UploadedFile() product_image_avatar: Express.Multer.File,
//     // @UploadedFiles() product_images: Express.Multer.File[],
//     @Body() createProductDto: createProductDto
//       // , createProductDetailDto: createProductDetailDto
      
//     ) {
//     console.log('Received request:', {
//         // product_image_avatar,
//         // product_images,
//         createProductDto,
//         // createProductDetailDto,
//       });
//     try {
//       console.log('Starting product creation...');
   

  
//       // Kiểm tra dữ liệu upload
//     //   if (!product_image_avatar || !product_images || product_images.length === 0) {
//     //     throw new HttpException('Error: Please upload an avatar and at least one additional image.', HttpStatus.BAD_REQUEST);
//     //   }
  
//       // Tạo đối tượng productData để lưu sản phẩm
//     //   console.log('-------',product_image_avatar)
     
//       console.log('------productData-----',createProductDto)
  
//       // Lưu sản phẩm và lấy product_id
//       const savedProductInfo = await this.productService.createProduct(createProductDto);
//       // const productId = savedProductInfo.id; // Giả sử phương thức trả về thông tin sản phẩm đã lưu, bao gồm id
  
//       // Tạo đối tượng chi tiết sản phẩm
//       // const productDetailData: createProductDetailDto = {
//       //   product_id: productId,
//       //   product_info_code: body.createProductDetailDto.product_info_code,
//       //   // product_images: product_images.map(file => file.filename), // Lưu mảng ảnh vào product detail
//       //   capacity: body.createProductDetailDto.capacity, // Thêm các thuộc tính cần thiết
//       //   available_capacity: body.createProductDetailDto.available_capacity,
//       //   color: body.createProductDetailDto.color,
//       //   price: body.createProductDetailDto.price,
//       //   // Thêm các trường khác từ CreateProductDetailDto nếu cần
//       // };
  
//       // Lưu chi tiết sản phẩm
//       // await this.productService.createProductDetail(productDetailData);
  
//       return {
//         message: 'Product and details created successfully',
//         // productId: productId,
//         // avproduct_image_avataratar: {
//         //   originalname: product_image_avatar.originalname,
//         //   filename: savedProductInfo.product_image_avatar,
//         //   url: `http://localhost:3000/uploads/${product_image_avatar.filename}`,
//         // },
//         // product_images: product_images.map((file) => ({
//         //   originalname: file.originalname,
//         //   filename: file.filename,
//         //   url: `http://localhost:3000/uploads/${file.filename}`,
//         // })),
//         // info: savedProductInfo, // Thông tin sản phẩm đã lưu
//       };
//     } catch (error) {
//       throw new HttpException({
//         status: HttpStatus.INTERNAL_SERVER_ERROR,
//         error: error.message || 'An error occurred while creating the product',
//       }, HttpStatus.INTERNAL_SERVER_ERROR);
//     }
//   }

//     @HttpCode(HttpStatus.OK)
//     @Get('/attribute/:type')
//     async getAttribute(@Param('type') type: string) {
//         try {
//             console.log('kkkkk',type)
//             const test = await this.productService.getAttribute(type)
//             console.log(test)
//             return await this.productService.getAttribute(type)
//         } catch (error) {
//             throw new HttpException({
//                 status: HttpStatus.NOT_FOUND,
//                 error: 'Khong tim thay thuộc tính nao',
//             }, HttpStatus.NOT_FOUND, {
//                 cause: error
//             });
//         }
//     }
// }