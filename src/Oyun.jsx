import React from "react";

const Oyun = (ozellikler) => {
  const [puan, puanGuncelle] = React.useState(0);

  console.log("Oyun component fonksiyonu çalıştı ");

  function puanKazan() {
    puanGuncelle(function (oncekiDeger) {
      return oncekiDeger + 5;
    });
  }
  /*
  if(puan >= 100) {
    return(
      <p>Oyun Bitti, Tebrikler</p>
    )} else {
      return (
        <>
          <p>
            Oyun başladı! Mevcut Puan: {puan} Kalan Can: {ozellikler.can}
          </p>
          <button onClick={puanKazan}>Puan Kazan</button>
        </>
      );
  }
*/

  return (
    <>
      {
        (puan >= 100) ? 
          <p>Oyun bitti</p>
        :
          <>
            <p>
              Oyun başladı! Mevcut Puan: {puan} Kalan Can: {ozellikler.can}
            </p>
            <button onClick={puanKazan}>Puan Kazan</button>
          </>
      }
    </>
  )
};

export default Oyun;
