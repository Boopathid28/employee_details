import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid'

const Modal = ({ showModal, closeModal, title , widgets }) => {
    if (!showModal) return null;

    return (
        <div
            className="flex justify-center items-center z-50 bg-black bg-opacity-50 fixed top-0 right-0 left-0 bottom-0"
        //   onClick={closeModal}
        >
            <div
                className="bg-white p-6 rounded-lg w-[60%] text-center"
            >
                <div className='flex justify-between items-center'><h2 className="text-xl font-semibold mb-4">{title}</h2>
                    <XMarkIcon onClick={closeModal} className="size-6 text-black-500 mb-3" /></div>
                    {widgets}
            </div>
        </div>
    );
};

export default Modal;
