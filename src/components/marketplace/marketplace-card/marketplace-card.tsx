import { Button } from '../../button/button';
import { Icon } from '../../icon/icon';

interface MarketplaceCardProps {
  title: string;
  price: number | 'free';
  children: React.ReactNode;
  className?: string;
  isFavorite: boolean;
  onFavoriteClick?: () => void;
  onDemoClick?: () => void;
  onUseClick?: () => void;
}

export function MarketplaceCard(props: MarketplaceCardProps) {
  const {
    title,
    price,
    children,
    className = '',
    isFavorite,
    onFavoriteClick,
    onDemoClick,
    onUseClick,
  } = props;

  return (
    <div className={`w-full p-4 bg-grey-700 border border-grey-400 rounded-xl group ${className}`}>
      <div className="flex items-center justify-center bg-grey-900 h-[200px] mb-4 relative overflow-hidden rounded-lg">
        <div className="absolute top-0 left-0 w-full h-full bg-black/75 backdrop-blur-sm flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={onFavoriteClick}
            className={`absolute top-2 right-2 w-8 h-8 rounded-full border flex items-center justify-center text-lg transition-colors duration-200 ${
              isFavorite
                ? 'bg-primary-100 text-primary-500 border-primary-100'
                : 'bg-grey-400 border-grey-300 text-grey-100 hover:text-white'
            }`}>
            <Icon name="heart-fill" />
          </button>
          <Button color="secondary" onClick={onDemoClick}>
            Demo
          </Button>
          <Button onClick={onUseClick}>Use it</Button>
        </div>
        {children}
      </div>
      <div className="flex justify-between items-center">
        <h3 className="text-">{title}</h3>
        <h4
          className={`py-1 px-2.5 rounded-full font-bold text-sm ${
            price === 'free' ? 'bg-blue-100 text-blue-900' : 'bg-secondary-500 text-black'
          }`}>
          {price}
          {price === 'free' ? '' : '€'}
        </h4>
      </div>
    </div>
  );
}
