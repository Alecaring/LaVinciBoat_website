import { reactive } from "vue";
export const storeData = reactive({

    isActive: false,
    flag: true,
    datasPortfolioCards: [
        {
          where: 'Polignano',
          img: 'https://www.grottapalazzese.it/wp-content/uploads/2019/06/Grotta-esterno-x-camere.jpg',
          title: 'Polignano',
          description: 'Polignano Description',
          price4h: '900',
          price6h: '1200',
          priceNight: '2000',
          brand: 'La Vinci Yacht'
        },
        {
          where: 'Leuca',
          img: 'https://tourismmedia.italia.it/is/image/mitur/20220404110036-santa-maria-di-leuca-puglia-shutterstock-685007158?wid=1080&hei=660&fit=constrain,1&fmt=webp',
          title: 'Leuca',
          description: 'Myconos Description',
          price4h: '900',
          price6h: '1200',
          priceNight: '2000',
          brand: 'La Vinci Yacht'

        },
        {
          where: 'Otranto',
          img: 'https://images.placesonline.com/photos/otranto_guida__1613587620.jpg',
          title: 'Otranto',
          description: 'Zante Description',
          price4h: '900',
          price6h: '1200',
          priceNight: '2000',
          brand: 'La Vinci Yacht'

        },
        {
          where: 'Isole Tremiti',
          img: 'https://www.puglia.com/wp-content/uploads/2020/09/cala-pagliai-isole-tremiti-1200x796.jpg',
          title: 'Isole Tremiti',
          description: 'Isole Tremiti Description',
          price4h: '900',
          price6h: '1200',
          priceNight: '2000',
          brand: 'La Vinci Yacht'

        },
        {
          where: 'Gallipoli',
          img: 'https://www.dltviaggi.it/immagine/28190/w_854-h_569/gallipoli.jpg',
          title: 'Gallipoli',
          description: 'Gallipoli Description',
          price4h: '900',
          price6h: '1200',
          priceNight: '2000',
          brand: 'La Vinci Yacht'

        }
      ],

});