export default function Button(props) {
  return (
    <input type="submit" value={'Запрос'} onClick={props.onClick}/>
  )
}