import { SEOProps } from "@/types/seo";
import { Metadata } from "next";

export function generateMetadata(props: SEOProps): Metadata {
  const {
    title,
    description,
    keywords,
    ogImage = "/og-default.jpg",
    ogType = "website",
  } = props;

  return {
    title,
    description,
    keywords: keywords.join(", "),
    openGraph: {
      title,
      description,
      images: [{ url: ogImage }],
      type: ogType,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: "/", // Update this for each page
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code", // Replace with your actual verification code
    },
  };
}
