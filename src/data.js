import { v4 as uuidv4 } from 'uuid';

function chillHop() {
  return [
    {
      name: 'Far From Home',
      artist: 'Toonorth',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/ad7fc4dda66ba986466fd2b1c416b0b12411ee28-1024x1024.jpg',
      id: uuidv4(),
      active: true,
      color: ['#74A998', '#2C2439'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=7814',
    },
    {
      name: 'Ocean Patio',
      artist: 'Philanthrope, Dayle',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/04/35a95878437b99e3384b023504b89403ae169707-1024x1024.jpg',
      id: uuidv4(),
      active: false,
      color: ['#B6D6E1', '#E14527'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=8036',
    },
    {
      name: 'Fuzz',
      artist: 'Miscél',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/edaf1202cf33c7a2a122b7494a7e4d3e643af45f-1024x1024.jpg',
      id: uuidv4(),
      active: false,
      color: ['#AD496F', '#F5BD5C'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=8147',
    },
    {
      name: '1999',
      artist: 'sadtoi',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/05/299ed90790252c3b19e0b5ca350d1cf3a9c30436-1024x1024.jpg',
      id: uuidv4(),
      active: false,
      color: ['#BC744A', '#869982'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=9454',
    },
    {
      name: 'Dusk',
      artist: 'Blue Wednesday, Aso',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/58028b4ad62050072228e4c833916e5512772399-1024x1024.jpg',
      id: uuidv4(),
      active: false,
      color: ['#2C2A46', '#E28890'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=8131',
    },
    {
      name: 'Skyrate',
      artist: 'invention_',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/b4893c737d3679258aa411c1ea237a870540de3b-1024x1024.jpg',
      id: uuidv4(),
      active: false,
      color: ['#EAEBF0', '#07090B'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=9201',
    },
    {
      name: 'All Us',
      artist: 'Nofeels, Nokiaa',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/3e6ac8830ae47dd62696ed28d127c9525d6d90f2-1024x1024.jpg',
      id: uuidv4(),
      active: false,
      color: ['#F3B34E', '#8692A1'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=8781',
    },
  ];
}

export default chillHop;
