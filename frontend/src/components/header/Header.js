import React from "react";
import Badge from "react-bootstrap/Badge";
import { NavLink } from "react-router-dom";
import HeaderNavbar from "./HeaderNavbar";
import ModalWindowRegistration from "./Authorization/ModalWindowRegistration";
import ModalWindowAutorization from "./Authorization/ModalWindowAuthorization";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import Button from'react-bootstrap/Button'
import logo from '../../assets/img/pngegg.png'
import call from '../../assets/img/call.svg'
import cart from '../../assets/img/cart.png'


const Header = observer(() => {
  const { store } = React.useContext(Context);
  const [userNameHide, setUserNameHide] = React.useState('hidden');

  React.useEffect(()=>{
     if(store.isAuth === true) {
        return setUserNameHide('')
      }
      setUserNameHide('hidden')
    }, [store.isAuth]
  )




  return (
    <header className="header">
      <div className="header__up">
        <div className="container">
          <div className="header__up-inner">
            <NavLink to="/" className="link-black text-decoration-none">
              <div className="header__up-logo">
                <div className="header__up-logo-img-holder">
                  <img
                    src={logo}
                    width="26px"
                    height="30px"
                    alt=""
                    className="header__up-logo-img"
                  />
                </div>
                <p className="header__up-logo-text">Техно-Маркет</p>
              </div>
            </NavLink>

            <div className="header__up-menu">
              <a
                href=""
                className="header__up-menu-item header__up-menu-catalog text-decoration-none"
              >
                Каталог
              </a>
              <a
                href=""
                className="header__up-menu-item header__up-menu-aboutUs text-decoration-none"
              >
                О нас
              </a>
              <a
                href=""
                className="header__up-menu-item header__up-menu-garanty text-decoration-none"
              >
                Гарантия
              </a>
              <a
                href=""
                className="header__up-menu-item header__up-menu-contavts text-decoration-none"
              >
                Контакты
              </a>
            </div>
            <div className="header__up-number">
              <img
                src={call}
                height="25px"
                width="25px"
                alt=""
                className="header__up-number-img"
              />
              <div className="header__up-number-text">+79615254780</div>
            </div>
            <div className="header__up-menu-cart">
              <img
                data-cart
                src={cart}
                width="39px"
                height="39px"
                alt=""
                className="header__up-menu-cart-img"
              />
              <div data-cart className="header__up-menu-cart-counter none">
                0
              </div>
            </div>

            <div className="d-flex gap-2">
              <Badge
                bg="outline-light"
                className={`text-success fs-5 ${userNameHide}`}
              >
                Авторизован
                <br />
                {/* {userName} */}
              </Badge>

              {/* <NavLink to='/AdminPanel'>
                  <div className={panelHide}>
                    <Button className="fs-5">Админ панель</Button>
                  </div>
              </NavLink> */}
              <ModalWindowAutorization />
               <Button variant='dark' onClick={()=>store.logout()} >Выйти</Button>
             
             <NavLink to='/AdminPanel'>

               <Button variant='dark'>Админ панель</Button>
             </NavLink>

              <div >
                <ModalWindowRegistration />
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="header__down">
        <div className="container">
          <HeaderNavbar />
        </div>
      </div>
    </header>
  );
});

export default Header;
