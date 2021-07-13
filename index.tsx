import { createContext } from 'solid-js'
export const RouterContext = createContext<boolean>()
export function foo() {
  return (
    <RouterContext.Provider value={true}></RouterContext.Provider>
  )
}
