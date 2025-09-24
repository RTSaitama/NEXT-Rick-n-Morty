
export const Search = () => {
  return (
    <div className="w-full h-10 search flex flex-col   items-center justify-center row-start-2 border-2 border-red">
      <label htmlFor="search"> LABEL </label>
      <input type="text" name='search' className="bg-red w-40 h-10"/>
    </div>
  )
}