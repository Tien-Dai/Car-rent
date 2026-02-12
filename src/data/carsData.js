const cars = [
  {
    id: 1,
    name: "Koenigsegg",
    type: "Sport",
    price: 99,
    fuel: "90L",
    transmission: "Manual",
    people: "2 People",
    image : "/img/car1.png",
  },
  {
    id: 2,
    name: "Nissan GT-R",
    type: "Sport",
    price: 80,
    fuel: "80L",
    transmission: "Manual",
    people: "2 People",
    image : "/img/car2.png",
  },
  {
    id: 3,
    name: "Rolls Royce",
    type: "Sedan",
    price: 96,
    fuel: "70L",
    transmission: "Auto",
    people: "4 People",
    image : "/img/car3.png",
  },
  {
    id: 4,
    name: "Rolls Royce",
    type: "Sedan",
    price: 96,
    fuel: "70L",
    transmission: "Auto",
    people: "4 People",
    image : "/img/car2.png",
  },
];

const Recomendcars = [
  {
    id: 5,
    name: "All New Rush",
    type: "Sport",
    price: 99,
    fuel: "90L",
    transmission: "Manual",
    people: "2 People",
    image : "/img/car4.png",
  },
  {
    id: 6,
    name: "CR - V",
    type: "SUV",
    price: 80,
    fuel: "80L",
    transmission: "Manual",
    people: "6 People",
    image : "/img/car5.png",
  },
  {
    id: 7,
    name: "All New Terios",
    type: "SUV",
    price: 74,
    fuel: "90L",
    transmission: "Auto",
    people: "6 People",
    image : "/img/car6.png",
  },
  {
    id: 8,
    name: "Rolls Royce",
    type: "Sedan",
    price: 96,
    fuel: "70L",
    transmission: "Auto",
    people: "4 People",
    image : "/img/car5.png",
  },
  {
    id: 9,
    name: "MG ZX Exclusice",
    type: "Hatchback",
    price: 99,
    fuel: "90L",
    transmission: "Manual",
    people: "2 People",
    image : "/img/car7.png",
  },
  {
    id: 10,
    name: "New MG ZS",
    type: "SUV",
    price: 80,
    fuel: "80L",
    transmission: "Manual",
    people: "2 People",
    image : "/img/car8.png",
  },
  {
    id: 11,
    name: "MG ZX Excite",
    type: "Hatchback",
    price: 96,
    fuel: "70L",
    transmission: "Auto",
    people: "4 People",
    image : "/img/car7.png",
  },
  {
    id: 12,
    name: "New MG ZS",
    type: "Sedan",
    price: 96,
    fuel: "70L",
    transmission: "Auto",
    people: "4 People",
    image : "/img/car8.png",
  },
];
const allCars = [
  {
    id: 1,
    name: "Koenigsegg",
    type: "Sport",
    price: 99,
    fuel: "90L",
    transmission: "Manual",
    people: "2 People",
    image : "/img/car1.png",
    description:
      "Koenigsegg is a high-performance sports car designed for speed and luxury. Perfect for those who love power and elegance.",

    rating: 4.5,

    reviews: [
      {
        id: 1,
        name: "Alex Stanton",
        role: "CEO at Bukalapak",
        date: "21 July 2022",
        rating: 4,
        comment:
          "Amazing car and very comfortable. The service was excellent and staff were very friendly.",
      },
      {
        id: 2,
        name: "Skylar Dias",
        role: "CEO at Amazon",
        date: "20 July 2022",
        rating: 5,
        comment:
          "Very smooth driving experience. Great condition and affordable price.",
      },
    ],
  },
  {
    id: 2,
    name: "Nissan GT-R",
    type: "Sport",
    price: 80,
    fuel: "80L",
    transmission: "Manual",
    people: "2 People",
    image : "/img/car2.png",
    description:
      "Koenigsegg is a high-performance sports car designed for speed and luxury. Perfect for those who love power and elegance.",

    rating: 4.5,

    reviews: [
      {
        id: 1,
        name: "Alex Stanton",
        role: "CEO at Bukalapak",
        date: "21 July 2022",
        rating: 4,
        comment:
          "Amazing car and very comfortable. The service was excellent and staff were very friendly.",
      },
      {
        id: 2,
        name: "Skylar Dias",
        role: "CEO at Amazon",
        date: "20 July 2022",
        rating: 5,
        comment:
          "Very smooth driving experience. Great condition and affordable price.",
      },
    ],
  },
  {
    id: 3,
    name: "Rolls Royce",
    type: "Sedan",
    price: 96,
    fuel: "70L",
    transmission: "Auto",
    people: "4 People",
    image : "/img/car3.png",
    description:
      "Koenigsegg is a high-performance sports car designed for speed and luxury. Perfect for those who love power and elegance.",

    rating: 4.5,

    reviews: [
      {
        id: 1,
        name: "Alex Stanton",
        role: "CEO at Bukalapak",
        date: "21 July 2022",
        rating: 4,
        comment:
          "Amazing car and very comfortable. The service was excellent and staff were very friendly.",
      },
      {
        id: 2,
        name: "Skylar Dias",
        role: "CEO at Amazon",
        date: "20 July 2022",
        rating: 5,
        comment:
          "Very smooth driving experience. Great condition and affordable price.",
      },
    ],
  },
  {
    id: 4,
    name: "Rolls Royce",
    type: "Sedan",
    price: 96,
    fuel: "70L",
    transmission: "Auto",
    people: "4 People",
    image : "/img/car2.png",
    description:
      "Koenigsegg is a high-performance sports car designed for speed and luxury. Perfect for those who love power and elegance.",

    rating: 4.5,

    reviews: [
      {
        id: 1,
        name: "Alex Stanton",
        role: "CEO at Bukalapak",
        date: "21 July 2022",
        rating: 4,
        comment:
          "Amazing car and very comfortable. The service was excellent and staff were very friendly.",
      },
      {
        id: 2,
        name: "Skylar Dias",
        role: "CEO at Amazon",
        date: "20 July 2022",
        rating: 5,
        comment:
          "Very smooth driving experience. Great condition and affordable price.",
      },
    ],
  },
  {
    id: 5,
    name: "All New Rush",
    type: "Sport",
    price: 99,
    fuel: "90L",
    transmission: "Manual",
    people: "2 People",
    image : "/img/car4.png",
    description:
      "Koenigsegg is a high-performance sports car designed for speed and luxury. Perfect for those who love power and elegance.",

    rating: 4.5,

    reviews: [
      {
        id: 1,
        name: "Alex Stanton",
        role: "CEO at Bukalapak",
        date: "21 July 2022",
        rating: 4,
        comment:
          "Amazing car and very comfortable. The service was excellent and staff were very friendly.",
      },
      {
        id: 2,
        name: "Skylar Dias",
        role: "CEO at Amazon",
        date: "20 July 2022",
        rating: 5,
        comment:
          "Very smooth driving experience. Great condition and affordable price.",
      },
    ],
  },
  {
    id: 6,
    name: "CR - V",
    type: "SUV",
    price: 80,
    fuel: "80L",
    transmission: "Manual",
    people: "6 People",
    image : "/img/car5.png",
    description:
      "Koenigsegg is a high-performance sports car designed for speed and luxury. Perfect for those who love power and elegance.",

    rating: 4.5,

    reviews: [
      {
        id: 1,
        name: "Alex Stanton",
        role: "CEO at Bukalapak",
        date: "21 July 2022",
        rating: 4,
        comment:
          "Amazing car and very comfortable. The service was excellent and staff were very friendly.",
      },
      {
        id: 2,
        name: "Skylar Dias",
        role: "CEO at Amazon",
        date: "20 July 2022",
        rating: 5,
        comment:
          "Very smooth driving experience. Great condition and affordable price.",
      },
    ],
  },
  {
    id: 7,
    name: "All New Terios",
    type: "SUV",
    price: 74,
    fuel: "90L",
    transmission: "Auto",
    people: "6 People",
    image : "/img/car6.png",
    description:
      "Koenigsegg is a high-performance sports car designed for speed and luxury. Perfect for those who love power and elegance.",

    rating: 4.5,

    reviews: [
      {
        id: 1,
        name: "Alex Stanton",
        role: "CEO at Bukalapak",
        date: "21 July 2022",
        rating: 4,
        comment:
          "Amazing car and very comfortable. The service was excellent and staff were very friendly.",
      },
      {
        id: 2,
        name: "Skylar Dias",
        role: "CEO at Amazon",
        date: "20 July 2022",
        rating: 5,
        comment:
          "Very smooth driving experience. Great condition and affordable price.",
      },
    ],
  },
  {
    id: 8,
    name: "Rolls Royce",
    type: "Sedan",
    price: 96,
    fuel: "70L",
    transmission: "Auto",
    people: "4 People",
    image : "/car5.png",
    description:
      "Koenigsegg is a high-performance sports car designed for speed and luxury. Perfect for those who love power and elegance.",

    rating: 4.5,

    reviews: [
      {
        id: 1,
        name: "Alex Stanton",
        role: "CEO at Bukalapak",
        date: "21 July 2022",
        rating: 4,
        comment:
          "Amazing car and very comfortable. The service was excellent and staff were very friendly.",
      },
      {
        id: 2,
        name: "Skylar Dias",
        role: "CEO at Amazon",
        date: "20 July 2022",
        rating: 5,
        comment:
          "Very smooth driving experience. Great condition and affordable price.",
      },
    ],
  },
  {
    id: 9,
    name: "MG ZX Exclusice",
    type: "Hatchback",
    price: 99,
    fuel: "90L",
    transmission: "Manual",
    people: "2 People",
    image : "/img/car7.png",
    description:
      "Koenigsegg is a high-performance sports car designed for speed and luxury. Perfect for those who love power and elegance.",

    rating: 4.5,

    reviews: [
      {
        id: 1,
        name: "Alex Stanton",
        role: "CEO at Bukalapak",
        date: "21 July 2022",
        rating: 4,
        comment:
          "Amazing car and very comfortable. The service was excellent and staff were very friendly.",
      },
      {
        id: 2,
        name: "Skylar Dias",
        role: "CEO at Amazon",
        date: "20 July 2022",
        rating: 5,
        comment:
          "Very smooth driving experience. Great condition and affordable price.",
      },
    ],
  },
  {
    id: 10,
    name: "New MG ZS",
    type: "SUV",
    price: 80,
    fuel: "80L",
    transmission: "Manual",
    people: "2 People",
    image : "/img/car8.png",
    description:
      "Koenigsegg is a high-performance sports car designed for speed and luxury. Perfect for those who love power and elegance.",

    rating: 4.5,

    reviews: [
      {
        id: 1,
        name: "Alex Stanton",
        role: "CEO at Bukalapak",
        date: "21 July 2022",
        rating: 4,
        comment:
          "Amazing car and very comfortable. The service was excellent and staff were very friendly.",
      },
      {
        id: 2,
        name: "Skylar Dias",
        role: "CEO at Amazon",
        date: "20 July 2022",
        rating: 5,
        comment:
          "Very smooth driving experience. Great condition and affordable price.",
      },
    ],
  },
  {
    id: 11,
    name: "MG ZX Excite",
    type: "Hatchback",
    price: 96,
    fuel: "70L",
    transmission: "Auto",
    people: "4 People",
    image : "/img/car7.png",
    description:
      "Koenigsegg is a high-performance sports car designed for speed and luxury. Perfect for those who love power and elegance.",

    rating: 4.5,

    reviews: [
      {
        id: 1,
        name: "Alex Stanton",
        role: "CEO at Bukalapak",
        date: "21 July 2022",
        rating: 4,
        comment:
          "Amazing car and very comfortable. The service was excellent and staff were very friendly.",
      },
      {
        id: 2,
        name: "Skylar Dias",
        role: "CEO at Amazon",
        date: "20 July 2022",
        rating: 5,
        comment:
          "Very smooth driving experience. Great condition and affordable price.",
      },
    ],
  },
  {
    id: 12,
    name: "New MG ZS",
    type: "Sedan",
    price: 96,
    fuel: "70L",
    transmission: "Auto",
    people: "4 People",
    image : "/img/car8.png",
    description:
      "Koenigsegg is a high-performance sports car designed for speed and luxury. Perfect for those who love power and elegance.",

    rating: 4.5,

    reviews: [
      {
        id: 1,
        name: "Alex Stanton",
        role: "CEO at Bukalapak",
        date: "21 July 2022",
        rating: 4,
        comment:
          "Amazing car and very comfortable. The service was excellent and staff were very friendly.",
      },
      {
        id: 2,
        name: "Skylar Dias",
        role: "CEO at Amazon",
        date: "20 July 2022",
        rating: 5,
        comment:
          "Very smooth driving experience. Great condition and affordable price.",
      },
    ],
  },
];
export { allCars};
export { Recomendcars };
export default cars;


