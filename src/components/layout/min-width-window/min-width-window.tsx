import { useMediaQuery } from '../../../hooks/use-media-query';

interface MinWidthWindowProps {
  minWidth: number;
  content: React.ReactNode;
}

export function MinWidthWindow(props: MinWidthWindowProps) {
  const { minWidth, content } = props;

  const matches = useMediaQuery(`(max-width: ${minWidth}px)`);

  return (
    <>
      {matches && (
        <div
          className={`fixed top-0 left-0 z-[99999] flex justify-center items-center w-screen h-screen bg-grey-700`}>
          {content}
        </div>
      )}
    </>
  );
}
