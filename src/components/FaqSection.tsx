import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Search } from 'lucide-react';
import { FAQ_ITEMS } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = filterCategory === 'all' || item.category === filterCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-24 bg-[#1A1A1A] border-t border-[#333] text-[#F5F5F0] font-sans relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-[#121212] border border-[#FF6B00]/40 text-[#FF6B00] text-xs font-bold uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>COMMERCIAL FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white font-display uppercase">
            EVERYTHING YOU NEED TO KNOW ABOUT WHOLESALE ORDERS
          </h2>

          <p className="text-sm sm:text-base text-zinc-300">
            Got questions about minimum order quantities, delivery routes, or cold chain preservation? Find fast answers below.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search FAQ topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded bg-[#121212] border border-[#333] text-xs sm:text-sm text-white focus:outline-none focus:border-[#FF6B00]"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            {[
              { id: 'all', label: 'All FAQs' },
              { id: 'ordering', label: 'Ordering & MOQ' },
              { id: 'quality', label: 'Cold Chain & Specs' },
              { id: 'delivery', label: 'Delivery Areas' },
              { id: 'payment', label: 'Payments' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors cursor-pointer ${
                  filterCategory === cat.id
                    ? 'bg-[#FF6B00] text-black font-extrabold'
                    : 'bg-[#121212] text-zinc-300 hover:text-white border border-[#333]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-10 bg-[#121212] rounded border border-[#333] text-zinc-400 text-sm">
              No answers matched your search terms.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-[#121212] border border-[#333] rounded overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none group cursor-pointer"
                  >
                    <span className="font-extrabold text-sm sm:text-base text-zinc-100 group-hover:text-[#FF6B00] transition-colors font-display uppercase">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#FF6B00] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-[#262626]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};
