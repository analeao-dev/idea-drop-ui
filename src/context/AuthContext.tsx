import { createContext, useContext, useState } from "react";

type AuthContextType = {
    acessToken: string | null;
    setAccessToken: (token: string | null) => void;
    user: { id: string; email: string; name: string } | null;
    setUser: (user: AuthContextType['user']) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [user, setUser] = useState<AuthContextType['user']>(null);

    const value = {
        acessToken: accessToken,
        setAccessToken,
        user,
        setUser
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAtuh = () => {
    const context = useContext(AuthContext);
    if (!context)
        throw new Error("useAuth must be used within an AuthProvider");

    return context;
}
