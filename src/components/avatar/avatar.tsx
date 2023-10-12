'use client';

import { Text } from '../text/text';

interface AvatarProps {
  username: string;
  url?: string;
  size?: '60' | '48' | '32' | '24' | '16';
}

export function Avatar(props: AvatarProps) {
  const { username, url, size = '32' } = props;

  if (!url) {
    return (
      <div
        className={`rounded bg-grey-800 flex items-center justify-center border border-grey-400`}
        style={{ width: size + 'px', height: size + 'px' }}>
        <Text type="medium" className="text-white">
          {username[0].toUpperCase()}
        </Text>
      </div>
    );
  }

  return (
    <img
      src={url}
      alt={username}
      className={`rounded bg-grey-800 flex items-center justify-center`}
      style={{ width: size + 'px', height: size + 'px' }}
    />
  );
}
