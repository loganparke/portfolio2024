import React from 'react';
import styles from './buttons.module.css';

type ButtonProps = {
  text: string,
  btnClass: string
}

export const Button: React.FC<ButtonProps> = ({ text, btnClass }) => (
  <aside>
    <button className={`${styles.btnStyles} ${styles[btnClass]}`}>
      {text}
    </button>
  </aside>
);