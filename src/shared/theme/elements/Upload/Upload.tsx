import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Upload as AntUpload } from 'antd';
import { UploadChangeParam, UploadFile } from 'antd/lib/upload/interface';
import React, { useState } from 'react';
import { getBase64 } from 'shared/utils/getBase64';

import { UploadWrapper } from './Upload.styled';

type Props = {
  onChange: (file: any, imageUrl: string) => void;
  imageSrc?: string;
  accept?: string;
  disabled?: boolean;
};
const Upload: React.FC<Props> = ({ onChange, imageSrc, accept, disabled }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState(imageSrc || '');

  // const beforeUpload = (file: RcFile, FileList: RcFile[]) => {
  //   const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  //   if (!isJpgOrPng) {
  //     message.error('You can only upload JPG/PNG file!');
  //   }
  //   const isLt2M = file.size / 1024 / 1024 < 2;
  //   if (!isLt2M) {
  //     message.error('Image must smaller than 2MB!');
  //   }
  //   return isJpgOrPng && isLt2M;
  // };

  const handleChange = (info: UploadChangeParam<UploadFile<Blob>>) => {
    if (info.file.status === 'uploading') {
      setIsLoading(true);
      return;
    }
    const imageBlog = info.file;
    getBase64(imageBlog, (imageUrl) => {
      setImageUrl(imageUrl);
      setIsLoading(false);
      onChange(imageBlog, imageUrl);
    });
  };
  const uploadButton = (
    <div>
      {isLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <UploadWrapper>
      <AntUpload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        onChange={handleChange}
        beforeUpload={() => false}
        accept={accept}
        disabled={disabled}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </AntUpload>
    </UploadWrapper>
  );
};

export default Upload;
