import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import type { SupabaseClient } from '@supabase/auth-helpers-nextjs'

interface Props {
  supabaseClient: SupabaseClient
}

export default function LoginForm({ supabaseClient }: Props) {
  return (
    <Auth
      supabaseClient={supabaseClient}
      appearance={{
        theme: ThemeSupa,
        variables: {
          default: { colors: { brand: '#5f5b6b', brandAccent: '#7f7979' } }
        }
      }}
      theme="dark"
      view="sign_in"
      providers={[]}
      showLinks={false}
      localization={{
        variables: {
          sign_in: {
            email_label: 'Correo electrónico',
            email_input_placeholder: undefined,
            password_label: 'Contraseña',
            password_input_placeholder: undefined,
            button_label: 'Iniciar sesión',
            loading_button_label: 'Iniciando sesión...'
          }
        }
      }}
    />
  )
}
