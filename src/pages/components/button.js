export default function Button() {
  return (
    <button 
      id='myBtn' 
      onClick={() => {
        document.getElementById('myBtn').style.backgroundColor = 'green';
        document.getElementById('myBtn').style.fontSize = '50px';
      }}
    >
      Click me
    </button>
  );
}
