import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import '../styles/CustomImageGallery.css';

const CustomImageGallery = ({ images }) => {
    const formattedImages = images.map((image) => ({
        original: image,
        thumbnail: image,
    }));

    return (
        <div className="custom-image-gallery-container">
            <div className="custom-image-gallery">
                <ImageGallery
                    items={formattedImages}
                    showThumbnails={true}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    useBrowserFullscreen={false}
                    infinite={true}
                />
            </div>
        </div>
    );
};

export default CustomImageGallery;
