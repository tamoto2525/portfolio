import React from 'react';
import Plate from '../../components/Plate';
import UserItems from '../../data/users'; // 準備したデータをインポート
function SectionItemDemo05() {
  return (
    <section className="l-home -plate">
      <div className="l-home-header">
        <h2>Section heading</h2>
      </div>
      <div className="m-plate-grid -col-3">
        {UserItems.map(UserItem => (
          <Plate
            icons={UserItem.icons}
            title={UserItem.title}
            name={UserItem.name}
            description={UserItem.description}
          />
        ))}
      </div>
      <div className="l-home-content">
      </div>
    </section>
  )
}

export default SectionItemDemo05