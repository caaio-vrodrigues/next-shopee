import Link from "next/link";

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center h-screen text-yellow-400'>
      <div>Home</div>
      <br />
      <Link href='/store'>Store</Link>
    </div>
  );
};
