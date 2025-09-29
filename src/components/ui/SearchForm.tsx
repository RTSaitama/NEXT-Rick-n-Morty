interface SearchFormProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function SearchForm({ value, onChange }: SearchFormProps) {
  return (
    <input
      type="text"
      placeholder="Rick, Morty, Summer..."
      value={value}
      onChange={onChange}
      className="w-full p-2 rounded-lg bg-slate-900 border-2 text-green-400 placeholder-green-400/50 focus:outline-none transition-colors border-green-400 focus:border-pink-400"
    />
  )
}
