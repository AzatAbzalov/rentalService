import { FullOffer } from "../types/offer";

const offers: FullOffer[] = [
    {
        'id': 'bbb06a0e-3f92-446d-9a68-cb64b5d38e2b',
        'title': 'Wood and stone place',
        'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families.',
        'type': 'apartment',
        'price': 370,
        'images': [
            'apartment-01.jpg',
            'apartment-02.jpg',
            'apartment-03.jpg'
        ],
        city: {
            name: 'Amsterdam',
            location: {
                latitude: 52.370216,
                longitude: 4.895168,
                zoom: 13
            }
        },
        location: {
            latitude: 52.375149,
            longitude: 4.894352,
            zoom: 16
        },
        'goods': [
            'Heating',
            'Wi-Fi',
            'Fridge',
            'Laptop friendly workspace',
            'Baby seat',
            'Air conditioning',
            'Washer',
            'Towels',
            'Dishwasher',
            'Kitchen',
            'Washing machine',
            'Breakfast',
            'Coffee machine'
        ],
        'host': {
            'isPro': true,
            'name': 'Angelina',
            'avatarUrl': 'avatar-angelina.jpg'
        },
        'isPremium': false,
        'isFavorite': true,
        'rating': 4.9,
        'bedrooms': 2,
        'maxAdults': 3
    },

    {
        id: 'd5d8f6d7-3c72-4b3c-9e6a-1d2b3c4d5e6f',
        title: 'Luxury City Loft',
        type: 'hotel',
        price: 450,
        city: {
            name: 'Amsterdam',
            location: {
                latitude: 52.370216,
                longitude: 4.895168,
                zoom: 13
            }
        },
        location: {
            latitude: 52.375149,
            longitude: 4.894352,
            zoom: 16
        },
        isFavorite: false,
        isPremium: true,
        rating: 4.5,
        description: 'Stylish modern apartment in the heart of the city',
        bedrooms: 1,
        goods: [
            'Breakfast',
            'Air conditioning',
            'Towels',
            'Coffee machine'
        ],
        host: {
            isPro: false,
            name: 'Max',
            avatarUrl: 'avatar-max.jpg'
        },
        images: [
            'apartment-small-03.jpg',
            'apartment-small-04.jpg',
            'apartment-03.jpg'
        ],
        maxAdults: 2
    },

    {
        id: 'a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p',
        title: 'Cozy Country House',
        type: 'house',
        price: 280,
        city: {
            name: 'Amsterdam',
            location: {
                latitude: 52.370216,
                longitude: 4.895168,
                zoom: 13
            }
        },
        location: {
            latitude: 52.375149,
            longitude: 4.894352,
            zoom: 16
        },
        isFavorite: true,
        isPremium: true,
        rating: 4.8,
        description: 'Traditional house with modern amenities near nature',
        bedrooms: 3,
        goods: [
            'Washer',
            'Kitchen',
            'Dishwasher',
            'Washing machine'
        ],
        host: {
            isPro: true,
            name: 'Sophie',
            avatarUrl: 'avatar-sophie.jpg'
        },
        images: [
            'room-small.jpg',
            'room.jpg'
        ],
        maxAdults: 5
    },


    {
        id: 'e4f5g6h7-i8j9-k0l1-m2n3-o4p5q6r7s8t',
        title: 'Modern Studio',
        type: 'room',
        price: 120,
        city: {
            name: 'Amsterdam',
            location: {
                latitude: 52.370216,
                longitude: 4.895168,
                zoom: 13
            }
        },
        location: {
            latitude: 52.375149,
            longitude: 4.894352,
            zoom: 16
        },
        isFavorite: false,
        isPremium: false,
        rating: 4.2,
        description: 'Compact and modern studio for solo travelers',
        bedrooms: 1,
        goods: [
            'Wi-Fi',
            'TV',
            'Hair dryer',
            'Iron'
        ],
        host: {
            isPro: false,
            name: 'Alex',
            avatarUrl: 'avatar-alex.jpg'
        },
        images: [
            'studio-01.jpg',
            'studio-photos.jpg'
        ],
        maxAdults: 1
    }
];

export { offers };
