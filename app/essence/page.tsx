import Link from "next/link";

const Essence = () => {

    return ( 
        <div>
            <div>The Essence of Being Social</div>
            <Link href={'/'}>Back</Link>
            
            <div>
                In the space between words, in the silent pauses between breaths, lies the true art of connection. It&apos;s not merely about the sentences we craft or the stories we tell, but about creating a resonance that transcends language itself.
            </div>

            <div>
                <div>The Nature of Conversation</div>
                <div>
                    It is the key to allow another to enjoy your presence requiring a creativity to explore the complexities of one&apos;s mind.
                </div>
            </div>

            <div>Choose Your Assumed Level</div>
            <Link href={'/beginner'}>A Beginner&apos;s Guide</Link>
            <Link href={'/intermediate'}>Intermediate</Link>
            <Link href={'/advanced'}>Advanced</Link>
        </div>
     );
}
 
export default Essence;