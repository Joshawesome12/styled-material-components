import React from 'react';

import styled from 'styled-components';
import { Icon } from '../icons';

const PanoramaFishEyePath = () => [
  <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" key='path0' />,
];

const PanoramaFishEyeIcon = styled(Icon).attrs({
  children: PanoramaFishEyePath,
})``;

export default PanoramaFishEyePath;
export { PanoramaFishEyeIcon };
