import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type SessionType = 'freelancer' | 'empresa';

interface TokenStore {
	email: string | null;
	token: string | null;
	type: SessionType | null;
	setSession: (email: string, token: string, type: SessionType) => void;
	logout: () => void;
}

export const useTokenStore = create<TokenStore>()(
	persist(
		(set) => ({
			email: null,
			token: null,
			type: null,
			setSession: (email, token, type) => {
				set({ email, token, type });
			},
			logout: () => {
				set({
					email: null,
					token: null,
					type: null,
				});
			},
		}),
		{
			name: 'token-storage',
		}
	)
);
