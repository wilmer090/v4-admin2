import React from 'react';
import { Button, Input } from 'shared/theme/elements';

import { ItemContainer, ItemList, PageModalWrapper } from './Publication.styled';

type Props = {
  pages: string[];
  addPage: (page: string) => void;
  removePage: (idx: number) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => (index: number) => void;
};
const PageModalContent: React.FC<Props> = ({ pages, addPage, removePage, handleChange }) => {
  return (
    <PageModalWrapper>
      {pages.length > 0 &&
        pages.map((page, i) => (
          <ItemList key={i}>
            {i === 0 ? (
              <ItemContainer>
                <Input
                  onChange={(e) => handleChange(e)(i)}
                  value={page}
                  placeholder="Add new page"
                  $fullWidth
                  className="__input"
                />
                <Button onClick={() => addPage('')} className="__button">
                  Add
                </Button>
              </ItemContainer>
            ) : (
              <ItemContainer key={i}>
                <Input
                  onChange={(e) => handleChange(e)(i)}
                  value={page}
                  placeholder="Add new page"
                  $fullWidth
                  className="__input"
                />
                <Button variant="danger-outlined" onClick={() => removePage(i)} className="__button">
                  Remove
                </Button>
              </ItemContainer>
            )}
          </ItemList>
        ))}
    </PageModalWrapper>
  );
};

export default PageModalContent;
