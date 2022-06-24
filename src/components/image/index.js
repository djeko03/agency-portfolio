import React, {useState} from 'react';
import css from './index.module.css'
import cn from 'classnames'
import images from "../../store/images";

export const Image = ({
    image,
                      }) => {
    const [imageSelected, setImageSelected] = useState(false)

    const handleClick = () => {
        setImageSelected(!imageSelected)
    }

    const handleDelete = () => {
        if (imageSelected) {
            images.delete(image.id)
        }
    }

    const handleShowCategory = () => images.showCategory(image.category)


    return (
        <div className={css.container}>
            <img onClick={handleClick} className={cn(css.image, imageSelected ? css.green : '')} src={image.url} alt=""/>
            <div className={css.content}>
                <button onClick={handleShowCategory} className={css.button}>{image.category}</button>
                <p className={css.name}>{image.name}</p>
            </div>
            <button className={cn(css.delete, imageSelected ? css.deleteSelected : '')} onClick={handleDelete}>Del</button>
        </div>
    );
};
