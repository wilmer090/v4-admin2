import { Space } from 'antd';
import React, { useState } from 'react';
import { Button, Input } from 'shared/theme/elements';
import InputNumber from 'shared/theme/elements/Input/InputNumber';

import { ModalFooter, PageModalWrapper } from './Publication.styled';

type Props = {
  onAddPage: (newPage: { name: string; value: number; page_number: string }) => void;
  closeModal: () => void;
};
const NewPageModalContent: React.FC<Props> = ({ onAddPage, closeModal }) => {
  const [newPage, setNewPage] = useState<{ name: string; value: number; page_number: string }>({
    name: '',
    value: 0,
    page_number: '',
  });
  const handleAddPage = () => {
    if (newPage.name && newPage.value !== 0) {
      onAddPage(newPage);
      closeModal();
    }
  };
  return (
    <PageModalWrapper>
      <Space direction="vertical" size="large">
        <Input
          placeholder="Page Name"
          $fullWidth
          className="__input"
          label="Name"
          onChange={(e) => setNewPage({ ...newPage, name: e.target.value })}
        />
        <Input
          placeholder="Page Number"
          $fullWidth
          className="__input"
          label="Page Number"
          onChange={(e) => setNewPage({ ...newPage, page_number: e.target.value })}
        />
        <InputNumber
          placeholder="0"
          $fullWidth
          className="__input"
          label="Multiplier Value"
          onChange={(e) => setNewPage({ ...newPage, value: e as number })}
        />
      </Space>
      <ModalFooter>
        <Space>
          <Button variant="outlined" onClick={closeModal}>
            Cancel
          </Button>
          <Button onClick={handleAddPage}>Add</Button>
        </Space>
      </ModalFooter>
    </PageModalWrapper>
  );
};

export default NewPageModalContent;
