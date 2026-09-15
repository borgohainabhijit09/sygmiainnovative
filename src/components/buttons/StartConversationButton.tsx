'use client';

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useContactModal } from '@/components/modals/ContactModalContext';

interface StartConversationButtonProps {
  label?: string;
  requirement?: string;
  className?: string;
  variant?: 'primary' | 'secondary';
  showIcon?: boolean;
}

export function StartConversationButton({
  label = "Start a Conversation",
  requirement,
  className,
  variant = 'primary',
  showIcon = true
}: StartConversationButtonProps) {
  const { openModal } = useContactModal();

  const baseClass = variant === 'primary' 
    ? 'btn-primary text-base px-8 py-3.5 cursor-pointer' 
    : 'btn-secondary text-base px-8 py-3.5 cursor-pointer';

  return (
    <button
      onClick={() => openModal({ requirement, sourceContext: 'page_cta' })}
      className={className || baseClass}
      type="button"
    >
      <span>{label}</span>
      {showIcon && <ArrowRight className="w-4 h-4 ml-1.5" />}
    </button>
  );
}
