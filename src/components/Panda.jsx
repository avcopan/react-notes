// export function Panda(props) {
//   return (
//     <p>Hello, I am a {props.disposition} panda. My name is {props.name}.</p>
//   );
// }
export function Panda({ disposition='friendly', name='Pandoot' }) {
  return (
    <p>Hello, I am a {disposition} panda. My name is {name}.</p>
  );
}