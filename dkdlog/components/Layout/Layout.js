import Header from "../Header/Header";
import classes from "./Layout.module.scss";
import {enUS, ru} from '../../translation'
import {useRouter} from "next/router";
export default function Layout (props){
  const router = useRouter();
  //Language Configs and Locale
  const {locale} = router;
  const t = locale === "en-US" ? enUS : ru;
  return (
  <div className={classes.Layout}>
    <div className={classes.gifContainer}>
      <div className={classes.logoIntoGif}>
        {props.children}
        <div className={classes.textCollectionLandingPage}>
          <h1>{t.heroTitle}</h1>
          <p>
            {t.heroContentText}
          </p>
          <button>{t.heroSeeMore}</button>
          {/* <button>Contact With US</button> */}
        </div>
      </div>
    </div>

    {/* <NavBar /> */}
  </div>
  )
}