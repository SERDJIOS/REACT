import React, { useState } from 'react';
import { Button, Modal } from 'antd';
// import 'antd/dist/antd.css'; 
import 'rsuite/dist/rsuite.min.css'; 

function App() {
  // Состояние, управляющее видимостью модального окна
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Функция для открытия модального окна
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Функция для закрытия модального окна
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div style={{ padding: '50px' }}>
      <Button type="primary" onClick={showModal}>
        Открыть модальное окно
      </Button>
      <Modal
        title="Пример модального окна"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Закрыть"
        cancelText="Отмена"
      >
        <p>Это пример текста внутри модального окна.</p>
        <p>Можно добавить любой контент.</p>
      </Modal>
    </div>
  );
}

export default App;
