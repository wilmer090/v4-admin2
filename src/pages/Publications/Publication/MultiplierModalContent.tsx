import { Space } from 'antd';
import { valueType } from 'antd/lib/statistic/utils';
import { FormikProps } from 'formik';
import React, { useState } from 'react';
import { IMultiplier } from 'shared/interfaces/IMultiplier';
import { IPublicationCreatePayload } from 'shared/interfaces/IPublication';
import { Button, Input } from 'shared/theme/elements';
import InputNumber from 'shared/theme/elements/Input/InputNumber';

import { ItemContainer, ItemList, ModalFooter, PageModalWrapper } from './Publication.styled';

type Props = {
  closeModal: () => void;

  form: FormikProps<IPublicationCreatePayload>;
  multiplierIndex: number;
};
const MultiplierModalContent: React.FC<Props> = ({ closeModal, form, multiplierIndex }) => {
  const getPublicationPage = form.values.publication_page[multiplierIndex];
  const getPublicationPages = form.values.publication_page.filter(
    (publication) => publication.multiplier_name === getPublicationPage.multiplier_name,
  );
  const getCurrentValue = form.values.publication_page[multiplierIndex].multiplier_value || 0;
  const [pages, setPages] = useState<Partial<IMultiplier>[]>(getPublicationPages.slice(1) || []);
  const [toRemove, setToRemove] = useState<Partial<IMultiplier>[]>([]);
  const [currentValue, setCurrentValue] = useState<number>(getCurrentValue);
  const handleValueChange = (value: valueType) => {
    if (typeof value === 'number') {
      setCurrentValue(value);
    }
  };
  const handleSave = () => {
    let newPages = pages;

    if (getPublicationPages.length > 1) {
      newPages = pages.slice(getPublicationPages.length - 1, pages.length + 1);
    }

    let newPublicationPages = [...form.values.publication_page, ...newPages];

    if (toRemove.length > 0) {
      newPublicationPages = newPublicationPages.filter((pp) => !toRemove.includes(pp));
    }

    form.setFieldValue('publication_page', newPublicationPages);
    form.setFieldValue(`publication_page[${multiplierIndex}].multiplier_value`, currentValue);
    closeModal();
  };

  const addNewPage = () => {
    const newPage: Partial<IMultiplier> = {
      publication_page_no: '',
      multiplier_name: getPublicationPage.multiplier_name,
      multiplier_value: getPublicationPage.multiplier_value,
    };
    setPages([...pages, newPage]);
  };

  const handlePageChange = (index: number, value: string) => {
    const mappedPages: Partial<IMultiplier>[] = pages.map((page, i) => {
      return index === i ? { ...page, publication_page_no: value } : page;
    });
    setPages(mappedPages);
  };

  const removePage = (index: number, page: Partial<IMultiplier>) => {
    if (form.values.publication_page.includes(page)) {
      setToRemove([...toRemove, page]);
    }

    const filteredPages = pages.filter((page, i) => i !== index);
    setPages(filteredPages);
  };

  return (
    <PageModalWrapper>
      <Space direction="vertical" size="large">
        <Input
          placeholder="0"
          $fullWidth
          className="__input"
          label="Name"
          value={form.values.publication_page[multiplierIndex].multiplier_name}
          readOnly
        />

        <ItemList>
          {getPublicationPage.publication_page_no && (
            <ItemContainer>
              <Input
                placeholder="0"
                $fullWidth
                className="__input"
                label="Page Number"
                value={getPublicationPage.publication_page_no}
                disabled
              />
            </ItemContainer>
          )}
          <ItemContainer>
            <InputNumber
              placeholder="0"
              $fullWidth
              className="__input"
              label="Multiplier Value"
              name={`publication_page[${multiplierIndex}]`}
              onChange={handleValueChange}
              value={currentValue}
              disabled={multiplierIndex <= 6}
            />
            <Button className="__button" onClick={() => addNewPage()}>
              Add
            </Button>
          </ItemContainer>

          {pages.length > 0 &&
            pages.map((page, index) => (
              <ItemContainer key={index}>
                <Input
                  placeholder="0"
                  $fullWidth
                  className="__input"
                  label="Page Number"
                  value={page.publication_page_no}
                  onChange={(e) => handlePageChange(index, e.target.value)}
                />
                <Button variant="danger-outlined" className="__button" onClick={() => removePage(index, page)}>
                  Remove
                </Button>
              </ItemContainer>
            ))}
        </ItemList>
      </Space>
      <ModalFooter>
        <Space>
          <Button variant="outlined" onClick={closeModal}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </Space>
      </ModalFooter>
    </PageModalWrapper>
  );
};

export default MultiplierModalContent;
