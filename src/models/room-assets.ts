export interface IRoomAssetsSearchInfo {
    q: string;
    pageNumber: number;
    pageSize: number;
    hasNext: boolean;
    allowFetchingNextPage: boolean;
}

export interface IRoomAssetsInfo<AssetsType> {
    searchInfo: IRoomAssetsSearchInfo;
    items: Array<AssetsType>;
}

export interface IRoomAssetsItem {
    name: string;
    thumbnailUrl: string;
}

export interface IRoomGLTF extends IRoomAssetsItem {
    gltfUrl: string;
}

export interface IRoomHDRI extends IRoomAssetsItem {
    hdriUrl: string;
}
