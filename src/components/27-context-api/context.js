import React from 'react'

// context.js, exchange.js, topbar.js olusturuldu
// src altinda store folder ve icine index.js yapildi
// index.js de context olusturuldu ve disariya acildi
// app.js git ve butun uygulamayi sarmalla
// <StoreContext.Provider value={{}}>  {} iceri sne her yerden ulasmak istedigin funksiyon veya stateleri yaz
// Route ve menu ye exchange ekle
// exchange.js import useContext from 'react' ekle
// onst store = useContext(StoreContext); exchange ekle
// sonra istedigin yerden {store.counter}  seklinde state ulas...
// prob ile state transferine gerek yok
// ikinci state olsuturalim const [currencies, setcurrencies] = useState({})
// simdi apiden data cekelim ve state aktaralim sonra bu state child componentlerde kullanalim
// https://api.frankfurter.app/latest?from=try veya try usd yaparak ...
// try cath ile api ye baglanip datayi aldik
// useEffect icersinde bu ilemi koyduk ki ilk giriste datayi alsin
// currencies state ni tum uygulamalara ac
//chrome inspectden react context eklentisi ile merkezi context gorebilirsin
const Context = () => {
  return (
    <div>Context</div>
  )
}

export default Context