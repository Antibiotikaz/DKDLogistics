import classes from "../components/assets/sass/Home.module.scss";
import Header from "../components/Header/Header";
import Feature from "../components/Feature/Feature";
import AboutUs from "../components/AboutUs/AboutUs";
import WorkingWith from "../components/WorkingWith/WorkingWIth"
import Layout from "../components/Layout/Layout";
import ContactForm from "../components/ContactForm/contactForm";

export default function Home() {
  return (
    <>
      <Layout>
        <Header />
        <div className={classes.gifContainer}></div>
      </Layout>
      <Feature />
      <AboutUs />
      <WorkingWith />
      <ContactForm />

    </>
  );
}
