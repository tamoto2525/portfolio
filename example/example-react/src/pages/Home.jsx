import React from 'react';
import SectionItemDemo01 from './HomeSections/SectionItemDemo01'; // Homeコンポーネントをインポート
import SectionItemDemo02 from './HomeSections/SectionItemDemo02'; // Homeコンポーネントをインポート
import SectionItemDemo03 from './HomeSections/SectionItemDemo03'; // Homeコンポーネントをインポート
import SectionItemDemo04 from './HomeSections/SectionItemDemo04'; // Homeコンポーネントをインポート
import SectionItemDemo05 from './HomeSections/SectionItemDemo05'; // Homeコンポーネントをインポート
import SectionItemDemo06 from './HomeSections/SectionItemDemo06'; // Homeコンポーネントをインポート
import '../assets/css/home.scss'; // ショップページ用のSCSSファイルがあると仮定
function Home() {
  return (
    <main>
    <SectionItemDemo01 />
    <SectionItemDemo02 />
    <SectionItemDemo03 />
    <SectionItemDemo04 />
    <SectionItemDemo05 />
    <SectionItemDemo06 />
    </main>
  )
}

export default Home