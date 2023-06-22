
// !para correr el proyecto no es necesario el run debug desde vscode, usa el comando npm run dev en la carpeta asignada!


const newMessage = { message: 'Hello world!', title: 'Pollo'}
;
export const TestApp = () => {


  return (
    <>
    
      <h1>{JSON.stringify(newMessage) }</h1>
      <p>soy un subtitulo </p>
    </>
  )
}
