import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOutThunk } from 'redux/auth/authOperations';
import { getLoggedIn } from 'redux/auth/authSelectors';
import { getUserEmail } from 'redux/userData/userDataSelectors';
import sprite from '../../assets/icons/sprite.svg';
import styles from './header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(getLoggedIn);
  const userEmail = useSelector(getUserEmail);
  const [showModal, setShowModal] = useState(true);

  const handleLogOut = e => dispatch(logOutThunk());

  return (
    <div className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <Link to={'/'} className={styles.logo}>
          <svg className="icon" width="90" height="30">
            <use href={sprite + '#icon-logo'}></use>
          </svg>
        </Link>
      </div>

      {isLogin && (
        <div className={styles.wrapperRigth}>
          <div className={styles.iconName}>
            <p className={styles.user}>{userEmail.charAt(0)}</p>
          </div>
          <ul className={styles.list}>
            <li className={styles.item}>
              <p className={styles.userName}>{userEmail}</p>
            </li>
            <li>
              <button className={styles.exit} type="button" onClick={handleLogOut}>
                Exit
              </button>
            </li>
          </ul>
          <div>
            <button
              className={`${styles.logout} ${styles.exit}`}
              type="button"
              onClick={handleLogOut}
            >
              <svg className={styles.icon} width="16" height="16">
                <use href={sprite + '#icon-logout'}></use>
              </svg>
            </button>
          </div>
        </div>
      )}
      {/* {isLogin && showModal && (<Modal />)} */}
    </div>
  );
};

export default Header;
