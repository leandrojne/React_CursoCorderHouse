import { useRef } from 'react'
import ReCAPTCHA from "react-google-recaptcha";

export default function ReCaptcha({ captchaOk }) {
    const captcha = useRef(null)
    //
    const onChangeCaptcha = () => {
        captchaOk(captcha.current.getValue())
    }

    return (
        <ReCAPTCHA ref={captcha} sitekey='6LfzBBsqAAAAANMn_4Vz-8ZeTqkt3Hsw94exbUYD' onChange={onChangeCaptcha}/>
    )
}
