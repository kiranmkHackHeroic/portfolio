import type { Metadata } from "next";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
}

export function generateMetadata({
  title = "Kiran MK - AI Engineer Portfolio",
  description = "AI Engineer specializing in Python, TensorFlow & LLMs. Passionate about NLP, computer vision & deploying scalable ML solutions.",
  keywords = ["AI Engineer", "Machine Learning", "Python", "TensorFlow", "NLP", "Computer Vision", "Portfolio"],
  canonicalUrl = "https://kiranmk.dev",
  ogImage = "/og-image.jpg"
}: SEOProps = {}): Metadata {
  return {
    title,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: "Kiran MK" }],
    robots: "index, follow",
    openGraph: {
      title,
      description,
      type: "website",
      url: canonicalUrl,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: "Kiran MK Portfolio",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@kiranmk",
    },
    alternates: {
      canonical: canonicalUrl,
    },
    verification: {
      google: "your-google-verification-code",
    },
  };
}