import React from 'react'
import {useContext} from 'react'
import StoreContext from '../../store';
import Context from './context';
import Topbar from './topbar';
import  './topbar.scss'

const Exchange = () => {

    const store = useContext(StoreContext);
  return (
    <div >

        <Topbar />
        <Context />
    </div>
  )
}

export default Exchange