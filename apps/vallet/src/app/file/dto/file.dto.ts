import { IsBoolean, IsString } from "@nestjs/class-validator";

export class FileDto {
    @IsString()
    path: string;

    @IsString()
    displayName: string;

    @IsString()
    bucketName: string;
    
    @IsString()
    extension: string;

    @IsString()
    mimeType: string;

    @IsString()
    fileType: string;

    @IsBoolean()
    isActive: boolean;
}
