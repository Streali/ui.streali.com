import { Fragment } from 'react';
import { Icon } from '../../icon/icon';
import { Text } from '../../text/text';
import { Modal } from '../../modal/modal';

interface Provider {
  name: string;
  icon: string;
  iconClassName?: string;
  link?: string;
  category: string;
  modal?: {
    title: string;
    content: React.ReactNode;
  };
}

interface Props {
  title: string;
  text: React.ReactNode;
  providers: Provider[];
  disabledProviders: string[];
  currentCategory?: string;
}

const triggerClassName =
  'w-10 h-10 rounded bg-grey-800 border border-grey-400 flex items-center justify-center hover:bg-grey-400 transition-colors duration-200 text-xl';

export function SocialProviderList(props: Props) {
  const { title, text, providers, disabledProviders, currentCategory } = props;

  const filteredProviders = currentCategory
    ? providers.filter((p) => p.category === currentCategory)
    : providers;

  return (
    <div className="p-4 bg-grey-800 border border-grey-400 rounded-lg">
      <h3>
        <Text type="h2">{title}</Text>
      </h3>
      <p className="text-grey-100 mb-3">
        <Text type="medium">{text}</Text>
      </p>
      <div className="flex gap-2">
        {filteredProviders
          .filter((p) => !disabledProviders.includes(p.name))
          .map((provider, index) => (
            <Fragment key={provider.name}>
              {provider.modal ? (
                <ProviderModal {...provider} />
              ) : (
                <a href={provider.link} className={triggerClassName}>
                  <Icon name={provider.icon} className={provider.iconClassName} />
                </a>
              )}
            </Fragment>
          ))}
      </div>
    </div>
  );
}

function ProviderModal(props: Provider) {
  const { name, icon, iconClassName, modal } = props;

  return (
    <Modal
      title={modal?.title || ''}
      trigger={
        <button className={triggerClassName}>
          <Icon name={icon} className={iconClassName} />
        </button>
      }>
      {modal?.content}
    </Modal>
  );
}
