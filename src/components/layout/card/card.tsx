import { Button } from '../../button/button';
import { Popover } from '../../popover/popover';
import { Tooltip } from '../../tooltip/tooltip';

interface CardProps {
  children: React.ReactNode;
  title: string;
  displayButtons?: {
    edit?: boolean;
    download?: boolean;
    duplicate?: boolean;
    embed?: boolean;
    delete?: boolean;
    settings?: boolean;
  };
  onEditClick?: () => void;
  onDownloadClick?: () => void;
  onDuplicateClick?: () => void;
  onEmbedClick?: () => void;
  onDeleteClick?: () => void;
  settingsContent?: React.ReactNode;
}

export function Card(props: CardProps) {
  const {
    children,
    title,
    displayButtons = {
      edit: true,
      download: true,
      duplicate: true,
      embed: true,
      delete: true,
      settings: true,
    },
    onEditClick,
    onDownloadClick,
    onDuplicateClick,
    onEmbedClick,
    onDeleteClick,
    settingsContent,
  } = props;

  return (
    <div className="bg-grey-600 border border-grey-400 p-3 rounded-lg">
      <div className="w-full h-52 bg-black rounded mb-3">{children}</div>
      <div className="flex gap-3 items-center justify-between">
        <h3 className="text-white text-lg font-medium truncate">{title}</h3>
        <div className="flex gap-1">
          {displayButtons.edit && (
            <Tooltip content="Edit">
              <Button iconLeft="edit-line" color="stroke" onClick={onEditClick} />
            </Tooltip>
          )}
          {displayButtons.download && (
            <Tooltip content="Download">
              <Button iconLeft="download-line" color="stroke" onClick={onDownloadClick} />
            </Tooltip>
          )}
          {displayButtons.duplicate && (
            <Tooltip content="Duplicate">
              <Button iconLeft="file-copy-line" color="stroke" onClick={onDuplicateClick} />
            </Tooltip>
          )}
          {displayButtons.embed && (
            <Tooltip content="Embed">
              <Button iconLeft="computer-line" color="stroke" onClick={onEmbedClick} />
            </Tooltip>
          )}
          {displayButtons.settings && (
            <Tooltip content="Settings">
              <Popover trigger={<Button iconLeft="settings-4-line" color="stroke" />} align="end">
                {settingsContent && settingsContent}
              </Popover>
            </Tooltip>
          )}
          {displayButtons.delete && (
            <Tooltip content="Delete">
              <Button iconLeft="delete-bin-line" color="error" onClick={onDeleteClick} />
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  );
}
