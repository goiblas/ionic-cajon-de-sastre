export interface Eventmodel {
    title: string;
    image: string;
    description: string;
    place: string;
    date?: Date;
}

export class Events implements Eventmodel {
    constructor (
        public title: string,
        public image: string,
        public description: string,
        public place: string,
        public date?: Date
    ){}
}

export const allEvents = [
    new Events(
        'Titulo',
        'https://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png',
        'description',
        'Logroño',
        new Date( Date.now() - 10000) ),
    new Events(
        'Titulo2',
        'https://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png',
        'description2',
        'Logroño',
        new Date( Date.now()) ),
    new Events(
        'Titulo',
        'https://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png',
        'description',
        'Logroño',
        new Date( Date.now() - 290000) )
]