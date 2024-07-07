<script lang="ts">
  import '$lib/styles/login.css'
  import { redirect } from '@sveltejs/kit';
  import { goto } from '$app/navigation';
  interface LoginData {
    login: string,
    password: string
  }

  interface statusResponse400 {
      code: string,
      description: string,
      exceptionName: string,
      exceptionMessage: string
  }



  let login: string = '';
  let password: string = '';

  async function handleChange() {
    try {
      if (login === '' || password === '') {
          throw new Error('Incorrect input: fill all fields!');
      }
      const loginData: LoginData = {
          login,
          password
      }
      console.log(loginData)
      /*
      console.log(loginData)
      const sending = await fetch('/account/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginData),
      });

      const currentStatus: number = sending.status;

      if (currentStatus === 200) {

      } else if (currentStatus >= 400) {
          const badRequest: statusResponse400 = await sending.json();
          const stringError: string = badRequest.description;
          throw new Error(stringError);
      } else {
          throw new Error('Непредвиденная ошибка. Попробуйте позже');
      }*/

  } catch (error) {
      alert(error)
  }
  await goto('/menu')

  }

</script>
<div class="wrapper">
            <h1>SafeShelf</h1>
            <div class="inputs-log">
                <label for="mail">Login</label>
                    <input type="email" id="mail" name="login" required bind:value={login}>

                <label for="password">Password</label>
                    <input type="password" id="password" required bind:value={password}/>

                <button on:click={handleChange} class='login-btn'>Log in</button>
            </div>
            <div class='text'>Have no account?</div>
            <button class='sign-btn' >Sign up</button>
</div>
