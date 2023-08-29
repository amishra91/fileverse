import styles from './button.module.css';

export interface Props {
  onClick?: () => void;
  disabled?: boolean;
  label: string;
}

const Button = ({ onClick, disabled, label }: Props) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
