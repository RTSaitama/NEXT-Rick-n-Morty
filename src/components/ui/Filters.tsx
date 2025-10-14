 'use client'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Filters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const [filters, setFilters] = useState({
    name: searchParams.get('name') || '',
    status: searchParams.get('status') || '',
    species: searchParams.get('species') || '',
    gender: searchParams.get('gender') || ''
  })

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  
  console.log('Filters state:', filters)  
  console.log('Current pathname:', pathname)
  
  const params = new URLSearchParams()
  if (filters.name) params.set('name', filters.name)
  if (filters.status) params.set('status', filters.status)
  if (filters.species) params.set('species', filters.species)
  if (filters.gender) params.set('gender', filters.gender)
  
  const finalUrl = `${pathname}?${params.toString()}`
  console.log('Redirecting to:', finalUrl)
  console.log('Characters page searchParams:', searchParams)
  router.push(finalUrl)
}
  return (
    <form 
      onSubmit={handleSubmit} 
      className="rick-morty-card sidebar p-6 mb-8 "
    >
      <h2 className="text-2xl font-bold text-green-400 mb-6 text-center">
        Filter Characters
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-green-400 font-bold mb-2">Character Name</label>
          <input
            type="text"
            placeholder="Rick, Morty, Summer..."
            value={filters.name}
            onChange={(e) => setFilters({...filters, name: e.target.value})}
            className="w-full p-3 rounded-lg bg-black/70 border-2 border-green-400 text-green-400 placeholder-green-400/50 focus:border-pink-400 focus:outline-none transition-colors"
          />
        </div>
        
        <div>
          <label className="block text-purple-400 font-bold mb-2">Status</label>
          <select
            value={filters.status}
            onChange={(e) => setFilters({...filters, status: e.target.value})}
            className="w-full p-3 rounded-lg bg-black/70 border-2 border-purple-400 text-purple-400 focus:border-pink-400 focus:outline-none transition-colors"
          >
            <option value="">All Status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        
        <div>
          <label className="block text-blue-400 font-bold mb-2">Species</label>
          <input
            type="text"
            placeholder="Human, Alien..."
            value={filters.species}
            onChange={(e) => setFilters({...filters, species: e.target.value})}
            className="w-full p-3 rounded-lg bg-black/70 border-2 border-blue-400 text-blue-400 placeholder-blue-400/50 focus:border-pink-400 focus:outline-none transition-colors"
          />
        </div>
        
        <div>
          <label className="block text-pink-400 font-bold mb-2">Gender</label>
          <select
            value={filters.gender}
            onChange={(e) => setFilters({...filters, gender: e.target.value})}
            className="w-full p-3 rounded-lg bg-black/70 border-2 border-pink-400 text-pink-400 focus:border-green-400 focus:outline-none transition-colors"
          >
            <option value="">All Genders</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-[10px] justify-center ">
        <button type="submit" className="portal-button px-2 py-2 text-lg">
          Apply Filters
        </button>
        <button 
          type="button" 
          onClick={() => router.push('/')}
          className=" portal-button  px-8  py-3 text-lg font-bold border-2 border-red-400 text-red-400 rounded-full hover:bg-red-400 hover:text-black transition-all duration-300"
        >
          Clear All
        </button>
      </div>
    </form>
  )
}
