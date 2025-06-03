import { Review } from "../types/review";

const reviews : Review[] = [
    {
        'id': '463623e8-eecc-42a2-b2fc-797a299b5230',
        'comment': 'The room was spacious and clean. The pool looked nothing like the photos.',
        'date': '2023-06-29T21:00:00.465Z',
        'rating': 4,
        'user': {
            'name': 'Isaac',
            'avatarUrl': 'avatar-max.jpg',
            'isPro': true
        }
    },

    {
        'id': '463623e8-eecc-42a2-b2fc-799b899c9430',
        'comment': 'Nice Place. Pretty good for lonely people.',
        'date': '2023-10-01T09:00:00.465Z',
        'rating': 5,
        'user': {
            'name': 'Katrin',
            'avatarUrl': 'avatar-angelina.jpg',
            'isPro': false
        }
    }
];

export { reviews };
