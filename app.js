const SUPABASE_URL = "https://qsfnaernfqcwhxionpyq.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzZm5hZXJuZnFjd2h4aW9ucHlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyODU1MjMsImV4cCI6MjA2Njg2MTUyM30.sdBsJJDzDQ7ffEpwmLFhSMeG4WaFRVTdexG-sUwCvv0";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    document.getElementById('error-message').textContent = error.message;
  } else {
    window.location.href = "home.html";
  }
});

// Redirect to signup
document.getElementById('signup-link').addEventListener('click', async () => {
  const email = prompt("Enter your email to sign up:");
  const password = prompt("Enter a password:");
  if (!email || !password) return;

  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) {
    alert(error.message);
  } else {
    alert("Signup successful! Please check your email to verify.");
  }
});
