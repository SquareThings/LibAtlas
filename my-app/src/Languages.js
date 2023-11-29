import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";


i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            ch: {
                translation: {
                    "AboutBody": "该项目的灵感来自批判性制图实践，并部署制图技能，以应对监狱反贩运组织利用地图本身来支持对按摩工人的治安和监视的有害方式。地图经常被用来识别所谓的“非法”按摩企业，要求将种族化和性别化的低工资工作定为犯罪。我们的地图将您的注意力引向对亚洲按摩工人造成困扰的各种形式的治安。尽管全球范围内都在考虑性工作非刑事化，但对亚洲按摩工人的激进治安——从通过拍摄骚扰平民到对违反建筑规范的辅助治安——都以不同的方式在这里被形象化。我们邀请您参与这些地图并分享它们，以此来放大农民工按摩工人组织的斗争和力量"
                }
            },
            en: {
                translation: {
                    "AboutBody": "This project is inspired by the praxis of critical cartography and deploys mapping skills to counter the harmful ways in which maps themselves have been used by carceral anti trafficking organizations to endorse the policing and surveillance of massage workers. Maps are frequently used to identify supposedly “illicit” massage businesses, demanding the criminalization of racialized and gendered low wage work. Our maps direct your attention to the various forms of policing that have been afflicted on Asian massage workers. Despite a global shift towards considerations of decriminalization of sex work, the aggressive policing of Asian massage workers—ranging from civilian harassment via filming to the auxiliary policing of building code violations—are all visualized here in different ways. We invite you to engage these maps and share them as a way of amplifying the struggle and power of migrant massage worker organizing "
                }
            }
        },
        lng: "ch", // if you're using a language detector, do not define the lng option
        fallbackLng: "ch",

        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });