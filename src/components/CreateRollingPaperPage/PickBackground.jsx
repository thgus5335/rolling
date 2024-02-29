import styles from '../../pages/CreateRollingPaperPage.module.css';
import { useState } from 'react';
import ColorPicker from './ColorPicker';
import ImagePicker from './ImagePicker';

const PickBackground = () => {
  const [selectedButton, setSelectedButton] = useState('color');
  const handleClickColorButton = () => {
    setSelectedButton('color');
  };

  const handleClickImageButton = () => {
    setSelectedButton('image');
  };
  return (
    <div>
      <div>
        <h1>배경화면을 선택해 주세요.</h1>
        <p>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
        <button
          className={`${styles.toggleButton} ${selectedButton === 'color' && styles.toggleButtonOn}`}
          onClick={handleClickColorButton}>
          컬러
        </button>
        <button
          className={`${styles.toggleButton} ${selectedButton === 'image' && styles.toggleButtonOn}`}
          onClick={handleClickImageButton}>
          이미지
        </button>
      </div>
      {selectedButton === 'color' ? <ColorPicker /> : <ImagePicker />}
    </div>
  );
};

export default PickBackground;
