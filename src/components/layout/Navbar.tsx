import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Badge,
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
  Divider,
  InputBase,
} from "@mui/material";
import {
  ShoppingCart,
  Search,
  DarkMode,
  LightMode,
  AccountCircle,
  LocationOn,
  Menu as MenuIcon,
  Close,
  KeyboardArrowDown,
  Favorite,
  LocalShipping,
} from "@mui/icons-material";
import { useTheme } from "../../context/ThemeContext";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

const DEPARTMENTS = [
  "All Departments",
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Sports",
  "Books",
  "Toys",
  "Grocery",
  "Beauty",
  "Automotive",
];

const SEARCH_CATEGORIES = [
  "All",
  "Electronics",
  "Fashion",
  "Books",
  "Home",
  "Sports",
  "Grocery",
];

function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchCategory, setSearchCategory] = useState("All");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { cartCount } = useCart();
  const { user, logout } = useAuth();

  function handleSearch() {
    if (searchQuery.trim()) {
      navigate(`/products?q=${searchQuery}`);
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="hidden md:block bg-az-dark dark:bg-dk-bg border-b border-white/5 py-1">
        <div className="max-w-[1600px] mx-auto px-4 flex justify-end items-center gap-6">
          <span className="text-xs text-gray-400">
            🚚 Free delivery on orders over ₹499
          </span>
          <Link
            to="/seller/register"
            className="text-xs text-az-orange hover:underline"
          >
            Sell on AmaZone
          </Link>
          <Link
            to="/admin"
            className="text-xs text-gray-400 hover:text-white transition-colors"
          >
            Admin
          </Link>
        </div>
      </div>

      <nav className="bg-az-dark dark:bg-dk-surface shadow-dark-md">
        <div className="max-w-[1600px] mx-auto px-3 md:px-6 h-[60px] flex items-center gap-2 md:gap-4">
          <Link
            to="/"
            className="flex-shrink-0 flex flex-col items-center group"
          >
            <span className="text-white font-black text-xl leading-none tracking-tight group-hover:text-az-orange transition-colors duration-250">
              amazone
            </span>
            <span className="text-az-orange text-[9px] font-semibold tracking-widest uppercase">
              .in
            </span>
          </Link>

          <div className="hidden lg:flex flex-col cursor-pointer hover:outline hover:outline-1 hover:outline-white rounded px-1 py-0.5 transition-all">
            <span className="text-gray-400 text-[10px] leading-tight">
              Deliver to
            </span>
            <div className="flex items-center gap-0.5">
              <LocationOn sx={{ fontSize: 14, color: "#fff" }} />
              <span className="text-white text-xs font-semibold">India</span>
            </div>
          </div>

          <div className="flex-1 flex h-10 rounded-lg overflow-hidden shadow-glow-orange focus-within:shadow-glow-orange transition-shadow">
            <select
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
              className="bg-az-border dark:bg-dk-card text-az-dark dark:text-dk-text text-xs font-medium px-2 border-r border-gray-300 dark:border-dk-border cursor-pointer hover:bg-gray-200 dark:hover:bg-dk-border transition-colors outline-none hidden sm:block min-w-[80px]"
            >
              {SEARCH_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <InputBase
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Search AmaZone..."
              fullWidth
              sx={{
                bgcolor: "#fff",
                px: 1.5,
                fontSize: "14px",
                color: "#0F1111",
                "& input::placeholder": { color: "#9CA3AF" },
              }}
            />

            <button
              onClick={handleSearch}
              className="bg-az-orange hover:bg-az-yellow active:bg-amber-500 w-12 flex items-center justify-center transition-colors duration-200 flex-shrink-0"
            >
              <Search sx={{ color: "#0F1111", fontSize: 22 }} />
            </button>
          </div>

          <div className="flex items-center gap-0.5 md:gap-1 flex-shrink-0">
            <Tooltip title={isDark ? "Light mode" : "Dark mode"}>
              <IconButton
                onClick={toggleTheme}
                size="small"
                className="!text-gray-300 hover:!text-white hover:!bg-white/10 transition-all duration-250"
                sx={{ color: "#D1D5DB" }}
              >
              {isDark ? (
                  <DarkMode sx={{ fontSize: 20 }} />
                ) : (
                  <LightMode sx={{ fontSize: 20 }} />
                )}
              </IconButton>
            </Tooltip>

            <Tooltip title="Wishlist">
              <IconButton
                component={Link}
                to="/user/wishlist"
                size="small"
                sx={{ color: "#D1D5DB" }}
                className="hover:!bg-white/10 transition-all hidden md:flex"
              >
                <Favorite sx={{ fontSize: 20 }} />
              </IconButton>
            </Tooltip>

            <div
              className="hidden md:flex flex-col cursor-pointer hover:outline hover:outline-1 hover:outline-white rounded px-2 py-1 transition-all"
              onClick={(e) => setAnchorEl(e.currentTarget)}
            >
              <span className="text-gray-400 text-[10px]">
                {user ? `Hello, ${user.name}` : "Hello, Sign in"}
              </span>
              <div className="flex items-center gap-0.5">
                <span className="text-white text-xs font-semibold">
                  Account & Lists
                </span>
                <KeyboardArrowDown sx={{ fontSize: 14, color: "#fff" }} />
              </div>
            </div>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              slotProps={{
                paper: {
                  sx: {
                    mt: 1,
                    minWidth: 200,
                    borderRadius: "10px",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                  },
                },
              }}
            >
              {user ? (
                <MenuItem
                  onClick={() => {
                    logout();
                    setAnchorEl(null);
                  }}
                  dense
                >
                  <AccountCircle sx={{ mr: 1, fontSize: 18 }} />
                  Sign Out
                </MenuItem>
              ) : (
                <MenuItem
                  onClick={() => {
                    navigate("/login");
                    setAnchorEl(null);
                  }}
                  dense
                >
                  <AccountCircle sx={{ mr: 1, fontSize: 18 }} />
                  Sign In
                </MenuItem>
              )}
              <Divider />
              <MenuItem
                onClick={() => {
                  navigate("/user/orders");
                  setAnchorEl(null);
                }}
                dense
              >
                My Orders
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/user/profile");
                  setAnchorEl(null);
                }}
                dense
              >
                My Profile
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/seller");
                  setAnchorEl(null);
                }}
                dense
              >
                Seller Central
              </MenuItem>
            </Menu>

            <div className="hidden lg:flex flex-col cursor-pointer hover:outline hover:outline-1 hover:outline-white rounded px-2 py-1 transition-all">
              <span className="text-gray-400 text-[10px]">Returns</span>
              <span className="text-white text-xs font-semibold">& Orders</span>
            </div>

            <Link
              to="/user/cart"
              className="flex items-end gap-1 hover:outline hover:outline-1 hover:outline-white rounded px-2 py-1 transition-all group"
            >
              <div className="relative">
                <Badge
                  badgeContent={cartCount}
                  sx={{
                    "& .MuiBadge-badge": {
                      backgroundColor: "#FF9900",
                      color: "#0F1111",
                      fontWeight: 700,
                      fontSize: "11px",
                    },
                  }}
                >
                  <ShoppingCart
                    sx={{ fontSize: 28, color: "#fff" }}
                    className="group-hover:text-az-orange transition-colors"
                  />
                </Badge>
              </div>
              <span className="text-white text-xs font-semibold hidden sm:block pb-1">
                Cart
              </span>
            </Link>

            <IconButton
              className="md:hidden !text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              sx={{ color: "#fff" }}
            >
              {mobileMenuOpen ? <Close /> : <MenuIcon />}
            </IconButton>
          </div>
        </div>

        <div className="hidden md:block bg-az-nav dark:bg-dk-card border-t border-white/5">
          <div className="max-w-[1600px] mx-auto px-6 flex items-center gap-1 overflow-x-auto scrollbar-none h-10">
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept}
                className="text-white text-xs font-medium whitespace-nowrap px-3 py-1.5 rounded hover:outline hover:outline-1 hover:outline-white transition-all flex-shrink-0"
              >
                {dept}
              </button>
            ))}
            <div className="ml-auto flex items-center gap-3 flex-shrink-0">
              <span className="text-az-orange text-xs font-semibold flex items-center gap-1">
                <LocalShipping sx={{ fontSize: 14 }} />
                Today's Deals
              </span>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-az-nav dark:bg-dk-surface border-t border-white/10 py-4 px-4">
            <div className="flex flex-col gap-2">
              {DEPARTMENTS.map((dept) => (
                <button
                  key={dept}
                  className="text-white text-sm text-left py-2 px-3 rounded hover:bg-white/10 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
