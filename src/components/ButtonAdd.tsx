export default function ButtonAdd({ handler }: any) {
  return (
    <button onClick={() => handler((count: any) => count + 2)}>
      Add
    </button>
  )
}
