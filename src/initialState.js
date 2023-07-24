import { v4 as uuidv4 } from 'uuid';
export default {
  buyer:[],
  order: [],
  cart: [],
  products: [
    {
      id: uuidv4(),
      image: 'https://arepa.s3.amazonaws.com/camiseta.png',
      title: 'Camiseta',
      price: 25,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: uuidv4(),
      image: 'https://arepa.s3.amazonaws.com/mug.png',
      title: 'Mug',
      price: 10,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: uuidv4(),
      image: 'https://arepa.s3.amazonaws.com/pin.png',
      title: 'Pin',
      price: 4,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: uuidv4(),
      image: 'https://arepa.s3.amazonaws.com/stickers1.png',
      title: 'Stickers',
      price: 2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: uuidv4(),
      image: 'https://arepa.s3.amazonaws.com/stickers2.png',
      title: 'Stickers',
      price: 2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: uuidv4(),
      image: 'https://arepa.s3.amazonaws.com/hoodie.png',
      title: 'Hoodie',
      price: 35,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: uuidv4(),
      image: 'https://arepa.s3.amazonaws.com/camiseta.png',
      title: 'Camiseta',
      price: 25,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: uuidv4(),
      image: 'https://arepa.s3.amazonaws.com/mug.png',
      title: 'Mug',
      price: 10,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
  ],
};
