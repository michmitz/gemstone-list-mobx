import React, { createContext, useContext } from 'react'
import { createGemstoneStore } from './GemstoneStore'
import { useLocalObservable } from 'mobx-react'

const GemstoneStoreContext = createContext(null)

export const GemstoneProvider = ({ children }) => {
  const gemstoneStore = useLocalObservable(() => createGemstoneStore())

  return (
    <GemstoneStoreContext.Provider value={gemstoneStore}>
      {children}
    </GemstoneStoreContext.Provider>
  )
}

export const useGemstoneStore = () => useContext(GemstoneStoreContext)


