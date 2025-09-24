'use client'


type props = {
  error: Error
  reset: () => void
}

export default function Error(props: props) {

  return (
    <div>
      <h2>Щось пішло не так!</h2>
      <p>{props.error.message}</p>
      <button onClick={props.reset}>Спробувати знову</button>
    </div>
  )
}