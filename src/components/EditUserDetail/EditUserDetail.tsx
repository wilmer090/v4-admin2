import { Typography } from 'antd';

import React from 'react';
import { getFormattedDate } from 'shared/utils/getFormattedDate';

import { DetailWrapper, InputLabel, LabelWrapper } from './EditUserDetail.styled';

type Props = {
  name?: string;
  date: Date | null;
  label: string;
};
const EditUserDetail: React.FC<Props> = ({ name, date, label }) => {
  return (
    <DetailWrapper>
      <LabelWrapper>
        <InputLabel>{label}</InputLabel>
      </LabelWrapper>
      <Typography.Text type="secondary">
        {date ? getFormattedDate(date) : 'NA'} {name && name !== 'undefined undefined' ? `(${name})` : 'NA'}
      </Typography.Text>
    </DetailWrapper>
  );
};

export default EditUserDetail;
