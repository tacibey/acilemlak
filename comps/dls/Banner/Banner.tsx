import Image from "next/image";

const Banner = () => (
  <div>
    <p>Banner Resmi Aşağıda Olmalı:</p>
    <Image
      src="/real3.webp" // Bu yolun public klasörünün köküne göre olduğunu teyit ettik
      alt="Banner Resmi"
      width={500} // Geçici olarak daha küçük bir boyut verelim
      height={200} // Geçici olarak daha küçük bir boyut verelim
    />
    <p>Banner Resmi Yukarıda Olmalı.</p>
  </div>
);

export default Banner;
