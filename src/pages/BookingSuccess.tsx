import { useLocation, Link } from "react-router-dom";
import { CheckCircle, Calendar, Mail, Phone, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const BookingSuccess = () => {
  const location = useLocation();
  const bookingData = location.state;

  if (!bookingData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">No booking data found</p>
            <Button asChild>
              <Link to="/">Return Home</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-secondary">
      <Navbar />
      
      <main className="flex-1 py-12 lg:py-16">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Success Message */}
          <div className="text-center mb-12">
            <div className="inline-flex w-20 h-20 rounded-full bg-success/10 items-center justify-center mb-6 animate-scale-in">
              <CheckCircle className="h-12 w-12 text-success" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-3">
              Booking Confirmed!
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              Your move is scheduled and confirmed
            </p>
            <p className="text-sm text-muted-foreground">
              Booking ID: <span className="font-mono font-semibold text-foreground">{bookingData.bookingId}</span>
            </p>
          </div>

          {/* Confirmation Details */}
          <div className="bg-background rounded-2xl p-8 shadow-medium border border-border space-y-6 mb-8">
            {/* Next Steps */}
            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                What Happens Next?
              </h2>
              <ol className="space-y-3">
                {[
                  "You'll receive a confirmation email with all booking details",
                  "Multifagro will contact you 24-48 hours before the move",
                  "Our team will be available 24/7 if you have any questions",
                  "On moving day, the crew will arrive during your selected time window",
                ].map((step, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold mr-3 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Move Details */}
            <div className="pt-6 border-t border-border">
              <h3 className="font-heading font-semibold text-foreground mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-primary" />
                Your Move Details
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground mb-1">Date</p>
                  <p className="font-medium text-foreground">
                    {new Date(bookingData.quoteData.moveDate).toLocaleDateString("en-GB", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Time</p>
                  <p className="font-medium text-foreground capitalize">{bookingData.quoteData.timeWindow}</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">From</p>
                  <p className="font-medium text-foreground">{bookingData.quoteData.fromAddress}</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">To</p>
                  <p className="font-medium text-foreground">{bookingData.quoteData.toAddress}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <Button variant="outline" size="lg" className="w-full">
              <Mail className="mr-2 h-5 w-5" />
              Email Confirmation
            </Button>
            <Button variant="outline" size="lg" className="w-full">
              <Download className="mr-2 h-5 w-5" />
              Download Receipt
            </Button>
          </div>

          {/* Contact Support */}
          <div className="bg-muted rounded-xl p-6 text-center">
            <h3 className="font-heading font-semibold text-foreground mb-2">
              Need to Make Changes?
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Contact our support team for any modifications to your booking
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:0782177760" className="flex items-center text-primary hover:text-primary-hover transition-colors">
                <Phone className="h-4 w-4 mr-2" />
                <span className="font-medium">078 217 77 60</span>
              </a>
              <a href="mailto:multifagroumzug@gmail.com" className="flex items-center text-primary hover:text-primary-hover transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                <span className="font-medium">multifagroumzug@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Return Home */}
          <div className="text-center mt-8">
            <Button asChild variant="default" size="lg">
              <Link to="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookingSuccess;
