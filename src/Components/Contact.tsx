
export const Contact = () => {
  return (
    <div className="page">
      <h1>Contact</h1>
      <form action="mailto:rodrysxc@gmail.com" className="contact">
        <input type="text" name="" id="" placeholder='Name' />
        <input type="text" name="" id="" placeholder='Surname' />
        <input type="text" name="" id="" placeholder='Email' />
        <textarea name="" placeholder="Reason"></textarea>
       <input type="submit" value="Send" />
      </form>
    </div>
  )
}
