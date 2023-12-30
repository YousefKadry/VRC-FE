class File2URLUtil {
    static async getURL(file: Blob) {
        return new Promise<string | null>((resolve, reject) => {
            const fileReader = new FileReader();

            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result as string);
            };

            fileReader.onerror = () => {
                reject(fileReader.error);
            };
        });
    }
}

export default File2URLUtil;
