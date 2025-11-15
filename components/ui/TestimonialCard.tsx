import Image from "next/image";

export type Testimonial = {
  logo: string;
  text: string;
  authorImage: string;
  name: string;
  role: string;
};

export default function TestimonialCard({
  logo,
  text,
  authorImage,
  name,
  role,
}: Testimonial) {
  return (
    <div className="rounded-2xl border-neutral-800 p-6 bg-neutral-900/40 backdrop-blur-sm flex flex-col gap-4">
      {/* Logo */}
      <Image
        src={logo}
        alt={name}
        width={120}
        height={40}
        className="object-contain opacity-90"
      />

      {/* Text */}
      <p className="text-neutral-300 leading-relaxed">
        {text.split("<span>").join("<span class='text-white font-semibold'>")}
      </p>

      {/* Divider */}
      <hr className="border-neutral-700" />

      {/* Author */}
      <div className="flex items-center gap-4">
        <Image
          src={authorImage}
          alt={name}
          width={56}
          height={56}
          className="rounded-full object-cover"
        />
        <div>
          <p className="text-white font-semibold">{name}</p>
          <p className="text-neutral-400 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
}
