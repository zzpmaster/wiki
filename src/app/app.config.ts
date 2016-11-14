import { OpaqueToken } from "@angular/core";

export let APP_CONFIG = new OpaqueToken("app.config");

export interface IAppConfig {
    cloudinaryApiURL: string;
    cloudinaryApiKey: string;
    cloudinaryApiSecret: string;
}

export const AppConfig: IAppConfig = {
    cloudinaryApiURL: 'https://api.cloudinary.com/v1_1/dgl86pzep',
    // cloudinaryApiURL: '/cloud',
    cloudinaryApiKey: '152774418521856',
    cloudinaryApiSecret: 'HrUGT1PiWHS6a0Ds_xU-pp-GtGk'
}
