import Link from "next/link";

const Essence = () => {
    return ( 
        <div>
            <div>The Essence of Being Social</div>
            <Link href={'/'}>Back</Link>
            



            <Link href={'/beginner'}>A Beginner's Guide</Link>
            <Link href={'/intermediate'}>Intermediate</Link>
            <Link href={'/advanced'}>Advanced</Link>
        </div>
     );
}
 
export default Essence;