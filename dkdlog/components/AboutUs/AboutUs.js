import classes from './aboutUs.module.scss';
import Logo1 from '../../assets/image2.jpg';
import Logo2 from '../../assets/image3.jpg';
import Logo3 from '../../assets/image4.jpg';
import { enUS, ru } from '../../translation';
import { useRouter } from 'next/router';
import bigTruck from '../../assets/big-truck.png';
const Feature = () => {
	const router = useRouter();
	//Language Configs and Locale
	const { locale } = router;
	const t = locale === 'en-US' ? enUS : ru;
	return (
		<div className={classes.container}>
			<div className={classes.wrapper}>
				{/* <img src={bigTruck} className={classes.bigTruckLogo} /> */}
				<div className={classes.aboutUsTextContainer}>
					<h4>{t.aboutUsSmallTitle}</h4>
					<h2>{t.aboutUsMainTitle}</h2>
					<p>{t.aboutUsContentText}</p>
					<button>{t.aboutUsButtonText}</button>
				</div>
				<div className={classes.aboutUsImageContainer}>
					<div className={classes.sideImages}>
						<div className={classes.aboutUsImageContainer1}>
							<div className={classes.aboutUsImage1}></div>
						</div>
						<div className={classes.aboutUsImageContainer2}>
							<div className={classes.aboutUsImage2}></div>
						</div>
						<div className={classes.aboutUsImageContainer3}>
							<div className={classes.aboutUsImage3}></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Feature;
