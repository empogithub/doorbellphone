import Link from "next/link";

export default function Navbar(){

return(

<nav className="bg-gray-900 p-4 flex gap-4">

<Link href="/">Home</Link>

<Link href="/doorbell">Doorbell</Link>

<Link href="/client">Client</Link>

<Link href="/dashboard">Dashboard</Link>

</nav>

);

}
