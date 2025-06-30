interface Props {
  params: Promise<{ id: string }>
}
export default async function UpdateTransformationPage({params}: Props) {
  const { id } = await params;

  return <h1>UpdateTransformation Page</h1>;
}