import { Link } from "react-router-dom";
import { ArrowForward, FlashOn, Star } from "@mui/icons-material";

const CATEGORIES = [
  {
    name: "Electronics",
    emoji: "📱",
    color: "from-blue-500 to-blue-700",
    count: "12,430",
  },
  {
    name: "Fashion",
    emoji: "👗",
    color: "from-pink-500 to-rose-600",
    count: "8,920",
  },
  {
    name: "Home",
    emoji: "🏠",
    color: "from-amber-500 to-orange-600",
    count: "5,640",
  },
  {
    name: "Sports",
    emoji: "⚽",
    color: "from-green-500 to-emerald-600",
    count: "3,210",
  },
  {
    name: "Books",
    emoji: "📚",
    color: "from-purple-500 to-violet-600",
    count: "15,780",
  },
  {
    name: "Grocery",
    emoji: "🛒",
    color: "from-teal-500 to-cyan-600",
    count: "2,100",
  },
  {
    name: "Beauty",
    emoji: "💄",
    color: "from-red-400 to-pink-600",
    count: "4,350",
  },
  {
    name: "Toys",
    emoji: "🧸",
    color: "from-yellow-400 to-amber-500",
    count: "1,890",
  },
];

const DEALS = [
  {
    name: "Sony WH-1000XM5",
    price: "₹24,990",
    original: "₹34,990",
    off: "29%",
    rating: 4.8,
  },
  {
    name: "Nike Air Force 1",
    price: "₹7,495",
    original: "₹10,795",
    off: "31%",
    rating: 4.6,
  },
  {
    name: "Kindle Paperwhite",
    price: "₹13,999",
    original: "₹18,999",
    off: "26%",
    rating: 4.7,
  },
  {
    name: "Instant Pot Duo",
    price: "₹8,999",
    original: "₹12,999",
    off: "31%",
    rating: 4.5,
  },
];

function HomePage() {
  return (
    <div className="pb-12">
      <section className="relative overflow-hidden bg-gradient-to-br from-az-dark via-az-nav to-[#1a3a4a] dark:from-dk-bg dark:via-dk-surface dark:to-[#0d1f2d] min-h-[420px] md:min-h-[500px] flex items-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-72 h-72 md:w-96 md:h-96 rounded-full bg-az-orange/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="relative max-w-[1600px] mx-auto px-6 py-12 md:py-20 w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-az-orange/20 border border-az-orange/30 rounded-full px-4 py-1.5">
                <FlashOn sx={{ fontSize: 16, color: "#FF9900" }} />
                <span className="text-az-orange text-xs font-semibold">
                  Great Indian Sale — Up to 80% Off
                </span>
              </div>

              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  Everything
                  <br />
                  <span className="text-gradient">You Need,</span>
                  <br />
                  Delivered.
                </h1>
              </div>

              <p className="text-gray-400 text-base md:text-lg max-w-md leading-relaxed">
                Shop from millions of products across hundreds of categories.
                Free delivery on eligible orders over ₹499.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 bg-az-orange hover:bg-az-yellow active:scale-95 text-az-dark font-bold px-6 py-3 rounded-lg transition-all duration-200 shadow-glow-orange text-sm"
                >
                  Shop Now
                  <ArrowForward sx={{ fontSize: 18 }} />
                </Link>
                <Link
                  to="/products?filter=deals"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 border border-white/20 text-sm backdrop-blur-sm"
                >
                  Today's Deals
                </Link>
              </div>

              <div className="flex gap-6 pt-2">
                {[
                  { value: "50M+", label: "Products" },
                  { value: "2M+", label: "Sellers" },
                  { value: "100M+", label: "Customers" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-white font-black text-xl">
                      {stat.value}
                    </div>
                    <div className="text-gray-500 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden md:grid grid-cols-2 gap-3 relative">
              <div className="space-y-3 mt-8">
                {["📱 Smartphones", "💻 Laptops", "🎧 Audio"].map((item) => (
                  <div
                    key={item}
                    className="glass rounded-xl p-4 cursor-pointer hover:border-az-orange/40 transition-all duration-250 card-hover"
                  >
                    <span className="text-white font-medium text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {["👗 Fashion", "🏠 Home Decor", "📚 Books", "⚽ Sports"].map(
                  (item) => (
                    <div
                      key={item}
                      className="glass rounded-xl p-4 cursor-pointer hover:border-az-orange/40 transition-all duration-250 card-hover"
                    >
                      <span className="text-white font-medium text-sm">
                        {item}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-4 md:px-6 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-az-dark dark:text-dk-text font-bold text-xl md:text-2xl">
            Shop by Category
          </h2>
          <Link
            to="/products"
            className="text-az-teal dark:text-blue-400 text-sm font-medium hover:underline flex items-center gap-1"
          >
            See all <ArrowForward sx={{ fontSize: 16 }} />
          </Link>
        </div>

        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.name}
              to={`/products?category=${cat.name}`}
              className="group flex flex-col items-center gap-2 p-3 md:p-4 rounded-xl bg-white dark:bg-dk-surface border border-az-border dark:border-dk-border hover:border-az-orange dark:hover:border-az-orange shadow-sm-warm dark:shadow-dark-md transition-all duration-250 card-hover"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-2xl shadow-md`}
              >
                {cat.emoji}
              </div>
              <span className="text-az-dark dark:text-dk-text text-xs font-semibold text-center leading-tight group-hover:text-az-orange transition-colors">
                {cat.name}
              </span>
              <span className="text-az-muted dark:text-dk-muted text-[10px]">
                {cat.count}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-4 md:px-6 mt-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FlashOn sx={{ color: "#FF9900", fontSize: 24 }} />
            <h2 className="text-az-dark dark:text-dk-text font-bold text-xl md:text-2xl">
              Flash Deals
            </h2>
            <span className="bg-az-red text-white text-xs font-bold px-2 py-0.5 rounded">
              Ends in 4:23:15
            </span>
          </div>
          <Link
            to="/products?filter=deals"
            className="text-az-teal dark:text-blue-400 text-sm font-medium hover:underline"
          >
            See all deals
          </Link>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4">
          {DEALS.map((deal) => (
            <div
              key={deal.name}
              className="bg-white dark:bg-dk-surface border border-az-border dark:border-dk-border rounded-xl overflow-hidden shadow-sm-warm dark:shadow-dark-md card-hover group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dk-card dark:to-dk-border h-44 flex items-center justify-center relative overflow-hidden">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-350">
                  🛍️
                </span>
                <div className="absolute top-2 left-2 bg-az-red text-white text-xs font-black px-2 py-0.5 rounded">
                  -{deal.off}
                </div>
              </div>

              <div className="p-3">
                <h3 className="text-az-dark dark:text-dk-text font-semibold text-sm line-clamp-1">
                  {deal.name}
                </h3>

                <div className="flex items-center gap-1 mt-1">
                  <Star sx={{ fontSize: 13, color: "#FF9900" }} />
                  <span className="text-xs text-az-muted dark:text-dk-muted font-medium">
                    {deal.rating}
                  </span>
                </div>

                <div className="mt-1.5 flex items-baseline gap-2">
                  <span className="text-az-dark dark:text-dk-text font-black text-base">
                    {deal.price}
                  </span>
                  <span className="text-az-muted dark:text-dk-muted text-xs line-through">
                    {deal.original}
                  </span>
                </div>

                <button className="mt-3 w-full bg-az-yellow hover:bg-az-orange active:scale-95 text-az-dark font-semibold text-xs py-2 rounded-lg transition-all duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
