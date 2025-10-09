import { redirect } from 'next/navigation'

export default async function HomePage({ searchParams }: { searchParams: { page?: string } }) {
redirect('/character')
}