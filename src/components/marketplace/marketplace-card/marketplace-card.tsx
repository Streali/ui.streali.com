import { Button } from '../../button/button';
import { Icon } from '../../icon/icon';
import { Tooltip } from '../../tooltip/tooltip';

interface MarketplaceCardProps {
  title: string;
  price: number | 'free';
  children: React.ReactNode;
  className?: string;
  isFavorite: boolean;
  username: string;
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
    username,
  } = props;

  return (
    <div className={className}>
      <div className={`w-full p-4 bg-grey-700 border border-grey-400 rounded-xl group`}>
        <div className="flex items-center justify-center bg-grey-900 aspect-[4/3] relative overflow-hidden rounded-lg">
          {children}
        </div>
      </div>
      <div className="bg-grey-800 rounded-xl p-4 mt-2">
        <div className="flex items-center justify-between pb-2 border-b border-grey-400 mb-2">
          <div>
            <h5 className="text-grey-100">@{username}</h5>
            <h3 className="text-xl">{title}</h3>
          </div>
          <Tooltip content="Add to favorite">
            <button
              onClick={onFavoriteClick}
              className={`top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center text-lg transition-colors duration-200 ${
                isFavorite
                  ? 'bg-primary-100 text-primary-500'
                  : 'bg-grey-400 text-grey-100 hover:text-white'
              }`}>
              <Icon name="heart-fill" />
            </button>
          </Tooltip>
        </div>
        <div className="flex justify-between items-center">
          <h4 className={`text-xl ${price === 'free' ? 'text-blue-300' : 'text-secondary-500'}`}>
            {price}
            {price === 'free' ? '' : '€'}
          </h4>
          <div className="flex gap-2">
            <Tooltip content="Demo">
              <Button iconLeft="play-fill" color="stroke" onClick={onDemoClick} />
            </Tooltip>
            <Button
              onClick={onUseClick}
              iconLeft={price === 'free' ? 'add-fill' : 'shopping-cart-2-fill'}>
              {price === 'free' ? 'Use it' : 'Buy'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
