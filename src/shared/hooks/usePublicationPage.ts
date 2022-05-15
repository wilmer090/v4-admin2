import { useState } from 'react';

type PublicationPage = [
  page: string[],
  addPage: (page: string) => void,
  removePage: (i: number) => void,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => (index: number) => void,
];
export const usePublicationPage = (listOfPages?: string[]): PublicationPage => {
  const [pages, setPages] = useState<string[]>(listOfPages || ['']);
  const addPage = (page: string) => {
    setPages([...pages, page]);
  };

  const removePage = (idx: number) => {
    const filteredPage = pages.filter((_, i) => i !== idx);
    setPages(filteredPage);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => (index: number) => {
    const value = e.target.value;
    const mappedPages = pages.map((page, i) => {
      return i === index ? value : page;
    });

    setPages(mappedPages);
  };

  return [pages, addPage, removePage, handleChange];
};
