import { Module } from "@nestjs/common";
import { ImageModuleBase } from "./base/image.module.base";
import { ImageService } from "./image.service";
import { ImageController } from "./image.controller";

@Module({
  imports: [ImageModuleBase],
  controllers: [ImageController],
  providers: [ImageService],
  exports: [ImageService],
})
export class ImageModule {}
