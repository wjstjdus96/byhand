import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IUser {
  uid: string | null;
  userName: string | null;
  isSeller: boolean | null;
  userEmail: string | null;
}

interface IUserStore {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
}

export const useUserStore = create(
  persist<IUserStore>(
    (set) => ({
      user: null,
      setUser: (user: IUser | null) => set(() => ({ user })),
    }),
    {
      name: "user-storagee",
    }
  )
);
