import { Review, ReviewType } from "../review/review";

type ReviewListProps = {
    reviews: ReviewType[];
};

function ReviewList({ reviews }: ReviewListProps){
    return (
        <>
        <h2 className="reviews__title">Reviews . <span className="reviews__amount">{reviews.length}</span></h2>
        <ul className="reviews__list">
            {reviews.map((review) => (
                <Review key={review.id} {...review}/>
            ))}
        </ul>
        </>
    );
}

export { ReviewList }