import Form from 'components/Forms/Form/Form';
import React from 'react';

const CreateTvClipsView = ({ options, data }) => {
  return (
    <div>
      <Form multiplierSource={options} data={data} />
    </div>
  );
};

export default CreateTvClipsView;
