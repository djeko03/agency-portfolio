import React, {useEffect} from 'react';
import css from './index.module.css'
import {Header} from "../header";
import {Image} from "../image";
import images from "../../store/images";
import {observer} from "mobx-react-lite";


export const MainPage = observer(() => {

    useEffect(() => {
        images.showAll()
    }, [])

    const handleLoadMore = () => images.loadMore()

    const handleChooseCountries = (e) => {
        if (e.target.value === 'Show All'){
            images.showAll()
        } else {
            images.showCategory(e.target.value)
        }
    }
 

    return (
        <div>
            <section className={css.about}>
                <Header/>
                <h1 className={css.title}>Portfolio</h1>
                <p className={css.text}>Agency provides a full service range including technical skills, design, business understanding.</p>
            </section>
            <main className={css.main}>
                <section className={css.container}>

                    <div className={css.select}>
                        <p onClick={() => images.showAll()}>Show All</p>
                        <p onClick={() => images.showCategory('Design')}>Design</p>
                        <p onClick={() => images.showCategory('Branding')}>Branding</p>
                        <p onClick={() => images.showCategory('Illustration')}>Illustration</p>
                        <p onClick={() => images.showCategory('Motion')}>Motion</p>
                    </div>

                    <div className={css.selectsWrapper}>
                        <select className={css.selects} name="categories" onChange={handleChooseCountries} defaultValue="Show All">
                            <option onClick={() => images.showAll()} value="Show All">Show All</option>
                            <option onClick={() => images.showCategory('Design')} value="Design">Design</option>
                            <option value="Branding">Branding</option>
                            <option value="Illustration">Illustration</option>
                            <option value="Motion">Motion</option>
                        </select>
                    </div>
                    

                    <div className={css.images}>
                        {images.currentImages ? images.currentImages.map(image => <Image key={image.name} image={image}/>) : ''}
                    </div>

                    <div className={css.loadWrapper}>
                        <button className={css.load} onClick={handleLoadMore}>Load more</button>
                    </div>

                </section>
            </main>
        </div>
    );
});

