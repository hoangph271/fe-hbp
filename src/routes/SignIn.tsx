import { FC, useState } from 'react'
import { styled } from '@stitches/react'
import * as Avatar from '@radix-ui/react-avatar'

const StyledAvatar = styled(Avatar.Image, {
  maxWidth: '100%',
  borderRadius: '50%',
  backgroundColor: 'rgba(225, 225, 225, 0.15)',
  border: '1px solid rgba(125, 125, 125, 0.25)'
})

const StyledButton = styled('button', {
  padding: '0.4rem 0.8rem'
})

export const SignIn: FC<{}> = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form
      onSubmit={e => e.preventDefault()}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.4rem'
      }}
    >
      <Avatar.Root style={{ maxWidth: '8rem', maxHeight: '8rem', display: 'inline-block' }}>
        <StyledAvatar src="/favicon.png" />
      </Avatar.Root>
      <input
        type="text"
        name="username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <StyledButton type="submit">
        {'Sign In'}
      </StyledButton>
    </form>
  )
}
