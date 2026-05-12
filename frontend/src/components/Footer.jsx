import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full mt-auto border-t border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr_1fr] gap-8 md:gap-10 items-start">
          <div className="flex flex-col gap-3 max-w-sm">
            <div className="flex items-center gap-2">
              <div
                className="nav-mark w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'var(--brand-grad)' }}
              >
                <span className="text-white font-black text-base">D</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black text-slate-900 leading-tight">DoOrPay</span>
                <span className="text-xs font-semibold text-slate-500">Build habits that stick</span>
              </div>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Ship faster with accountability. Set a stake, pick a validator, and stay on track with clear outcomes.
            </p>
            <span className="text-xs text-slate-400 font-semibold">© {currentYear} DoOrPay. All rights reserved.</span>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-black text-slate-900 tracking-wide uppercase">Product</h3>
            <div className="flex flex-col gap-2">
              <Link to="/dashboard" className="footer-link">Dashboard</Link>
              <Link to="/validations" className="footer-link">Validations</Link>
              <Link to="/login" className="footer-link">Sign In</Link>
              <Link to="/signup" className="footer-link">Create Account</Link>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-black text-slate-900 tracking-wide uppercase">Company</h3>
            <div className="flex flex-col gap-2">
              <Link to="/contact" className="footer-link">About &amp; contact</Link>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-black text-slate-900 tracking-wide uppercase">Legal</h3>
            <div className="flex flex-col gap-2">
              <Link to="/terms" className="footer-link">Terms & Conditions</Link>
              <Link to="/privacy" className="footer-link">Privacy Policy</Link>
              <Link to="/shipping" className="footer-link">Shipping &amp; delivery</Link>
              <Link to="/refunds" className="footer-link">Refunds &amp; cancellations</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
