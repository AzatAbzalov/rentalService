import { OffersList } from "../types/offer";

export const offersList : OffersList[] = [
    {
        'id': 'bbb06a0e-3f92-446d-9a68-cb64b5d38e2b',
        'title': 'Wood and stone place',
        'type': 'apartment',
        'price': 370,
        'previewImage': 'apartment-01.jpg',
        'city': {
            'name': 'Amsterdam',
            'location': {
                'latitude': 52.370216,
                'longitude': 4.895168,
                'zoom': 13
            }
        },
        'location': {
            'latitude': 52.3909553943508,
            'longitude': 4.85309666406198,
            'zoom': 16
        },
        'isFavorite': true,
        'isPremium': false,
        'rating': 4.9
    },

    {
        id: 'd5d8f6d7-3c72-4b3c-9e6a-1d2b3c4d5e6f',
        title: 'Luxury City Loft',
        type: 'hotel',
        price: 450,
        previewImage: 'apartment-02.jpg',
        city: {
            name: 'Amsterdam',
            location: {
            'latitude': 52.3909553943508,
            'longitude': 4.85309666406198,
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
    },

    {
        id: 'a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p',
        title: 'Cozy Country House',
        type: 'house',
        price: 280,
        previewImage: 'apartment-03.jpg',
        city: {
            name: 'Amsterdam',
            location: {
                latitude: 52.370216,
                longitude: 4.895168,
                zoom: 13
            }
        },
        location: {
            latitude: 52.3909553943508,
            longitude: 4.929309666406198,
            zoom: 16
        },
        isFavorite: true,
        isPremium: true,
        rating: 4.8,
    },

    {
        id: 'e4f5g6h7-i8j9-k0l1-m2n3-o4p5q6r7s8t',
        title: 'Modern Studio',
        type: 'room',
        price: 120,
        previewImage: 'room.jpg',
        city: {
            name: 'Amsterdam',
            location: {
                latitude: 52.370216,
                longitude: 4.895168,
                zoom: 13
            }
        },
        location: {
            latitude: 52.3809553943508,
            longitude: 4.939309666406198,
            zoom: 16
        },
        isFavorite: false,
        isPremium: false,
        rating: 4.2,
    }
]
