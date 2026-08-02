import React, { useState } from 'react';
import { Search, Snowflake, ShieldCheck, Box, ArrowRight, Eye, Sparkles } from 'lucide-react';
import { ProductCategory, Product } from '../types';
import { PRODUCTS } from '../data/products';
import { ProductModal } from './ProductModal';

interface ProductCatalogProps {
  onSelectProductForQuote: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onSelectProductForQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  const categories: { id: ProductCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Frozen Cuts', count: PRODUCTS.length },
    { id: 'poultry', label: 'Chicken & Turkey', count: PRODUCTS.filter((p) => p.category === 'poultry').length },
    { id: 'beef', label: 'Frozen Beef Cuts', count: PRODUCTS.filter((p) => p.category === 'beef').length },
    { id: 'fish', label: 'Atlantic & Fresh Fish', count: PRODUCTS.filter((p) => p.category === 'fish').length },
    { id: 'pork', label: 'Frozen Pork Cuts', count: PRODUCTS.filter((p) => p.category === 'pork').length },
  ];

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.origin.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-24 bg-[#121212] text-[#F5F5F0] font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-[#1A1A1A] border border-[#FF6B00]/40 text-[#FF6B00] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHOLESALE INVENTORY CATALOG</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-display uppercase">
            OUR PREMIUM FROZEN MEAT CATEGORIES
          </h2>

          <p className="text-base text-zinc-300">
            Imported directly from certified international meat producers. Packed in durable master cartons under strict cold-chain quality control for restaurants, grocers, and commercial caterers.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#333]">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-[#FF6B00] text-black font-extrabold shadow-lg scale-[1.02]'
                      : 'bg-[#1A1A1A] text-zinc-300 hover:text-white hover:bg-[#262626] border border-[#333]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded text-[10px] ${
                      isActive ? 'bg-black/30 text-black font-extrabold' : 'bg-[#121212] text-zinc-400'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search chicken, beef, fish..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded bg-[#1A1A1A] border border-[#333] text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF6B00] transition-colors"
            />
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-[#1A1A1A] rounded border border-[#333]">
            <p className="text-zinc-400 text-base">No meat cuts found matching your search query.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded bg-[#FF6B00] text-black font-extrabold text-xs uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative bg-[#1A1A1A] rounded border border-[#333] hover:border-[#FF6B00] transition-all duration-300 flex flex-col overflow-hidden shadow-lg"
              >
                {/* Product Image */}
                <div className="relative aspect-[4/3] bg-[#0A0A0A] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-60" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    {product.featured && (
                      <span className="px-2.5 py-1 rounded bg-[#FF6B00] text-black text-[10px] font-extrabold uppercase tracking-widest shadow">
                        Top Seller
                      </span>
                    )}
                    <span className="px-2.5 py-1 rounded bg-[#0A0A0A]/90 text-[#FF6B00] text-[10px] font-bold border border-[#333] flex items-center gap-1 backdrop-blur-sm">
                      <Snowflake className="w-3 h-3 text-[#FF6B00]" />
                      {product.temperature}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3">
                    <span className="px-2 py-0.5 rounded bg-emerald-950/90 text-emerald-400 text-[10px] font-bold border border-emerald-800/80 uppercase tracking-wider">
                      In Stock
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-zinc-400 font-semibold mb-1">
                      <span className="uppercase text-[#FF6B00] font-bold tracking-widest">{product.category}</span>
                      <span>Origin: {product.origin}</span>
                    </div>

                    <h3 className="font-extrabold text-base text-white group-hover:text-[#FF6B00] transition-colors line-clamp-1 uppercase font-display">
                      {product.name}
                    </h3>

                    <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Packaging Details */}
                  <div className="pt-3 border-t border-[#333] space-y-2 text-xs">
                    <div className="flex items-center justify-between text-zinc-300">
                      <span className="text-zinc-400 flex items-center gap-1">
                        <Box className="w-3.5 h-3.5 text-[#FF6B00]" /> Master Carton:
                      </span>
                      <span className="font-bold">{product.cartonWeight}</span>
                    </div>
                    <div className="flex items-center justify-between text-zinc-300">
                      <span className="text-zinc-400 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Grade:
                      </span>
                      <span className="font-semibold text-emerald-400">{product.grade}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setActiveModalProduct(product)}
                      className="w-full py-2.5 px-3 rounded bg-[#121212] hover:bg-[#262626] text-zinc-200 font-bold text-xs border border-[#333] transition-colors flex items-center justify-center gap-1.5 uppercase tracking-wider cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Specs</span>
                    </button>

                    <button
                      onClick={() => onSelectProductForQuote(product)}
                      className="w-full py-2.5 px-3 rounded bg-[#FF6B00] hover:bg-white text-black font-extrabold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <ProductModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
        onSelectForQuote={onSelectProductForQuote}
      />
    </section>
  );
};
