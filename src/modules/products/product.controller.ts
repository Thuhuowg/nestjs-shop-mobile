import { BadRequestException, Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, Post, UploadedFile, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { ProductService } from "./Product.service";
import { createProductDto } from "src/dto/createProductDto";
import { stringify } from "querystring";
import { createProductDetailDto } from "src/dto/createProductDetailDto";
import { FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";
import * as fs from 'fs'
@Controller('products')
export class ProductController {
  constructor(
    private readonly productService: ProductService
  ) { }

  @HttpCode(HttpStatus.OK)
  @Get('proById/:product_id')
  async getProductById(@Param('product_id') product_id: number) {
    try {
      console.log('kkkkk', product_id)
      return await this.productService.getProductById(product_id)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'Khong tim thay sp nao',
      }, HttpStatus.NOT_FOUND, {
        cause: error
      });
    }
  }

  @HttpCode(HttpStatus.OK)
  @Post('create')
  async createProduct(@Body() createProductDto: createProductDto) {
    console.log('------pjkaghkj----', typeof (createProductDto),)

    try {

      if (createProductDto === null) {
        return 'loi r dm'
      } else {
        console.log('------productData-----', createProductDto)
        const data = await this.productService.createProduct(createProductDto);
        console.log('------data-----', data)
        return {

          message: 'Product and details created successfully',
          data
        };
      }

    } catch (error) {
      console.error('Error creating rider:', error);
      throw new HttpException('Không thể tạo rider', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @HttpCode(HttpStatus.OK)
  @Post('create_detail')
  @UseInterceptors(FilesInterceptor('product_images')) // Nhận nhiều ảnh
  async createProductDetail(
    @UploadedFiles() productImages: Express.Multer.File[],
    @Body() createProductDto: createProductDetailDto,
    // @Param('product_id') product_id: number 
  ) {
    if (!productImages || productImages.length === 0) {
      throw new BadRequestException('No product images uploaded');
    }

    // if (!productImageAvatar) {
    //   throw new BadRequestException('No avatar image uploaded');
    // }
    const uploadPath = 'uploads/';
    // Xử lý dữ liệu và lưu vào cơ sở dữ liệu hoặc thực hiện các thao tác khác
    console.log(createProductDto);
    console.log('Product Imageskkk:', productImages);
    // const imagePaths = await Promise.all(productImages.map(async (image) => {
    //   const imagePath = `${uploadPath}${image.originalname}`; // Tạo đường dẫn cho ảnh
    //   await fs.promises.writeFile(imagePath, image.buffer); // Lưu ảnh vào đường dẫn đã tạo
    //   return imagePath; // Trả về đường dẫn ảnh
    // }));  

    const imageAvatar = productImages[0].filename
    // console.log('kkkk',imageAvatar)
    let imagePathsString = ''
    for (const i of productImages) {
      // console.log('=====jkjk===',i)
      imagePathsString += `, ${i.filename}`
    }

    // console.log('kkkk',imagePathsString)
    const data = await this.productService.createProductDetail(createProductDto, imagePathsString, imageAvatar)
    console.log('data=====', data.id)
    return {
      message: 'Product created successfully',
      product_images: imagePathsString,
      data
    };
  }
  @HttpCode(HttpStatus.OK)
  @Get('/attribute/:type')
  async getAttribute(@Param('type') type: string) {
    try {
      console.log('kkkkk', type)
      const test = await this.productService.getAttribute(type)
      console.log(test)
      return await this.productService.getAttribute(type)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'Khong tim thay thuộc tính nao',
      }, HttpStatus.NOT_FOUND, {
        cause: error
      });
    }
  }

  @HttpCode(HttpStatus.OK)
  @Get('/list-product')
  async getLisProduct() {
    try {
      const data = this.productService.getProductList()
      return data
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'Khong tim thay san pham nao',
      }, HttpStatus.NOT_FOUND, {
        cause: error
      });
    }
  }

  @HttpCode(HttpStatus.OK)
  @Get('/product-detail/:product_id')
  async getProductDetail(@Param('product_id') product_id: number) {
    try {
      const data = this.productService.getProductDetail(product_id)
      return data
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'Khong tim thay san pham nao',
      }, HttpStatus.NOT_FOUND, {
        cause: error
      });
    }
  }

}
