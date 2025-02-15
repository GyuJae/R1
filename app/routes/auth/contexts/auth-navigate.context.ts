import { createContext } from 'react';

interface IAuthNavigateContext {
  goAlbum: () => void;
}

export const AuthNavigateContext = createContext<IAuthNavigateContext>({} as IAuthNavigateContext);
