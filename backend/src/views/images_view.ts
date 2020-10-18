import Image from "../database/models/Image";

export default {
    render(image: Image) {
        return {
            id: image.id,
            url: `http://192.168.100.92:3333/uploads/${image.path}`,
        }
    },

    renderMany(images: Image[]){
        return images.map(image => this.render(image));
    }
}