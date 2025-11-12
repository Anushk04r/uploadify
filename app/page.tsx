import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">Simple Media Upload Platform</h1>
          <p className="text-xl text-gray-600 mb-2">Upload and view your images and videos securely.</p>
          <p className="text-sm text-gray-500">Store your media in the cloud with ease</p>
        </div>

        {session ? (
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👤</span>
              </div>
              <p className="text-lg text-gray-700 mb-1">Welcome back!</p>
              <p className="text-sm text-gray-500">{session.user?.email}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <Link 
                href="/upload" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-lg text-center transition-colors shadow-md"
              >
                <div className="text-2xl mb-2">📤</div>
                <div className="font-semibold">Upload Media</div>
              </Link>
              <Link 
                href="/gallery" 
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg text-center transition-colors shadow-md"
              >
                <div className="text-2xl mb-2">🖼️</div>
                <div className="font-semibold">View Gallery</div>
              </Link>
              <form action="/api/auth/signout" method="POST" className="w-full">
                <button 
                  type="submit" 
                  className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-4 rounded-lg transition-colors shadow-md"
                >
                  <div className="text-2xl mb-2">🚪</div>
                  <div className="font-semibold">Logout</div>
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🔐</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Get Started</h2>
              <p className="text-gray-600">Sign in or create an account to upload your media</p>
            </div>
            <div className="space-y-3">
              <Link 
                href="/login" 
                className="block w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-center font-semibold transition-colors shadow-md"
              >
                Login
              </Link>
              <Link 
                href="/register" 
                className="block w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-center font-semibold transition-colors shadow-md"
              >
                Create Account
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}