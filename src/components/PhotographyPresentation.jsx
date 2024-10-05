import React from 'react';
import CustomImageGallery from './CustomImageGallery';

const PhotographyPresentation = ({ data }) => {
    return (
        <div>
            <CustomImageGallery images={data.images} />
        </div>
    );
};

export default PhotographyPresentation;