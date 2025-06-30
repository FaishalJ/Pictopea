interface Props {
  params: Promise<{ id: string }>
}
export default async function TransformationsPage({params}: Props) {
  const { id } = await params;
  
  return <h1>Transformations Page</h1>;
}