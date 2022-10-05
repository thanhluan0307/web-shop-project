import { faSun, faUser } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import logoFilm from '~/images/logo-ophim-4.png'
import style from './Header.module.scss'

const cx = classNames.bind(style)

function Header() {
  return (
    <header className={cx("wrapper")}>
        <div className={cx('contaier')}>
            <div className={cx('content')}>
                <a href="/"><img className={cx('image')} src={logoFilm} alt="" /></a>
                <ul className={cx('nav')}>
                  <li><a href="/">Phim Bộ</a></li>
                  <li><a href="/">Phim Lẻ</a></li>
                  <li><a href="/">Shows</a></li>
                  <li><a href="/">Hoạt Hình</a></li>
                  <li><a href="/">Thể Loại</a></li>
                  <li><a href="/">Quốc Gia</a></li>
                  <li><a href="/">Sắp Chiếu</a></li>
                </ul>
            </div>

            <div className={cx('search')}>
              <input type="text" placeholder="Tìm kiếm phim"/>
              <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </div>

            <div className={cx('action')}>
                <div><a href="/"><FontAwesomeIcon icon={faSun}/></a></div>
            </div>
        </div>
    </header>
  )
 
 }
 
 export default Header;