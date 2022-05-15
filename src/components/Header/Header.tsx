import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { IBreadcrumbOptions } from 'shared/interfaces/IBreadcrumb';
import { Breadcrumbs } from 'shared/theme/elements';
import { BreadcrumbContext } from 'shared/context/Breadcrumb';

import { HeaderTitle, HeaderWrapper } from './Header.styled';

const Header = () => {
  const location = useLocation();
  const [breadcrumbOptions, setBreadcrumbOptions] = useState<IBreadcrumbOptions | undefined>();
  const [breadcrumbTitle, setBreadcrumbTitle] = useState<string>('');
  const { additionalValue } = useContext(BreadcrumbContext);

  const generateBreadcrumbOptions = (pathname: string) => {
    const pathnameArr = pathname.split('/').filter((i) => i !== '');

    const options = pathnameArr.map((name, index) => {
      const path: string[] = [];

      for (let i = 0; i < index + 1; i++) {
        path.push(pathnameArr[i]);
      }

      return {
        label: name
          .split('-')
          .map((n) => n.charAt(0).toUpperCase() + n.slice(1))
          .join(' '),
        path: `/${path.join('/')}`,
      };
    });

    setBreadcrumbTitle(options[0].label);
    // this will remove the first index and make it as a title
    options.shift();
    if (additionalValue) options.push({ label: additionalValue, path: '' });
    setBreadcrumbOptions(options);
  };

  useEffect(() => {
    generateBreadcrumbOptions(location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, additionalValue]);

  return (
    <HeaderWrapper>
      <HeaderTitle>{breadcrumbTitle}</HeaderTitle>
      {breadcrumbOptions && breadcrumbOptions.length > 0 && <Breadcrumbs options={breadcrumbOptions} />}
    </HeaderWrapper>
  );
};

export default Header;
