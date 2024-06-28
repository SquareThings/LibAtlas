import i18n from "../Languages";
import { useTranslation, initReactI18next } from "react-i18next";



function LanguageSelector() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div>
            <div>
                <button type="button" onClick={() => changeLanguage('ch')}>
                    de
                </button>
                <button type="button" onClick={() => changeLanguage('en')}>
                    en
                </button>
            </div>
            <div >
            </div>
        </div>
    );
}

export default LanguageSelector;