import React, { useState, useRef } from 'react';

import ImagePreview from './ImagePreview';
import ImagePickerActions from './ImagePickerActions';

import File2URLUtil from '../../../../utilities/file2url';

const ImagePicker: React.FC<{
    defaultImagePreviewURL?: string;
    getImageHandler: (image: File) => void;
}> = (props) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [imagePreviewURL, setImagePreviewURL] = useState<string>(props.defaultImagePreviewURL || '');
    const [imageFileValue, setImageFileValue] = useState<string>('');
    const [imageFile, setImageFile] = useState<File | null>(null);

    const handleImagePickerOpening = () => {
        fileInputRef.current?.click();
    };

    const handleImagePicking = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const image = event.target.files?.item(0);

        if (!image) {
            return;
        }

        const imageURL = await File2URLUtil.getURL(image);

        setImagePreviewURL(imageURL || '');
        setImageFileValue(event.target.value);
        setImageFile(image);
    };

    const handleSelectedImageConfirming = () => {
        props.getImageHandler(imageFile!);
        setImageFile(null);
        setImageFileValue('');
    };

    const handleSelectedImageRemoving = () => {
        setImagePreviewURL('');
        setImageFileValue('');
        setImageFile(null);
    };

    return (
        <div className="w-full items-center">
            <ImagePreview imagePreviewURL={imagePreviewURL} />

            <ImagePickerActions
                isThereSelectedImage={!!imageFile}
                openImagePickerHandler={handleImagePickerOpening}
                confirmSelectedImageHandler={handleSelectedImageConfirming}
                clearSelectedImageHandler={handleSelectedImageRemoving}
            />

            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                value={imageFileValue}
                hidden
                onChange={handleImagePicking}
            />
        </div>
    );
};

export default ImagePicker;
