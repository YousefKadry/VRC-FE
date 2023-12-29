import React from 'react';

import CustomButton from '../../../shared/Button';

import CheckIcon from '../../../../assets/icons/check-solid.svg?react';
import TrashIcon from '../../../../assets/icons/trash-solid.svg?react';

const ImagePickerActions: React.FC<{
    isThereSelectedImage: boolean;
    openImagePickerHandler?: () => void;
    confirmSelectedImageHandler?: () => void;
    clearSelectedImageHandler?: () => void;
}> = (props) => {
    const {
        isThereSelectedImage,
        openImagePickerHandler,
        confirmSelectedImageHandler,
        clearSelectedImageHandler,
    } = props;

    return (
        <div className="flex gap-3 mt-8">
            {isThereSelectedImage && (
                <CustomButton
                    className="from-white to-white text-[#501794] w-fit"
                    onClick={confirmSelectedImageHandler}
                >
                    <CheckIcon width={20} height={22} />
                </CustomButton>
            )}

            <CustomButton onClick={openImagePickerHandler} className="from-[#501794] to-[#7E5DAF]">
                Upload Image
            </CustomButton>

            {isThereSelectedImage && (
                <CustomButton
                    className="from-white to-white text-[#501794] w-fit"
                    onClick={clearSelectedImageHandler}
                >
                    <TrashIcon width={17} height={19} />
                </CustomButton>
            )}
        </div>
    );
};

export default ImagePickerActions;
