import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

const Terms = () => {
	const { t } = useTranslation();

	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />
			
			<main className="flex-1 bg-secondary">
				{/* Hero Section */}
				<section className="bg-gradient-to-b from-secondary to-background py-16 lg:py-20">
					<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="text-center max-w-3xl mx-auto">
							<div className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent items-center justify-center mb-6 shadow-medium">
								<FileText className="h-8 w-8 text-primary-foreground" />
							</div>
							<h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
								{t("terms.title")}
							</h1>
							<p className="text-lg sm:text-xl text-muted-foreground">
								{t("terms.lastUpdated")}
							</p>
						</div>
					</div>
				</section>

				{/* Content Section */}
				<section className="py-12 lg:py-20">
					<div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
						<div className="bg-background rounded-2xl p-8 lg:p-10 shadow-medium border border-border">
							<div className="prose prose-lg max-w-none">
								{/* Carrier Obligations */}
								<div className="mb-8">
									<h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
										{t("terms.carrierObligations.title")}
									</h2>
									<ul className="space-y-3 text-muted-foreground">
										<li className="flex items-start">
											<span className="text-primary mr-2">•</span>
											<span>{t("terms.carrierObligations.item1")}</span>
										</li>
										<li className="flex items-start">
											<span className="text-primary mr-2">•</span>
											<span>{t("terms.carrierObligations.item2")}</span>
										</li>
										<li className="flex items-start">
											<span className="text-primary mr-2">•</span>
											<span>{t("terms.carrierObligations.item3")}</span>
										</li>
									</ul>
								</div>

								{/* Client Obligations */}
								<div className="mb-8">
									<h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
										{t("terms.clientObligations.title")}
									</h2>
									<ul className="space-y-3 text-muted-foreground">
										<li className="flex items-start">
											<span className="text-primary mr-2">•</span>
											<span>{t("terms.clientObligations.item1")}</span>
										</li>
										<li className="flex items-start">
											<span className="text-primary mr-2">•</span>
											<span>{t("terms.clientObligations.item2")}</span>
										</li>
										<li className="flex items-start">
											<span className="text-primary mr-2">•</span>
											<span>{t("terms.clientObligations.item3")}</span>
										</li>
										<li className="flex items-start">
											<span className="text-primary mr-2">•</span>
											<span>{t("terms.clientObligations.item4")}</span>
										</li>
									</ul>
								</div>

								{/* Pricing */}
								<div className="mb-8">
									<h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
										{t("terms.pricing.title")}
									</h2>
									<p className="text-muted-foreground mb-4">
										{t("terms.pricing.description")}
									</p>
									<p className="text-muted-foreground mb-4">
										{t("terms.pricing.notIncluded")}
									</p>
									<ul className="space-y-3 text-muted-foreground">
										<li className="flex items-start">
											<span className="text-primary mr-2">a)</span>
											<span>{t("terms.pricing.items.a")}</span>
										</li>
										<li className="flex items-start">
											<span className="text-primary mr-2">b)</span>
											<span>{t("terms.pricing.items.b")}</span>
										</li>
										<li className="flex items-start">
											<span className="text-primary mr-2">c)</span>
											<span>{t("terms.pricing.items.c")}</span>
										</li>
										<li className="flex items-start">
											<span className="text-primary mr-2">d)</span>
											<span>{t("terms.pricing.items.d")}</span>
										</li>
										<li className="flex items-start">
											<span className="text-primary mr-2">e)</span>
											<span>{t("terms.pricing.items.e")}</span>
										</li>
										<li className="flex items-start">
											<span className="text-primary mr-2">f)</span>
											<span>{t("terms.pricing.items.f")}</span>
										</li>
										<li className="flex items-start">
											<span className="text-primary mr-2">g)</span>
											<span>{t("terms.pricing.items.g")}</span>
										</li>
									</ul>
								</div>

								{/* Cleaning */}
								<div className="mb-8">
									<h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
										{t("terms.cleaning.title")}
									</h2>
									<p className="text-muted-foreground mb-4">
										{t("terms.cleaning.description")}
									</p>
									<p className="text-muted-foreground mb-4">
										{t("terms.cleaning.separateOrder")}
									</p>
									<ul className="space-y-3 text-muted-foreground">
										<li className="flex items-start">
											<span className="text-primary mr-2">•</span>
											<span>{t("terms.cleaning.items.item1")}</span>
										</li>
										<li className="flex items-start">
											<span className="text-primary mr-2">•</span>
											<span>{t("terms.cleaning.items.item2")}</span>
										</li>
										<li className="flex items-start">
											<span className="text-primary mr-2">•</span>
											<span>{t("terms.cleaning.items.item3")}</span>
										</li>
										<li className="flex items-start">
											<span className="text-primary mr-2">•</span>
											<span>{t("terms.cleaning.items.item4")}</span>
										</li>
										<li className="flex items-start">
											<span className="text-primary mr-2">•</span>
											<span>{t("terms.cleaning.items.item5")}</span>
										</li>
									</ul>
								</div>

								{/* Furniture Lift */}
								<div className="mb-8">
									<h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
										{t("terms.furnitureLift.title")}
									</h2>
									<p className="text-muted-foreground">
										{t("terms.furnitureLift.description")}
									</p>
								</div>

								{/* Insurance */}
								<div className="mb-8">
									<h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
										{t("terms.insurance.title")}
									</h2>
									<p className="text-muted-foreground mb-4">
										{t("terms.insurance.description")}
									</p>
									<p className="text-muted-foreground mb-4">
										{t("terms.insurance.coverage")}
									</p>
									<p className="text-muted-foreground">
										{t("terms.insurance.reporting")}
									</p>
								</div>

								{/* Cancellation */}
								<div className="mb-8">
									<h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
										{t("terms.cancellation.title")}
									</h2>
									<p className="text-muted-foreground mb-4">
										{t("terms.cancellation.description")}
									</p>
									<p className="text-muted-foreground">
										{t("terms.cancellation.written")}
									</p>
								</div>

								{/* Payment */}
								<div className="mb-8">
									<h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
										{t("terms.payment.title")}
									</h2>
									<p className="text-muted-foreground mb-4">
										{t("terms.payment.description")}
									</p>
									<p className="text-muted-foreground">
										{t("terms.payment.international")}
									</p>
								</div>

								{/* Signature */}
								<div className="mt-12 pt-8 border-t border-border">
									<p className="text-muted-foreground">
										{t("terms.signature")}
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default Terms;

