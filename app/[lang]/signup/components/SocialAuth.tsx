import FacebookAuth from '@/components/Oauth/FacebookAuth'
import GoogleAuth from '@/components/Oauth/GoogleAuth'
import TwitterAuth from '@/components/Oauth/TwitterAuth'


function SocialAuth() {
    return <div className="self-stretch justify-center items-center gap-2 inline-flex flex-wrap">
        <GoogleAuth />
        <FacebookAuth />
        <TwitterAuth />
    </div>
}

export default SocialAuth;




