import BoxContainer from "../../components/box-container";
import Header from "../../components/header";
import Slider from "../../components/slider";
import MainServices from "../../components/main-services";
import Footer from "../../components/footer";

function Main() {
  return (
    <BoxContainer>
      <Header/>
      <Slider/>
      <MainServices/>
      <Footer/>
    </BoxContainer>
  );
}

export default Main;