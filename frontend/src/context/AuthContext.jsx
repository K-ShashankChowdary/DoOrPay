/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const checkAuthStatus = async () => {
        try {
            const response = await api.post('/users/refresh-token');
            setUser(response.data.data.user);
        } catch {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        checkAuthStatus();
    }, []);

    const login = async (email, password) => {
        const response = await api.post('/users/login', { email, password });
        setUser(response.data.data.user);
        return response.data;
    };

    const signup = async (userData) => {
        const response = await api.post('/users/signup', userData);
        setUser(response.data.data.user);
        return response.data;
    };

    const logout = async () => {
        try {
            await api.post('/users/logout');
        } catch (error) {
            console.error('Logout failed:', error);
        } finally {
            setUser(null);
        }
    };

    const getBalance = async () => {
        const response = await api.get('/users/balance');
        return response?.data;
    };

    const createTopupSession = async (amount) => {
        const response = await api.post('/users/wallet/topup', { amount });
        return response?.data;
    };

    const requestWithdrawal = async (amount) => {
        const response = await api.post('/users/wallet/withdraw', { amount });
        return response?.data;
    };

    const getWithdrawalHistory = async () => {
        const response = await api.get('/users/wallet/withdrawals');
        return response?.data;
    };

    const value = {
        user,
        loading,
        login,
        logout,
        signup,
        getBalance,
        createTopupSession,
        requestWithdrawal,
        getWithdrawalHistory,
        setUser
    };

    return (
        <AuthContext.Provider value={value}>
            {loading ? (
                <div className="page-shell grid place-items-center min-h-[100dvh] px-4 sm:px-6 bg-slate-50/40">
                    <div className="session-splash-card flex flex-col items-center gap-6 text-center px-10 py-12 rounded-[22px] border border-slate-200/70 bg-white/80 shadow-[var(--elev-2)] backdrop-blur-md">
                        <span className="spinner w-12 h-12" aria-hidden />
                        <p className="text-slate-600 font-medium text-sm max-w-[20rem] leading-relaxed">
                            Checking your session…
                        </p>
                    </div>
                </div>
            ) : (
                children
            )}
        </AuthContext.Provider>
    );
};
