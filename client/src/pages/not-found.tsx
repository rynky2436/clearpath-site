import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Helmet } from "react-helmet";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | ClearPath Tech Solutions | DC Metro IT Support Services</title>
        <meta name="description" content="Sorry, the page you're looking for doesn't exist. Return to ClearPath Tech Solutions - your trusted IT support and managed services provider in the DC Metro area." />
        <meta property="og:title" content="Page Not Found | ClearPath Tech - DMV IT Services" />
        <meta property="og:description" content="The page you requested could not be found. ClearPath Tech Solutions provides managed IT services and IT support throughout Washington DC, Maryland, and Northern Virginia." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
        <Card className="w-full max-w-md mx-4 overflow-hidden">
          <div className="bg-primary text-white p-4">
            <h1 className="text-xl font-bold">ClearPath Tech Solutions</h1>
          </div>
          <CardContent className="pt-6">
            <div className="flex mb-4 gap-2">
              <AlertCircle className="h-8 w-8 text-red-500" />
              <h2 className="text-2xl font-bold text-gray-900">404 Page Not Found</h2>
            </div>

            <p className="mt-4 text-gray-600">
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
            
            <div className="mt-8 space-y-4">
              <Button asChild className="w-full">
                <Link href="/">Return to Homepage</Link>
              </Button>
              
              <div className="text-center">
                <p className="text-sm text-gray-500">Need IT support in the DC Metro area?</p>
                <p className="text-sm text-gray-500">Call us at (410) 555-0123</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
