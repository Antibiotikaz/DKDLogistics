import classes from "./header.module.scss";
import Link from "next/link";
import Logo from "../../assets/logo2.png";
import {useRouter} from "next/router";
import {enUS, ru} from '../../translation'
export default function Header(){
  const router = useRouter();
//Language Configs and Locale
const {locale} = router;
const t = locale === "en-US" ? enUS : ru;
const changeLanguage = (lang) => {

  if(lang === "en") {
    router.push("/", "/", {locale: "en-US"});
  } else if ( lang ==="ru") {
    router.push("/", "/", {locale: "ru"});
  }
 }

  return (
    <div className={classes.container}>
    <nav>
      <Link href="/">
        <img className={classes.logo} src={Logo}></img>
      </Link>

      <ul className={classes.navitems}>
        <li href="/">{t.home}</li>
        <li href="/">{t.service}</li>
        <li href="/">{t.carrier}</li>
        <li onClick={() => changeLanguage('en')}>EN</li>
        <li onClick={() => changeLanguage('ru')}>RU</li>
      </ul>
    </nav>
  </div>
  );


  }