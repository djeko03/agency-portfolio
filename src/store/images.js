import {makeAutoObservable} from "mobx";
import {data} from '../mock/data';

class Images {

    dataImages = [...data]
    allImages = []
    currentImages = []

    count = 9

    constructor() {
        makeAutoObservable(this)
    }

    showAll() {
        this.allImages = [...this.dataImages]
        this.currentImages = []
        for (let i = 0; i < 9; i++) {
            this.currentImages.push(this.dataImages[i])
        }
    }

    showCategory(name) {
        try {
            let result = []
            this.currentImages = []
            result = this.dataImages.filter((el) => el.category === name)
            this.allImages = [...result]
            if (result.length >= 9) {
                for (let i = 0; i < 9 ; i++) {
                    this.currentImages.push(result[i])
                }
            } else {
                for (let i = 0; i < result.length ; i++) {
                    this.currentImages.push(result[i])
                }
            }
            return this.currentImages
        } catch (e) {
            console.log(e)
        }
    }

    loadMore() {
        try {
            this.count += 9
            let result = []
            if (this.allImages.length < this.count) {
                for (let i = 0; i < this.allImages.length; i++) {
                    result.push(this.allImages[i])
                }
            } else {
                for (let i = 0; i < this.count; i++) {
                    result.push(this.allImages[i])
                }
            }
            this.currentImages = [...result]
            return this.currentImages
        } catch (e) {
            console.log(e)
        }
    }

    delete(id) {
        try {
            this.dataImages = this.dataImages.filter((el) => el.id !== id)
            this.allImages = this.allImages.filter((el) => el.id !== id)
            this.currentImages = this.currentImages.filter((el) => el.id !== id)
            return this.currentImages
        } catch (e) {
            console.log(e)
        }
    }

}

export default new Images()