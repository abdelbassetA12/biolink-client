import Theme1 from '../themes/theme1';
import Theme2 from '../themes/theme2';
import Theme3 from '../themes/theme3';
import Theme4 from '../themes/theme4';
import Theme5 from '../themes/theme5';
import Theme6 from '../themes/theme6';
const themes={
  theme1:Theme1,
  theme2:Theme2,
  theme3: Theme3, // 👈 أضف هذا
  theme4:Theme4,
  theme5:Theme5,
  theme6:Theme6
};



export default function ThemeRenderer({user,links, previewOnly, themeOverride}){
const Comp = themes[themeOverride || user.theme] || Theme1;
  //const Comp=themes[user.theme]||Theme1;
  return <Comp user={user} links={links}  previewOnly={previewOnly}/>;
}