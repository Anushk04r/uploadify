'use client'

import { useSession, signOut } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface Media {
  _id: string
  fileName: string
  url: string
  type: string
  size: number
  createdAt: string
}

export default function Gallery() {
  const { data: session, status } = useSession()
  const [media, setMedia] = useState<Media[]>([])
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  useEffect(() => {
    if (session) {
      fetch('/api/media')
        .then((res) => res.json())
        .then(setMedia)
    }
  }, [session])

  if (status === 'loading' || !session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Your Gallery</h2>
          <div className="space-x-2">
            <Link href="/upload" className="bg-blue-500 text-white px-4 py-2 rounded text-sm">Upload</Link>
            <Link href="/" className="bg-gray-500 text-white px-4 py-2 rounded text-sm">Home</Link>
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="bg-red-500 text-white px-4 py-2 rounded text-sm"
            >
              Logout
            </button>
          </div>
        </div>
        
        {media.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">No media uploaded yet.</p>
            <Link href="/upload" className="bg-blue-500 text-white px-6 py-2 rounded inline-block">
              Upload Your First Media
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {media.map((item) => (
              <div key={item._id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                <div className="aspect-square bg-black flex items-center justify-center">
                  {item.type.startsWith('image') ? (
                    <img 
                      src={item.url} 
                      alt={item.fileName} 
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <video 
                      src={item.url} 
                      controls 
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium truncate" title={item.fileName}>{item.fileName}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}