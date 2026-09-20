import Image from "next/image";

type ThumbProps = {
  image?: { src: string; alt: string };
  gradient: string;
  label: string;
  className?: string;
};

const base =
  "z-10 mb-2 mt-1 aspect-[16/10] w-full rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2";

/** Screenshot thumbnail: next/image when `image` is set, else a gradient placeholder. */
export function Thumb({ image, gradient, label, className = "" }: ThumbProps) {
  if (image) {
    return (
      <Image
        src={image.src}
        alt={image.alt}
        width={480}
        height={300}
        sizes="(min-width: 640px) 160px, 100vw"
        className={`${base} h-auto object-cover ${className}`}
      />
    );
  }
  return (
    <div role="img" aria-label={label} className={`${base} ${gradient} ${className}`} />
  );
}
