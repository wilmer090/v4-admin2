import { Spin as AntSpinner } from 'antd';
import styled from 'styled-components';

const Spinner = styled(AntSpinner)<{ position?: string }>`
  ${(props) =>
    props.position !== 'top'
      ? `position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9990;`
      : ``}
`;

export default Spinner;
