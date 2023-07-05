'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './profile.module.css'
const ImageComponent = ({ userId, token }: any) => {
    const [imageUrl, setImageUrl] = useState('');

    console.log(process.env.API_URL)

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await fetch(`http://localhost:5102/api/Admin/student/${userId}/image`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.ok) {
                    const imageBlob = await response.blob();
                    const imageUrl = URL.createObjectURL(imageBlob);
                    setImageUrl(imageUrl)
                } else {
                    console.error('Failed to fetch image');
                }
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };

        fetchImage();
    }, [userId, token]);
    return (
        <>
            <Image key={imageUrl} src={imageUrl} width={150} height={150} className={styles.roundedImage} alt="User Image" loading='lazy' />
        </>)

};

export default ImageComponent;
