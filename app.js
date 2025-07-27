// === Supabase Connection ===
const SUPABASE_URL = "https://qsfnaernfqcwhxionpyq.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzZm5hZXJuZnFjd2h4aW9ucHlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyODU1MjMsImV4cCI6MjA2Njg2MTUyM30.sdBsJJDzDQ7ffEpwmLFhSMeG4WaFRVTdexG-sUwCvv0";
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// === Login Function ===
async function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert("Please enter email & password");
        return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
        alert("Login failed: " + error.message);
    } else {
        alert("Login successful!");
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        loadDashboard();
    }
}

// === Load Dashboard Content ===
function loadDashboard() {
    document.getElementById('dashboard-content').innerHTML = `
        <h2>Welcome to LASH.AI Edutech</h2>
        <p>Your personalized learning journey starts here.</p>
    `;
}
