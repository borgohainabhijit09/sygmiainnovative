'use client';

import React, { createContext, useContext, useState } from 'react';
import { ContactForm } from '@/components/forms/ContactForm';
import { X, Sparkles, ShieldCheck } from 'lucide-react';

interface ContactModalContextType {
  isOpen: boolean;
  openModal: (options?: { requirement?: string; sourceContext?: string }) => void;
  closeModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOptions, setModalOptions] = useState<{ requirement?: string; sourceContext?: string }>({
    requirement: 'new-website',
    sourceContext: 'popup_modal'
  });

  const openModal = (options?: { requirement?: string; sourceContext?: string }) => {
    if (options) {
      setModalOptions(options);
    }
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ContactModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}

      {/* POPUP MODAL OVERLAY */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
          
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-[#04060b]/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
            onClick={closeModal}
          />

          {/* Modal Card Container */}
          <div className="relative w-full max-w-xl glass-card bg-[#0b0f17]/98 border border-white/15 p-5 sm:p-6 rounded-3xl shadow-2xl z-10 animate-in zoom-in-95 duration-200 my-auto">
            
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close conversation modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="space-y-1 mb-3">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[11px] font-semibold">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>Start a Conversation</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Tell us about your business goals.
              </h2>
            </div>

            {/* Embedded Form with Compact Modal Styling */}
            <ContactForm 
              defaultRequirement={modalOptions.requirement || 'new-website'} 
              sourceContext={modalOptions.sourceContext || 'popup_modal'} 
              isModal={true}
            />

            {/* Footer Note */}
            <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                Guaranteed 24-hour response
              </span>
              <span className="text-slate-500">🔒 100% Confidential</span>
            </div>

          </div>
        </div>
      )}
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  return useContext(ContactModalContext);
}
