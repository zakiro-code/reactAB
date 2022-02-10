import React from 'react';
import PostForm from "../../PostForm";
import cl from './MyModal.module.css';

const MyModal = ({children, visible, setVisible}) => {

    /*[cl.active, cl.myModal].join(' ')*/


    const rootClasses = [cl.myModal];
    if (visible) {
        rootClasses.push(cl.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.myModalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;