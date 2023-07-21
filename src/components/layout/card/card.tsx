import { Button } from '../../button/button';
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
  };
  onEditClick?: () => void;
  onDownloadClick?: () => void;
  onDuplicateClick?: () => void;
  onEmbedClick?: () => void;
  onDeleteClick?: () => void;
}

export function Card(props: CardProps) {
  const {
    children,
    title,
    displayButtons = { edit: true, download: true, duplicate: true, embed: true, delete: true },
    onEditClick,
    onDownloadClick,
    onDuplicateClick,
    onEmbedClick,
    onDeleteClick,
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
