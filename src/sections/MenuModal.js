//File: MenuModal
//Description: Code for Sidebar modal that appears in mobile devices

import React, { useState } from 'react';
import { Button, Modal } from 'antd';

import Sidebar from './Sidebar'
import { MenuOutlined } from '@ant-design/icons';
const MenuModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <MenuOutlined onClick={showModal}></MenuOutlined>
      <Modal footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Sidebar></Sidebar>
      </Modal>
    </>
  );
};
export default MenuModal;