import React from 'react';

const ChangeGlasses = () => {
  let glassesOptions = [
    {
      id: 1,
      price: 30,
      name: 'GUCCI G8850U',
      url: './glassesImage/v1.png',
      desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
    },
    {
      id: 2,
      price: 50,
      name: 'GUCCI G8759H',
      url: './glassesImage/v2.png',
      desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
    },
    {
      id: 3,
      price: 30,
      name: 'DIOR D6700HQ',
      url: './glassesImage/v3.png',
      desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
    },
    {
      id: 4,
      price: 70,
      name: 'DIOR D6005U',
      url: './glassesImage/v4.png',
      desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
    },
    {
      id: 5,
      price: 40,
      name: 'PRADA P8750',
      url: './glassesImage/v5.png',
      desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
    },
    {
      id: 6,
      price: 60,
      name: 'PRADA P9700',
      url: './glassesImage/v6.png',
      desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
    },
    {
      id: 7,
      price: 80,
      name: 'FENDI F8750',
      url: './glassesImage/v7.png',
      desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
    },
    {
      id: 8,
      price: 100,
      name: 'FENDI F8500',
      url: './glassesImage/v8.png',
      desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
    },
    {
      id: 9,
      price: 60,
      name: 'FENDI F4300',
      url: './glassesImage/v9.png',
      desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
    },
  ];

  let [selectedGlasses, setSelectedGlasses] = React.useState(glassesOptions[0]);

  let renderGlassesOptions = () => {
    return glassesOptions.map((glasses, index) => (
      <div
        key={index}
        className={`glasses-option mx-2 ${selectedGlasses.id === glasses.id ? 'selected' : ''}`}
        onClick={() => setSelectedGlasses(glasses)}>
        <img src={glasses.url} alt={glasses.name} className="img-fluid" />
      </div>
    ));
  };

  return (
    <div className="glasses-app">
      <div className="container-fluid vh-100 d-flex flex-column">
        <header className="row py-3">
          <div className="col text-center">
            <h1 className="app-title">TRY GLASSES APP ONLINE</h1>
          </div>
        </header>
        <main className="row flex-grow-1">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="model-container position-relative">
              <img src="./glassesImage/model.jpg" className="model-image" alt="Model with glasses" />
              <img
                src={selectedGlasses.url}
                className="position-absolute glasses-overlay"
                alt={`Model with ${selectedGlasses.name}`}
              />
              <div className="position-absolute glasses-info-overlay">
                <h6 className="glasses-name">{selectedGlasses.name}</h6>
                <p className="glasses-price">${selectedGlasses.price}</p>
                <p className="glasses-desc">{selectedGlasses.desc}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="model-container">
              <img src="./glassesImage/model.jpg" className="model-image" alt="Model without glasses" />
            </div>
          </div>
        </main>
        <footer className="row py-3">
          <div className="col">
            <div className="glasses-selection d-flex justify-content-center">
              {renderGlassesOptions()}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ChangeGlasses;
