'use client'; 

import { useState, useEffect, ReactNode, ComponentType } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
//import { signOut, useSession } from 'next-auth/react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Menu, X, Home, BookOpen, LayoutDashboard, Newspaper, LogOut, ArrowLeftCircle, LucideProps, 
    Users,
    Info,
    Store
} from 'lucide-react';

// --- Type Definitions ---
interface NavItemDefinition {
  href?: string;        // Optional: If not present, it's an action button
  label: string;
  icon: ComponentType<LucideProps>;
  action?: () => void;  // For buttons like logout
  exactMatch?: boolean; // For precise active state matching (e.g., /admin vs /admin/posts)
  adminOnly?: boolean;  // True if this link should only appear in admin context
  publicOnly?: boolean; // True if this link should only appear in public context
  isIconOnly?: boolean; // True if the button/link should be icon-only (primarily for desktop admin)
  className?: string;   // Custom classes for specific items
}

// --- Reusable Navigation Item Component ---
const NavigationItem: React.FC<{
  item: NavItemDefinition;
  currentPathname: string;
  onClick?: () => void;
  isDesktop?: boolean; // To handle icon-only rendering on desktop
}> = ({ item, currentPathname, onClick, isDesktop }) => {
  
  const isActive = item.href ? 
    (item.exactMatch ? currentPathname === item.href : currentPathname.startsWith(item.href)) 
    : false;

  const baseClasses = "flex items-center w-full text-left gap-2.5 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-blue-500";
  
  let stateClasses = "";
  if (item.href) {
    stateClasses = isActive 
      ? 'bg-gradient-to-t from-neon-lime-100 to-transparent text-neon-lime-800 shadow-inner border-1 border-neon-lime-500' 
      : 'text-neutral-600 hover:bg-neon-lime-100 hover:text-neon-lime-700';
  } else if (item.action) { // For action buttons like Logout
    stateClasses = 'text-red-600 hover:bg-red-100 hover:text-red-700';
  }

  const IconComponent = item.icon;

  const content = (
    <>
      <IconComponent 
        className={`h-5 w-5 shrink-0 
          ${isActive && item.href ? 'text-neon-lime-700' : 
            (item.action ? 'group-hover:text-red-700' : 'text-neutral-500 group-hover:text-neon-lime-600')}
        `} 
      />
      {!(isDesktop && item.isIconOnly) && <span className="truncate">{item.label}</span>}
    </>
  );

  const itemProps = {
    onClick: () => {
      item.action?.();
      onClick?.(); // For closing mobile menu
    },
    className: `${baseClasses} ${stateClasses} ${item.className || ''} group`,
    title: (isDesktop && item.isIconOnly) ? item.label : undefined, // Tooltip for icon-only buttons
    'aria-label': item.label,
  };

  if (item.href) {
    return <Link href={item.href} {...itemProps}>{content}</Link>;
  } else {
    return <button type="button" {...itemProps}>{content}</button>;
  }
};

