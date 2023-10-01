import { Button } from '../../button/button';
//import { Icon } from '../../icon/icon';

interface MarketplaceCardProps {
  title: string;
  price: number;
  priceFormatted: string;
  children: React.ReactNode;
  className?: string;
  //isFavorite: boolean;
  coverUrl: string;
  link: string;
  //onFavoriteClick?: () => void;
  onDemoClick?: () => void;
}

export function MarketplaceCard(props: MarketplaceCardProps) {
  const {
    title,
    price,
    children,
    className = '',
    //isFavorite,
    priceFormatted,
    link,
    coverUrl,
    //onFavoriteClick,
    onDemoClick,
  } = props;

  return (
    <a href={link} className={`group ${className}`}>
      <div className="w-full aspect-[4/3] relative overflow-hidden rounded-lg mb-3">
        {/* <button
          onClick={onFavoriteClick}
          className={`top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center text-lg transition-colors duration-200 absolute z-10 ${
            isFavorite
              ? 'bg-primary-100 text-primary-500'
              : 'bg-grey-400 text-grey-200 hover:text-white'
          }`}>
          <Icon name="heart-fill" />
        </button> */}
        <img
          src={coverUrl}
          alt={title}
          className="object-cover group-hover:opacity-0 transition-opacity duration-150"
        />
        <div className="absolute top-0 left-0 bg-grey-900 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-150">
          {children}
        </div>
        <div className="absolute flex gap-3 z-10 -bottom-20 left-2 w-[calc(100%_-_16px)] p-2 bg-grey-700 rounded-lg group-hover:bottom-2 transition-all duration-300">
          <Button
            iconLeft="play-fill"
            color="stroke"
            className="flex-1"
            onClick={(e) => {
              e.preventDefault();
              onDemoClick && onDemoClick();
            }}>
            Try
          </Button>
          <Button className="flex-1" iconLeft={price === 0 ? 'add-fill' : 'shopping-cart-2-fill'}>
            {price === 0 ? 'Use it' : 'Buy'}
          </Button>
        </div>
      </div>
      <div className="flex justify-between gap-3">
        <h3 className="text-lg truncate flex-1">{title}</h3>
        <h4 className={`${price === 0 ? 'text-blue-500' : 'text-secondary-500'} text-lg`}>
          {price === 0 ? 'Free' : priceFormatted}
        </h4>
      </div>
    </a>
  );
}
