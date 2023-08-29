import { ConnectButton } from '@rainbow-me/rainbowkit';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.pageHeader}>
      <img src="img/fileverse.png" className={styles.logo} alt="logo" />
      <ConnectButton showBalance={false} />
    </header>
  );
};

export default Header;
