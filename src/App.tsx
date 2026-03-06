import './i18n'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import Quote from "./pages/Quote";
import Offers from "./pages/Offers";
import Booking from "./pages/Booking";
import BookingSuccess from "./pages/BookingSuccess";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";
import NetlifyForms from "./components/NetlifyForms";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait">
			<PageTransition key={location.pathname}>
				<Routes location={location}>
					<Route path="/" element={<Index />} />
					<Route path="/quote" element={<Quote />} />
					<Route path="/offers" element={<Offers />} />
					<Route path="/booking" element={<Booking />} />
					<Route path="/booking-success" element={<BookingSuccess />} />
					<Route path="/services" element={<Services />} />
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/legal/terms" element={<Terms />} />
					{/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</PageTransition>
		</AnimatePresence>
	);
};

const App = () => (
	<QueryClientProvider client={queryClient}>
		<TooltipProvider>
			<NetlifyForms />
			<Toaster />
			<Sonner />
			<BrowserRouter>
				<ScrollToTop />
				<AnimatedRoutes />
			</BrowserRouter>
		</TooltipProvider>
	</QueryClientProvider>
);

export default App;
