"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { ExternalLink, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  logoUrl?: string;
  imageUrl?: string;
}

function CertificateModal({
  imageUrl,
  title,
  onClose,
}: {
  imageUrl: string;
  title: string;
  onClose: () => void;
}) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    // Prevent background scroll
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div
      style={{ position: "fixed", inset: 0, zIndex: 9999 }}
      className="flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
          aria-label="Close certificate"
        >
          <X className="size-7" />
        </button>

        <Image
          src={imageUrl}
          alt={`${title} certificate`}
          width={1000}
          height={707}
          className="w-full rounded-lg shadow-2xl"
          priority
        />
      </div>
    </div>,
    document.body
  );
}

export const CertificateCard = ({
  title,
  issuer,
  date,
  credentialUrl,
  logoUrl,
  imageUrl,
}: CertificateCardProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Card
        className="flex items-center cursor-pointer hover:bg-accent/50 transition-colors"
        onClick={() => imageUrl && setOpen(true)}
      >
        <div className="flex-none">
          <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage src={logoUrl ?? ""} alt={issuer} className="object-contain" />
            <AvatarFallback>{issuer[0]}</AvatarFallback>
          </Avatar>
        </div>

        <div className="flex-grow ml-4">
          <CardHeader className="py-3">
            <div className="flex items-center justify-between gap-x-2">
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-xs sm:text-[16px] leading-none">
                  {title}
                </h3>
                <p className="text-xs text-muted-foreground">{issuer}</p>
              </div>

              <div className="flex flex-col items-end gap-1 shrink-0">
                {date && (
                  <span className="text-xs sm:text-sm tabular-nums text-muted-foreground">
                    {date}
                  </span>
                )}
                {credentialUrl ? (
                  <Link
                    href={credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-xs text-blue-500 hover:underline"
                  >
                    <ExternalLink className="size-3" />
                    View Credential
                  </Link>
                ) : (
                  <Badge variant="secondary" className="text-xs font-normal">
                    Certified
                  </Badge>
                )}
              </div>
            </div>
          </CardHeader>
        </div>
      </Card>

      {open && imageUrl && (
        <CertificateModal
          imageUrl={imageUrl}
          title={title}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};
