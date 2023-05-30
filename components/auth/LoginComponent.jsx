import { createSignal } from 'solid-js'

export default function userLogin() {
  return (
    <div class="row flex-center flex">
      <div class="col-6 form-widget" aria-live="polite">
        <h1 class="header">Supabase + SolidJS</h1>
        <p class="description">Sign in with your email and password below</p>
        <form class="form-widget">
          <div>
            <label for="email">Email</label>
            <input
              id="email"
              name='email'
              class="inputField"
              type="email"
              placeholder="Your email"
            />
          </div>
          <div>
            <label for="password">Password</label>
            <input
              id="password"
              class="inputField"
              name='password'
              type="password"
              placeholder="Your password"
         
            />
          </div>
          <div>
            <button type="submit" class="button block" aria-live="polite">
              a
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}