import Image from "next/image"
import avatar from "../temp/avatar.png"
import {BsPerson} from 'react-icons'

const style={
    wrapper: 'h-16 w-full bg-black text-white flex md:justify-around items-center px-60 fixed z-20',
    leftMenu: 'flex gap-3',
    logo: 'text-3xl text-white flex cursor-pointer mr-6',
    menuItem: 'text-lg text-white font-medium flex items-center mx-4 cursor-pointer',
    rightMenu: 'flex gap-3 items-center',
    userImageContainer: 'mr-2',
    userImage: 'h-10 w-10 mr-4 rounded-full p-px object-cover cursor-pointer',
    loginButton: 'flex items-center cursor-pointer rounded-full hover:bg-[#333333] px-4 py-1',
    loginText: 'ml-2'
}
const currentAccount = '0xb507b70d37e31cA65f07Ff95DFf4ca4d191AcF64'

const Navbar= ()=>{
    return <div className={style.wrapper}>
        <div className={style.leftMenu}>
            <div className={style.logo}>Uber</div>
            <div className={style.menuItem}>Ride</div>
            <div className={style.menuItem}>Drive</div>
            <div className={style.menuItem}>More</div>
        </div>
        <div className={style.rightMenu}>
        <div className={style.menuItem}>Help</div>
        <div className={style.menuItem}>Richard</div>
        <div className={style.userImageContainer}>
            <Image className={style.userImage} src={avatar} width={40} height={40}/>
        </div>
        <div>
            {currentAccount?(
                <div>
                    {currentAccount.slice(0,6)}...{currentAccount.slice(39)}
                </div>
            ):(
                <div className={style.loginButton}>
                    <BsPerson/>
                    <span className={style.loginText}>Log in</span>
                </div>
            )}
        </div>
        </div>
    </div>
}

export default Navbar
 