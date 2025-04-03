import Link from "next/link";

const Beginner = () => {
    return ( 
        <div>
            <div>A Beginner&apos;s Guide</div>
            <Link href={'/essence'}>Back</Link>
        </div>
     );
}
 
export default Beginner;