import {useState} from 'react'
import {Bg, BgCard, Head, Para, ErrorPara, InputBox} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangeInput = event => {
    setPassword(event.target.value)
  }

  const passwordLength = password.length

  return (
    <Bg>
      <BgCard>
        <Head>Password Validator</Head>
        <Para>Check how strong and secure is your password</Para>
        <InputBox
          passwordLength={passwordLength}
          type="password"
          onChange={onChangeInput}
          value={password}
        />
        {passwordLength <= 8 && (
          <ErrorPara>Your password must be at least 8 characters</ErrorPara>
        )}
      </BgCard>
    </Bg>
  )
}
export default PasswordValidator
