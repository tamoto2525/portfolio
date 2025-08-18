import React from 'react';
import Card from '../../components/Card'; // 作成したCardコンポーネントをインポート
import HomeItems from '../../data/home'; // 準備したデータをインポート
function SectionItemDemo02() {
  return (
    <section className="l-home">
      <div className="l-home-header">
        <h2>Section heading</h2>
      </div>
      <div className="m-card-grid -col-3">
        {HomeItems.map(HomeItem => (
          <Card
            imageUrl={HomeItem.imageUrl}
            title={HomeItem.title}
            description={HomeItem.description}
            price={HomeItem.price}
          />
        ))}
      </div>
      <div className="l-home-content">
      </div>
    </section>
  )
}

export default SectionItemDemo02