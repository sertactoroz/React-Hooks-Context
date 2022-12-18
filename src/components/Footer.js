import { MainContext, useContext } from "../context";
import ThemeSwitcher from "./ThemeSwitcher";
function Footer({ theme, setTheme }) {
  const { setLogoText,logoText } = useContext(MainContext);

  const switchLogoText = () => {
    setLogoText(logoText === 'toroz.net' ? "ulyanova.ru" : 'toroz.net');
  };
  return (
    <div>
      Footer components
      <br />
      <ThemeSwitcher />
      <br />
      <button onClick={switchLogoText}>Switch Logo Text</button>
    </div>
  );
}

export default Footer;
