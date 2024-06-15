import { useEffect, useState } from 'react';

import WellImage from '../../../../assets/images/well.webp';
import type { ImageComponentProps } from './types';

const Image: React.FC<ImageComponentProps> = ({ src, alt }) => {
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    setImageSrc(src);
  }, [src]);

  return (
    <img
      src={imageSrc}
      alt={alt}
      onError={() => {
        setImageSrc(WellImage as string);
      }}
    />
  );
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
Image.whyDidYouRender = true;
export default Image;
