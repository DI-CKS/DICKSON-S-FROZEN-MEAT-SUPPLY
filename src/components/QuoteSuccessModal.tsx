import React from 'react';
import { CheckCircle2, PhoneCall, MessageSquare, Copy, X } from 'lucide-react';
import { PHONE_CONTACTS } from '../data/products';

interface QuoteSuccessModalProps {
  referenceId: string;
  customerName: string;
  orderSummary: string;
  onClose: () => void;
}

export const QuoteSuccessModal: React.FC<QuoteSuccessModalProps> = ({
  referenceId,
  customerName,
  orderSummary,
  onClose,
}) => {
  const [copied, setCopied] = React.useState(false);
  const primaryPhone = PHONE_CONTACTS[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(referenceId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsApp = () => {
    const text = `Hello Dickson's Frozen Meat Supply, I just submitted an online inquiry.\nRef Code: ${referenceId}\nName: ${customerName}\nSummary: ${orderSummary}`;
    window.open(`https://wa.me/${primaryPhone.number.replace('+', '')}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md font-sans">
      <div className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl p-6 sm:p-8 text-center space-y-6">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-16 h-16 rounded-2xl bg-orange-600/20 border border-orange-500/40 text-orange-400 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10 text-orange-500" />
        </div>

        <div>
          <h3 className="text-2xl font-black text-white">QUOTE REQUEST RECEIVED!</h3>
          <p className="text-xs sm:text-sm text-zinc-300 mt-2">
            Thank you, <span className="font-bold text-orange-400">{customerName}</span>. Your wholesale inquiry has been registered with Dickson&apos;s sales department.
          </p>
        </div>

        {/* Reference Code Box */}
        <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-between">
          <div className="text-left">
            <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold">Reference Ticket ID:</div>
            <div className="text-lg font-mono font-extrabold text-orange-400">{referenceId}</div>
          </div>
          <button
            onClick={handleCopy}
            className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-300 flex items-center gap-1 transition-colors cursor-pointer"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>

        {/* Order Details Brief */}
        {orderSummary && (
          <div className="text-left p-3.5 rounded-lg bg-zinc-950/60 border border-zinc-800/80 text-xs space-y-1 text-zinc-300">
            <div className="font-semibold text-zinc-400">Order Brief:</div>
            <p className="font-mono">{orderSummary}</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          <button
            onClick={handleWhatsApp}
            className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm shadow-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Fast-Track Quote via WhatsApp</span>
          </button>

          <div className="text-xs text-zinc-400 pt-1">
            Or speak directly to our wholesale manager:
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {PHONE_CONTACTS.map((phone) => (
              <a
                key={phone.number}
                href={`tel:${phone.number}`}
                className="px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 hover:border-orange-500 text-xs font-mono text-orange-400 flex items-center gap-1 font-bold"
              >
                <PhoneCall className="w-3 h-3 text-orange-500" />
                <span>{phone.formatted}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold text-xs cursor-pointer"
          >
            Back to Website
          </button>
        </div>

      </div>
    </div>
  );
};
