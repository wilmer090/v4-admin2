import { Breadcrumb } from 'antd';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IBreadcrumbOptions } from 'shared/interfaces/IBreadcrumb';

import { BreadcrumbsWrapper } from './Breadcrumbs.styled';

type Props = {
  options?: IBreadcrumbOptions;
};

const Breadcrumbs: React.FC<Props> = ({ options }) => {
  const location = useLocation();

  return (
    <BreadcrumbsWrapper>
      <Breadcrumb>
        {options?.map((option, index) => {
          if (typeof option === 'object') {
            return option.path === location.pathname || option.path === '' ? (
              <Breadcrumb.Item key={index}>{option.label}</Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item key={index}>
                <Link to={option.path || ''}>{option.label}</Link>
              </Breadcrumb.Item>
            );
          } else {
            return <Breadcrumb.Item key={index}>{option}</Breadcrumb.Item>;
          }
        })}
      </Breadcrumb>
    </BreadcrumbsWrapper>
  );
};

export default Breadcrumbs;
