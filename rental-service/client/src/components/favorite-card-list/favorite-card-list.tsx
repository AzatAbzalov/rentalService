import { FavoriteCard } from '../favorite-card/favorite-card';

export type FavoriteOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  rating: number;
  isPremium: boolean;
  city: string;
};

type FavoriteCardListProps = {
  favorites: FavoriteOffer[];
};

function FavoriteCardList({ favorites }: FavoriteCardListProps) {
  const groupedByCity = favorites.reduce<Record<string, FavoriteOffer[]>>((acc, offer) => {
    if (!acc[offer.city]) {
      acc[offer.city] = [];
    }
    acc[offer.city].push(offer);
    return acc;
  }, {});

  return (
    <ul className="favorites__list">
      {Object.entries(groupedByCity).map(([city, offers]) => (
        <li key={city} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <span className="locations__item-link">
                <span>{city}</span>
              </span>
            </div>
          </div>
          <div className="favorites__places">
            {offers.map((offer) => (
              <FavoriteCard key={offer.id} {...offer} />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

export { FavoriteCardList };