// --- Main Header Component ---
export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  //const { data: session, status: sessionStatus } = useSession();

  const isInAdminSection = pathname.startsWith('/admin');
  const isLoginPage = pathname === '/admin/login';
  const isAuthenticated = false;

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    closeMobileMenu();
  }, [pathname]);

  const handleLogoutAction = async () => {
    //await signOut({ redirect: false });
    router.push('/admin/login');
  };

  // Define all possible navigation items
  const siteNavLinks: NavItemDefinition[] = [
    { href: '/', label: 'Ana Sayfa', icon: Home, publicOnly: true, exactMatch: true },
    // { href: '/blog', label: 'Neavents Dergi', icon: BookOpen, publicOnly: true },
    { href: '/about', label: 'Hakkımızda', icon: Info, adminOnly: false, publicOnly: true, exactMatch: true },
    // { href: '/partners', label: 'Mekan/Etkinlik Sahibiyim', icon: Store, adminOnly: false, publicOnly: true, exactMatch: true },
  ];

  const adminNavLinks: NavItemDefinition[] = [
    { href: '/admin', label: 'Dashboard', icon: LayoutDashboard, exactMatch: true, adminOnly: true },
    { href: '/admin/posts', label: 'Yazılar', icon: Newspaper, adminOnly: true, exactMatch: false },
    { href: '/admin/authors', label: 'Yazarlar', icon: Users, adminOnly: true, exactMatch: false },
    { href: '/', label: 'Siteye Dön', icon: Home, adminOnly: true, isIconOnly: true, exactMatch: true }, // Icon only for desktop
    { label: 'Çıkış Yap', icon: LogOut, action: handleLogoutAction, adminOnly: true, isIconOnly: true, className: "!text-red-600 hover:!bg-red-100" }, // Icon only for desktop
  ];
  
  let currentNavItemsForMobile: NavItemDefinition[] = [];
  let currentNavItemsForDesktop: NavItemDefinition[] = [];

  if (isInAdminSection && isAuthenticated) {
    currentNavItemsForMobile = adminNavLinks.map(item => ({...item, isIconOnly: false})); // Mobile always shows labels
    currentNavItemsForDesktop = adminNavLinks;
  } else {
    currentNavItemsForMobile = siteNavLinks;
    currentNavItemsForDesktop = siteNavLinks;
  }
  
  // Don't render header on the login page itself
  if (isLoginPage) {
    return null;
  }

  return (
    <header className={`sticky top-0 z-50 bg-neon-lime-50/80 backdrop-blur-lg ${isMobileMenuOpen ? '' : `border-b`} border-neutral-400/20`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-14">
          {/* Logo & Conditional Admin Indicator */}
          <Link 
            href={(isInAdminSection && isAuthenticated) ? "/admin" : "/"} 
            className="flex items-center gap-2.5 group" 
            onClick={closeMobileMenu}
          >
            <Image
              src="/images/neavents-black-logo.png"
              alt="Neavents Logo"
              width={30} 
              height={20} 
              priority 
              className="transition-opacity group-hover:opacity-80"
            />
            {isInAdminSection && isAuthenticated && (
              <span className="sm:flex items-center border-l-2 border-neutral-300/70 pl-2.5 ml-1 text-sm font-bold text-blue-600 tracking-wider uppercase transition-colors group-hover:text-blue-700">
                ADMIN
              </span>
            )}
            {!isInAdminSection &&(
              <span className="sm:flex items-center border-l-2 border-neutral-300/70 pl-2.5 ml-1 text-sm font-bold text-neutral-600 tracking-wider uppercase transition-colors group-hover:text-neon-lime-700">
                QR SmartMenu
              </span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1.5">
            {currentNavItemsForDesktop.map(item => (
              <NavigationItem 
                key={item.label} 
                item={item} 
                currentPathname={pathname} 
                isDesktop={true} 
              />
            ))}
          </nav>

          {/* Mobile Menu Button - only show if there are items to display */}
          {currentNavItemsForMobile.length > 0 && (
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-expanded={isMobileMenuOpen}
                aria-label="Menüyü aç/kapat"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && currentNavItemsForMobile.length > 0 && (
          <motion.div 
          className="md:hidden absolute top-full left-0 right-0 w-full  bg-neutral-0/80 backdrop-blur-lg  border-b border-neutral-400/20  overflow-y-auto"
          style={{ maxHeight: 'calc(100vh - 80px)' }} // 80px is header height approx.
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2, ease: "circOut" }}
          >
            <div className="px-2 pt-2 pb-4 space-y-1.5 sm:px-3 ">
              {currentNavItemsForMobile.map(item => (
                <NavigationItem 
                key={item.label} 
                item={item} 
                currentPathname={pathname} 
                onClick={() => {
                  // item.action is already called inside NavigationItem
                  closeMobileMenu(); // Ensure mobile menu closes
                }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};