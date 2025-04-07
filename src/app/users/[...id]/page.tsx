

interface PropsType {
  params: Promise<{
    id: number[]
  }>,
  searchParams: object
}

export default async function App({ params, searchParams }: PropsType) {
  const id = (await params).id.join(", ")
  const name = (await searchParams).name
  return (
    <div>
      <p>ID is {id}::{name}</p>
    </div>
  )
}