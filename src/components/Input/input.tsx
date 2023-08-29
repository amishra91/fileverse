import { ChangeEvent } from 'react';
import styles from './input.module.css';

export interface Props {
  type: string;
  placeholder?: string;
  value: string;
  onChange?: (e: any) => void;
}

const Input = ({ type, placeholder, value, onChange }: Props) => {
  if (type == 'textArea') {
    return (
      <textarea
        className={styles.input}
        rows={3}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    );
  }
  return (
    <input
      className={styles.input}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
