// Simple in-memory database for testing
const users = [
  {
    id: 1,
    email: 'admin@admin.com',
    password: '12345678', // In real apps, never store plaintext passwords!
    createdAt: new Date()
  }
];

// Helper function to simulate delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const POST = async ({ request, params }) => {
  const { action } = params;
  const { email, password, rememberMe } = await request.json();

  // Simulate network delay
  await delay(500);

  if (action === 'login') {
    const user = users.find(u => u.email === email);
    
    if (!user) {
      return new Response(JSON.stringify({
        success: false,
        message: 'User not found'
      }), { status: 401 });
    }

    if (user.password !== password) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Invalid password'
      }), { status: 401 });
    }

    return new Response(JSON.stringify({
      success: true,
      user: {
        id: user.id,
        email: user.email
      },
      token: 'mock-jwt-token-for-testing'
    }));

  } else if (action === 'register') {
    if (users.some(u => u.email === email)) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Email already exists'
      }), { status: 400 });
    }

    const newUser = {
      id: users.length + 1,
      email,
      password, // In real apps, hash this!
      createdAt: new Date()
    };

    users.push(newUser);

    return new Response(JSON.stringify({
      success: true,
      user: {
        id: newUser.id,
        email: newUser.email
      },
      token: 'mock-jwt-token-for-testing'
    }));
  }

  return new Response(JSON.stringify({
    success: false,
    message: 'Invalid action'
  }), { status: 400 });
};